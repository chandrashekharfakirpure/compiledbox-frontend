import { GetObjectData } from "@/_services/get-data-object";
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import Link from "next/link"
import parse from "html-react-parser"


const Page = async ({
    params,
  }: {
    params: { slug: string };
  }) => {
    const data = await GetObjectData('articles', params.slug);
    console.log(data.content)
    const desc = parse(data.content) || <code></code>

    return (
        
        <>
            <section className="relative py-20 lg:py-24">
                <MaxWidthWrapper>
                    <div className='py-12 lg:py-24 bg-white rounded-[1.5rem] md:rounded-[2.5rem]'>
                        <div className="px-5 lg:px-10 space-y-5">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-[2rem] lg:text-[3rem] text-gray-800">{data.title}</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between text-gray-700 text-sm">
                                <p>By {data.user_name}</p>
                                <p>Update at {data.updated_at}</p>
                            </div>
                        </div>
                    </div>

                </MaxWidthWrapper>
            </section>
            <section className="relative pb-20 lg:pb-24">
                <MaxWidthWrapper>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                        <div className="px-5 lg:px-10 py-8 lg:py-12 space-y-5 bg-white rounded-[1.5rem] md:rounded-[1.5rem] col-span-3">
                            <div className="text-gray-700 space-y-5 font-light tracking-wide">
                                    {desc}
                            </div>
                        </div>
                        <div className="p-7 space-y-16 bg-[#191919] rounded-[1.5rem] md:rounded-[1.5rem] flex flex-col justify-between h-fit lg:sticky lg:inset-24">
                            <div className="space-y-3">
                                <h3 className="text-gray-100 text-2xl lg:text-3xl">Start Project</h3>
                                <p className="text-gray-200">Bring your vision to life with a custom website. Let&apos;s chat about your goals.</p>
                            </div>
                            <div className="">
                                <Link href='/contact' className="py-3 text-sm px-8 bg-blue-600 hover:bg-blue-600/90 text-gray-100 rounded-full">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>

                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page