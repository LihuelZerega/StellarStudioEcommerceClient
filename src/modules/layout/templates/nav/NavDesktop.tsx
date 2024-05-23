import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu/indexDesktop"
import Image from "next/image"

export default async function NavDesktop() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="hidden lg:block sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container flex items-center justify-between w-full h-full">
          <div className="flex flex-row items-center w-fit h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715895790/StellarStudioLogoNegative_xaykly.png"
                width={200}
                height={200}
                alt="Stellar Studio Logo"
              />
            </LocalizedClientLink>
            <div className="pl-6 h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center gap-x-6 h-full w-fit justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
