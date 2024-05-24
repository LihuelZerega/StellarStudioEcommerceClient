import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <div className="w-full">
        <div className="flex flex-row items-center justify-between border-b-1 border-neutral-200">
          <div>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl">
              {collection.title}
            </h1>
          </div>
          <div>
            <RefinementList sortBy={sortBy || "created_at"} />
          </div>
        </div>
        <div className="py-6 lg:py-12">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sortBy || "created_at"}
              page={pageNumber}
              collectionId={collection.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
