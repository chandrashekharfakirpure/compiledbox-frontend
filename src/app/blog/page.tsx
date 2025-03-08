import { GetObjectListData } from '@/_services/get-data-object'
import { Heading } from '@/components/custom/heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

type TutorialsProps = {
    title: string;
    category_name: string;
    slug: string;
    image_url: string
};

const Page = async (props: Props) => {
    const page = props.searchParams["page"] ?? "1";
    const data = await GetObjectListData("articles", page);
    console.log(data)

    return (
        <>
            <section className="relative py-20 lg:py-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center py-20 sm:py-24 bg-white rounded-[1.5rem] md:rounded-[3rem]'>

                        <Heading>Tutorials & Insights</Heading>
                        <p className='text-center'>Dive into CompiledBox educational content and insights.</p>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="relative pb-20 lg:pb-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
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
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page