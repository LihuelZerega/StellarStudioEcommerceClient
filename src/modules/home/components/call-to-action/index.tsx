import React from "react"

function index() {
  return (
    <div className="pb-6 md:pb-12">
      <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716556194/CallToActionBg_cu5fdi.png"
            alt=""
          />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:w-2/3 lg:w-1/2 xl:w-4/7 md:text-left">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              ¿Estás listo para <span className="border-b-2 border-[#a482fb]">despegar</span> con tu <span className="border-b-2 border-[#a482fb]">tienda online</span>?
            </h2>
            <p className="mt-4 text-base text-gray-200">
              ¡No esperes más y lleva tu negocio al mundo digital hoy mismo!
              ¡Haz clic aquí para empezar tu camino hacia el éxito!
            </p>

            <div className="pt-6 md:pt-12">
              <button className="py-2 px-3 mr-3 text-sm rounded-md text-white bg-[#a482fb] hover:bg-violet-400 shadow-sm hover:shadow-md">
                Comenzá tu camino
              </button>
              <button className="py-2 px-3 text-sm text-white hover:text-neutral-100 shadow-sm hover:shadow-md">
                Ver mas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
