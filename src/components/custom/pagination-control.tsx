'use client'
import { PaginationWrapperProps } from "@/_utilities/next-type"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
    totalPages,
    currentPage,
    has_next,
    has_previous,
    first_page
}) => {
    const router = useRouter()
    console.log(has_next)
    return (
        <>
            <section className="flex mx-auto justify-end  ">
      <div className="flex px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            
            <nav className="isolate inline-flex -space-x-px rounded-full border border-blue-600 p-4" aria-label="Pagination">

              {has_previous ?

                <>
                  {Number(currentPage) !== 2 ?

                    <button
                      onClick={() => {
                        router.push(`?page=${Number(currentPage) - 1}`)
                      }}
                      className="relative inline-flex items-center rounded-full p-4 text-blue-600 hover:text-white transition-colors duration-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                    :
                    <button
                      onClick={() => {
                        router.push(`${first_page}`)
                      }}
                      className="relative inline-flex items-center rounded-full p-4 text-blue-600 hover:text-white transition-colors duration-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                  }

                </>

                : <button
                  disabled
                  className="relative inline-flex items-center rounded-full p-4 text-blue-600 hover:text-white transition-colors duration-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              }
              <p

                aria-current="page"
                className="relative z-10 inline-flex items-center px-4 py-2 text-sm text-gray-700 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {currentPage} / {totalPages}
              </p>
              {has_next ?
                <button
                  onClick={() => {
                    router.push(`?page=${Number(currentPage) + 1}`)
                  }}
                  className="relative inline-flex items-center rounded-full p-4 text-blue-600 hover:text-white transition-colors duration-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
                </button>
                :
                <button disabled
                  className="relative inline-flex items-center rounded-full p-4 text-blue-600 hover:text-white transition-colors duration-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500  focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              }
            </nav>
          </div>
        </div>
      </div>
    </section >

        </>
    )
}

export default PaginationWrapper