import React from "react"
import { Image } from "@nextui-org/react"

function index() {
  return (
    <div className="px-6 2xl:px-64 py-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-x-6">
        <div className="relative lg:h-[500px] 2xl:h-[600px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 select-none">
            <h2 className="font-semibold text-xl pb-2">NEW</h2>
            <a
              href=""
              className="py-2 px-3 text-sm rounded-md bg-white shadow-sm hover:shadow-md"
            >
              Shop Now
            </a>
          </div>
          <Image
            isZoomed
            radius="sm"
            width={680}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716553541/Sale2_gvo5x5.png"
            className="z-0"
          />
        </div>

        <div className="relative lg:h-[500px] 2xl:h-[600px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 select-none">
            <h2 className="font-semibold text-xl text-neutral-200 pb-2">
              SALE
            </h2>
            <a
              href=""
              className="py-2 px-3 text-sm rounded-md bg-white shadow-sm hover:shadow-md"
            >
              Shop Now
            </a>
          </div>
          <Image
            isZoomed
            radius="sm"
            width={680}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716553541/Sale_imjnrg.png"
            className="z-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center xl:pt-64 2xl:pt-32 pb-12 gap-x-6">
        <a href="" className="relative flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg cursor-pointer">
          <h2 className="absolute z-10 select-none text-neutral-200">SALE</h2>
          <Image
            isZoomed
            radius="sm"
            width={680}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716553540/Arrivals_v8qlyr.png"
            className="z-0"
          />
        </a>
        <a href="" className="relative flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg cursor-pointer">
          <h2 className="absolute z-10 select-none">HOODIES</h2>
          <Image
            isZoomed
            radius="sm"
            width={680}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716553540/Hoodies_bofszt.png"
            className="z-0"
          />
        </a>
        <a href="" className="relative flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg cursor-pointer">
          <h2 className="absolute text-neutral-200 z-10 select-none">PANTS</h2>
          <Image
            isZoomed
            radius="sm"
            width={680}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716553541/Pants_puydda.png"
            className="z-0"
          />
        </a>
        <a href="" className="relative flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg cursor-pointer">
          <h2 className="absolute z-10 select-none">T-SHIRTS</h2>
          <Image
            isZoomed
            radius="sm"
            width={680}
            height={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716553548/Tshirt_vrgbqh.png"
            className="z-0"
          />
        </a>
      </section>
    </div>
  )
}

export default index
