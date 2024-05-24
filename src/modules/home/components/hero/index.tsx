import React from "react"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-opacity-30 bg-black">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover bg-opacity-90 bg-black"
      >
        <source
          src="https://res.cloudinary.com/dszjgdktf/video/upload/v1716550247/Clothing_commercial_shot_on_a7sIII__2_owjabg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-200 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20">
              Plantilla Inicial de Tienda Online.{" "}
              <a href="#" className="font-semibold text-[#a482fb]">
                <span className="absolute inset-0" aria-hidden="true" />
                Leer mas <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
              Vendé productos con una Tienda Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-200">
              Ideal para aquellos que venden productos y desean ampliar su
              alcance y llegar a una audiencia global.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#a482fb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a482fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Comenzar ahora
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-neutral-200"
              >
                Leer mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
