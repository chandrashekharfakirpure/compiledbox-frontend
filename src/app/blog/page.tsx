import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import React from 'react'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center pb-10 lg:pb-16'>
                        
                        <h1 className=" text-center text-[2rem] lg:text-[4rem] leading-snug font-medium tracking-tighter bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent">
                            Under Development
                        </h1>
                        <p className='text-center'>We are developing blog....</p>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page