import React from "react"

function index() {
  return (
    <div className="px-6 2xl:px-64 py-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-x-6">
        <div className="lg:h-[500px] 2xl:h-[600px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          <div className="flex flex-col items-center justify-center pt-56">
            <h2 className="font-semibold text-lg pb-2">NEW</h2>
            <button className="py-2 px-3 text-sm rounded-md bg-white shadow-sm hover:shadow-md">
              Shop Now
            </button>{" "}
          </div>
        </div>

        <div className="lg:h-[500px] 2xl:h-[600px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          <div className="flex flex-col items-center justify-center pt-56">
            <h2 className="font-semibold text-lg pb-2">SALE</h2>
            <button className="py-2 px-3 text-sm rounded-md bg-white shadow-sm hover:shadow-md">
              Shop Now
            </button>{" "}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center py-12 gap-x-6">
        <div className="flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          {" "}
          <h2>SALE</h2>
        </div>
        <div className="flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          {" "}
          <h2>HOODIES</h2>
        </div>
        <div className="flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          {" "}
          <h2>T-SHIRTS</h2>
        </div>
        <div className="flex flex-col items-center justify-center font-semibold pt-2 lg:h-[250px] 2xl:h-[300px] w-full bg-neutral-100 border-1 border-neutral-200 rounded-lg">
          {" "}
          <h2>PANTS</h2>
        </div>
      </section>
    </div>
  )
}

export default index
