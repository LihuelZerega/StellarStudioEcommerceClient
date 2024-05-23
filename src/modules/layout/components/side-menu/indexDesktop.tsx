"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full h-16">
        <div className="w-full">
          <ul className="flex flex-row gap-x-6">
            {Object.entries(SideMenuItems).map(([name, href]) => {
              return (
                <li key={name}>
                  <LocalizedClientLink
                    href={href}
                    className="text-base"
                    onClick={close}
                    data-testid={`${name.toLowerCase()}-link`}
                  >
                    {name}
                  </LocalizedClientLink>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="px-6">
          <div className="flex flex-col gap-y-6">
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onMouseEnter={toggleState.open}
              onMouseLeave={toggleState.close}
            >
              {regions && (
                <CountrySelect toggleState={toggleState} regions={regions} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-full">
        <div className="flex items-center h-full">
          <Popover className="h-full flex">
            {({ open, close }) => (
              <>
                <div className="relative flex h-full">
                  <Popover.Button
                    data-testid="nav-menu-button"
                    className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                  >
                    Menu
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
                  <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                    <div
                      data-testid="nav-menu-popup"
                      className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
                    >
                      <div className="flex justify-end" id="xmark">
                        <button data-testid="close-menu-button" onClick={close}>
                          <XMark />
                        </button>
                      </div>

                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div> */}
    </>
  )
}

export default SideMenu
