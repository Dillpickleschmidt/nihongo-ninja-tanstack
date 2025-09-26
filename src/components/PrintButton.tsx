import { Button } from "./ui/button"
import { cn } from "@/utils"
import { Printer } from "lucide-solid"
import { render } from "solid-js/web"

type PrintButtonProps = {
  ref: () => HTMLElement | undefined
  class?: string
  buttonSize?: number
  customCSS?: string
  title?: string
}

function printWithTailwind({
  title,
  component,
  customCSS = "",
}: {
  title: string
  component: () => any
  customCSS?: string
}) {
  const iframe = document.createElement("iframe") as HTMLIFrameElement
  iframe.style.position = "absolute"
  iframe.style.top = "-10000px"
  document.body.appendChild(iframe)

  const contentWindow = iframe.contentWindow

  if (!contentWindow || !contentWindow.document) {
    console.error("Unable to access iframe contentWindow or document.")
    document.body.removeChild(iframe)
    return
  }

  const doc = contentWindow.document
  doc.open()
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <script src="https://cdn.tailwindcss.com" onload="window.tailwindLoaded = true"></script>
        <style>
          @page {
            margin: 0;
            size: A4;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          ::placeholder {
            opacity: 0 !important;
          }
          ${customCSS}
        </style>
    </head>
    <body>
        <div id="print-solid-tailwind-root"></div>
    </body>
    </html>
  `
  doc.write(htmlContent)
  doc.close()

  function cleanup() {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe)
    }
  }

  // Wait for Tailwind to actually load
  function waitForTailwind() {
    if (contentWindow.tailwindLoaded) {
      renderAndPrint()
    } else {
      // Check every 50ms for up to 5 seconds
      const checks = 100
      let currentCheck = 0

      const checkInterval = setInterval(() => {
        currentCheck++

        try {
          if (contentWindow.tailwindLoaded) {
            clearInterval(checkInterval)
            renderAndPrint()
          } else if (currentCheck >= checks) {
            clearInterval(checkInterval)
            console.warn(
              "Tailwind failed to load after 5 seconds, proceeding anyway",
            )
            renderAndPrint()
          }
        } catch (error) {
          console.error("Error checking Tailwind status:", error)
          clearInterval(checkInterval)
          renderAndPrint()
        }
      }, 50)
    }
  }

  function renderAndPrint() {
    const rootElement = doc.getElementById("print-solid-tailwind-root")
    if (!rootElement) {
      console.error("Could not find root element in iframe")
      cleanup()
      return
    }

    try {
      // Render SolidJS component
      render(component, rootElement)

      // Use requestAnimationFrame to ensure rendering is complete
      contentWindow.requestAnimationFrame(() => {
        // Set up print event handlers to know when printing is done
        let printCompleted = false

        const handleAfterPrint = () => {
          if (!printCompleted) {
            printCompleted = true
            contentWindow.removeEventListener("afterprint", handleAfterPrint)
            cleanup()
          }
        }

        // Listen for print events
        contentWindow.addEventListener("afterprint", handleAfterPrint)

        try {
          contentWindow.focus()
          contentWindow.print()
        } catch (error) {
          console.error("Error during printing:", error)
          if (!printCompleted) {
            printCompleted = true
            contentWindow.removeEventListener("afterprint", handleAfterPrint)
            cleanup()
          }
        }
      })
    } catch (error) {
      console.error("Error during SolidJS render:", error)
      cleanup()
    }
  }

  waitForTailwind()
}

export default function PrintButton(props: PrintButtonProps) {
  function handlePrint() {
    const printableElement = props.ref()
    if (!printableElement) {
      console.error("Printable element not found")
      return
    }

    // Clone the element and create a component function for SolidJS
    const clonedElement = printableElement.cloneNode(true) as HTMLElement

    // Process the cloned element for print
    const processForPrint = (element: HTMLElement) => {
      // Transform print: classes
      element.querySelectorAll('[class*="print:"]').forEach((el) => {
        el.className = el.className
          .split(" ")
          .map((cls) =>
            cls.startsWith("print:") ? cls.replace("print:", "") : cls,
          )
          .join(" ")
      })

      return element
    }

    const processedElement = processForPrint(clonedElement)

    // Create a SolidJS component that renders the processed element
    const PrintComponent = () => {
      return processedElement
    }

    // Use our custom print function
    printWithTailwind({
      title: props.title || "Print",
      component: PrintComponent,
      customCSS: props.customCSS,
    })
  }

  return (
    <Button
      title="Print"
      onClick={handlePrint}
      variant="ghost"
      class={cn("h-[x] w-[x] !p-2 print:hidden", props.class)}
    >
      <Printer class={`size-12! opacity-25`} />
    </Button>
  )
}
