import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="py-10 sm:pt-16 lg:pt-24 border-t border-gray-200 bg-[#272526]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              <Image
                src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716829357/StellarStudioLogo_wchl8q.png"
                width={200}
                height={200}
                alt="Stellar Studio Logo"
              />
            </LocalizedClientLink>
            <p className="text-base leading-relaxed text-gray-200 my-7">
              Proveemos un servicio de desarrollo de desarrollo web de alta
              calidad con la mision de impulsar su crecimiento y presencia en
              linea. Mejoramos constantemente la tecnologia de las mismas y
              garantizamos que su sitio web cumpla con sus expectativas.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-[#a482fb]">Servicios</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  One Page{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Landing Page{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  E-commerce{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Personalizado{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Comprar Dominio{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Correo Profecional{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-[#a482fb]">Compañia</p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Sobre Stellar Studio{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Misión, Visión y Valores{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Historia{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Equipo{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Tecnolgia{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Contactanos{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-[#a482fb]">
              Informacion
            </p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="/articulos/terminos-y-condiciones"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Formas de Pago{" "}
                </a>
              </li>

              <li>
                <a
                  href="/articulos/terminos-y-condiciones"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Precios{" "}
                </a>
              </li>

              <li>
                <a
                  href="/articulos/politica-de-privacidad"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Opiniones{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-[#a482fb]">Ayuda</p>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="/whatsapp"
                  title=""
                  className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                >
                  {" "}
                  Atencion al cliente{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Colecciones
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        {/* <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © Copyright{new Date().getFullYear()} , All Rights Reserved by
            Stellar Studio.
          </Text>
        </div> */}
      </div>
    </footer>
  )
}
