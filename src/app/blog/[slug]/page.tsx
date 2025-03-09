import { getObjectData } from "@/_services/get-data-object";
import { Heading } from "@/components/custom/heading";
import ShareButtons from "@/components/custom/share-buttons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import parse from "html-react-parser";
import { BookIcon } from "lucide-react";
import Link from "next/link";


const Page = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params
    const data = await getObjectData('articles', slug);
    const desc = parse(data.content) || <code></code>
    return (

        <>
            <section className="relative py-20 lg:py-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='py-12 lg:py-16 bg-bgdark rounded-[1.5rem] md:rounded-[2.5rem]'>
                        <div className="px-5 lg:px-10 space-y-5">
                            <div className="flex flex-col gap-5">
                                <Heading className="text-gray-50 font-normal">{data.title}</Heading>
                            </div>
                            <div className="text-gray-100 flex justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-gray-100 2xl:text-lg">{data.user_name}</h3>
                                    <p className="text-sm text-gray-200">{data.updated_at}</p>
                                </div>
                                <BookIcon size={80} strokeWidth={1} color="#2563eb" />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="relative pb-20 lg:pb-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-16'>
                        <ShareButtons slug={data.slug}/>
                        <div className="px-5 lg:px-10 py-8 lg:py-12 space-y-5 bg-white rounded-[1.5rem] md:rounded-[1.5rem] col-span-3">
                            <div className="text-gray-700 space-y-5 font-light tracking-wide" id="content">
                                {desc}
                            </div>
                        </div>
                        <div className="space-y-10 h-fit lg:sticky lg:inset-24">
                            <div className="p-7 space-y-16 bg-[#191919] rounded-[1.2rem] md:rounded-[1.4rem] flex flex-col justify-between">
                                <div className="space-y-3">
                                    <h3 className="text-gray-100 text-2xl lg:text-3xl">Start Project</h3>
                                    <p className="text-gray-200">Bring your vision to life with a custom website. Let&apos;s chat about your goals.</p>
                                </div>
                                <div>
                                    <Link href='/contact' className="py-3 text-sm px-8 bg-blue-600 hover:bg-blue-600/90 text-gray-100 rounded-full">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page