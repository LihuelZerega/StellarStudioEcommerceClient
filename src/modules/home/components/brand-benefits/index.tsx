import { TruckDeliveryIcon, CreditCardPosIcon, DiscountTag01Icon, ShoppingBasketSecure03Icon } from "./Icons"

const stats = [
  { id: 1, icon: <TruckDeliveryIcon />, value: "Envíos gratis en tu primer compra" },
  {
    id: 2,
    icon: <CreditCardPosIcon /> ,
    value: "Pagá en cuotas sin interés",
  },
  {
    id: 3,
    icon: <DiscountTag01Icon />,
    value: "Descuentos y Ofertas Exclusivas",
  },
  { id: 4, icon: <ShoppingBasketSecure03Icon />, value: "Comprá de manera segura" },
]

export default function BrandBenefits() {
  return (
    <div className="bg-white py-12 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center items-center justify-start lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex max-w-xs flex-col-reverse gap-y-4 justify-start mx-auto">
              <div className="order-first text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
                {stat.value}
              </div>
              <div className="flex flex-row items-center justify-center">{stat.icon}</div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
