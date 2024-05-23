"use client"
import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import Image from "next/image"
import {
  Home06Icon,
  ShoppingBag02Icon,
  SearchAreaIcon,
  UserIcon,
  ShoppingCart01Icon,
} from "./Icons"

const SideMenuItems = {
  Home: { href: "/", icon: <Home06Icon /> },
  Store: { href: "/store", icon: <ShoppingBag02Icon /> },
  Search: { href: "/search", icon: <SearchAreaIcon /> },
  Account: { href: "/account", icon: <UserIcon /> },
  Cart: { href: "/cart", icon: <ShoppingCart01Icon /> },
}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="w-full h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#272526"
                      fill="none"
                    >
                      <path
                        d="M4 5L20 5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 12L20 12"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 19L20 19"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col fixed w-full h-full text-sm -left-0 top-0">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full w-full bg-white justify-between mx-auto p-5"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715895790/StellarStudioLogoNegative_xaykly.png"
                          width={200}
                          height={200}
                          alt="Stellar Studio Logo"
                        />
                      </div>
                      <div className="flex justify-end" id="xmark">
                        <button data-testid="close-menu-button" onClick={close}>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              color="#272526"
                              fill="none"
                            >
                              <path
                                d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="h-full mt-6 border-t">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-12">
                          <ul className="flex flex-col gap-y-4 items-start justify-start border-b pb-6">
                            {Object.entries(SideMenuItems).map(
                              ([name, { href, icon }]) => {
                                return (
                                  <li key={name}>
                                    <LocalizedClientLink
                                      href={href}
                                      className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center"
                                      onClick={close}
                                      data-testid={`${name.toLowerCase()}-link`}
                                    >
                                      <span className="mr-2">{icon}</span>
                                      {name}
                                    </LocalizedClientLink>
                                  </li>
                                )
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="h-full">
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex justify-between"
                          onMouseEnter={toggleState.open}
                          onMouseLeave={toggleState.close}
                        >
                          {regions && (
                            <CountrySelect
                              toggleState={toggleState}
                              regions={regions}
                            />
                          )}
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150",
                              toggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                        <Text className="flex justify-between txt-compact-small">
                          © {new Date().getFullYear()} Stellar Studio Store. All
                          rights reserved.
                        </Text>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
