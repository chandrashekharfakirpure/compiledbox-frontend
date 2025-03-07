import { Heading } from "@/components/custom/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import Image from "next/image"
import Link from "next/link"


const Page = () => {
    return (
        <>
            <section className="relative py-20 lg:py-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center py-20 sm:py-24 bg-white rounded-[1.5rem] md:rounded-[3rem]'>

                        <Heading>Under development</Heading>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="relative pb-20 lg:pb-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        <div>
                            <Link href='/blog/cyber' className='space-y-4'>
                                <Image src='/images/02.png' width={600} height={600} alt='' className='rounded-2xl lg:rounded-3xl' />
                                <h2 className='text-lg'>Learn more about cybersecurity basics</h2>
                                <p className='text-sm font-light'>January 10, 2025</p>
                            </Link>
                        </div>
                        <div>
                            <Link href='/cyber' className='space-y-4'>
                                <Image src='/images/01.png' width={600} height={600} alt='' className='rounded-2xl lg:rounded-3xl' />
                                <h2 className='text-lg'>Learn more about cybersecurity basics</h2>
                                <p className='text-sm font-light'>January 10, 2025</p>
                            </Link>
                        </div>
                        <div>
                            <Link href='/cyber' className='space-y-4'>
                                <Image src='/images/03.jpg' width={600} height={600} alt='' className='rounded-2xl lg:rounded-3xl' />
                                <h2 className='text-lg'>Learn more about cybersecurity basics</h2>
                                <p className='text-sm font-light'>January 10, 2025</p>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page