import { Heading } from '@/components/custom/heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

const Page = () => {
    return (
        <>
            <section className="relative py-20 lg:py-24">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center py-20 sm:py-24 bg-white rounded-[1.5rem] md:rounded-[3rem]'>
                    <Heading>Under Development....</Heading>
                        {/* <Heading>Tutorials & Insights</Heading>
                        <p className='text-center'>Dive into CompiledBox educational content and insights.</p> */}
                    </div>
                </MaxWidthWrapper>
            </section>
            
        </>
    )
}

export default Page