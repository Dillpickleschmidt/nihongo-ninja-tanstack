import Kikusasaizu from "@/features/kikusasaizu/Kikusasaizu"

export default function page() {
  return (
    <>
      <Kikusasaizu src="https://h5p.cee.sfu.ca/h5p/embed/2319" />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">Kikusasaizu 1.1</h1>
        </div>
        <p>
          I know, I know, I said no boring textbook examples. But let's be
          honest, the amount of Japanese that you currently know is still quite
          small.
        </p>
        <p>
          Bear with it for this one video. I just want to make sure you have
          something easy enough to feel good about understanding.
        </p>
        <p>
          We'll do another video right after this that's a bit more human
          feeling, but will have some parts that will take some additional
          explaining.
        </p>
      </div>
    </>
  )
}
