export function BackgroundLayers() {
  return (
    <>
      {/* Blurred Background */}
      <div
        class="pointer-events-none fixed inset-0 -z-10 -mt-8 opacity-40 blur-lg"
        style={{
          "background-image": `url(/img/backgrounds/tranquil_village_by_k_jackson_katss_djqxpcz.png)`,
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div
        class="pointer-events-none fixed inset-0 -z-5"
        style={{
          background:
            "linear-gradient(to bottom, transparent 30%, rgba(18, 18, 18, 1) 100%)",
        }}
      />
    </>
  )
}
