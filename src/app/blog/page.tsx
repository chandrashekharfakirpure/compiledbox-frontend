import { getObjectListData, getSearchDataObject } from '@/_services/get-data-object'
import { SearchProps, TutorialsProps } from '@/_utilities/next-type'
import { Heading } from '@/components/custom/heading'
import PaginationWrapper from '@/components/custom/pagination-control'
import SearchQuery from '@/components/custom/search-query'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import Image from 'next/image'
import Link from 'next/link'


const Page = async (props: SearchProps) => {
    const { page } = await props.searchParams || '1'
    const page_no = page !== undefined ? page : '1'
    const data = await getObjectListData("articles", page_no);
    const { search } = await props.searchParams
    const search_data = search !== undefined ? search : ''
    const articleSearchData = search_data
        ? await getSearchDataObject('articles', search_data, page_no)
        : false

    return (
        <>
            <section className="relative py-20 lg:py-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center py-20 sm:py-24 bg-white rounded-[1.5rem] md:rounded-[3rem]'>
                        <div>
                            <Heading>Tutorials & Insights</Heading>
                            <p className='text-center'>Dive into CompiledBox educational content and insights.</p>
                        </div>
                        <div className='pt-5'>
                            <SearchQuery />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            {
                search_data ? (
                    <>
                        <section className="relative pb-20 lg:pb-24">
                            <MaxWidthWrapper className="max-w-screen-3xl">
                                {articleSearchData.results.length === 0 ?
                                    <div>
                                        <h2 className='text-center text-3xl'>Articles not found</h2>
                                    </div>
                                    :
                                    <>
                                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                                            {articleSearchData.results.map((item: TutorialsProps) => (
                                                <>
                                                    <div>
                                                        <Link href={`/blog/${item.slug}`} className='space-y-4'>
                                                            <Image src={`${process.env.API_URL}/${item.image_url}`} width={600} height={600} alt='' className='rounded-2xl lg:rounded-3xl' />
                                                            <h2 className='text-lg'>{item.title}</h2>
                                                            <p className='text-sm font-light'>January 10, 2025</p>
                                                        </Link>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                        <PaginationWrapper
                                            totalPages={data.total_pages}
                                            currentPage={data.page}
                                            first_page='/blog'
                                            has_next={data.has_next}
                                            has_previous={data.has_previous}
                                        />
                                    </>
                                }

                            </MaxWidthWrapper>
                        </section>
                    </>
                )
                    :
                    (<>
                        <section className="relative pb-20 lg:pb-24">
                            <MaxWidthWrapper className="max-w-screen-3xl">

                                {data.data === false ?
                                    <div>
                                        <h2 className='text-center text-3xl'>Articles not found</h2>
                                    </div>
                                    :
                                    <>
                                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                                            {data.results.map((item: TutorialsProps) => (
                                                <>
                                                    <div>
                                                        <Link href={`/blog/${item.slug}`} className='space-y-4'>
                                                            <Image src={`${process.env.API_URL}/${item.image_url}`} width={600} height={600} alt='' className='rounded-2xl lg:rounded-3xl' />
                                                            <h2 className='text-lg'>{item.title}</h2>
                                                            <p className='text-sm font-light'>January 10, 2025</p>
                                                        </Link>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                        <PaginationWrapper
                                            totalPages={data.total_pages}
                                            currentPage={data.page}
                                            first_page='/blog'
                                            has_next={data.has_next}
                                            has_previous={data.has_previous}
                                        />
                                    </>

                                }

                            </MaxWidthWrapper>
                        </section>
                    </>
                    )
            }

        </>
    )
}

export default Page