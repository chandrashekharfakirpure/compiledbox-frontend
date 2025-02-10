import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import React from 'react'
import ContactForm from './form'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center pb-10 lg:pb-16'>
                        <h1 className=" text-center text-[2rem] lg:text-[4rem] leading-snug font-normal tracking-tighter bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent">
                            We&apos;d love to help you.
                        </h1>
                        <p className='text-center'>Awesome, you finally made your decision here!<span className='lg:block'>Fill these forms & we will contact you back</span></p>
                    </div>
                    <div className='pt-20 bg-white p-10 rounded-[1.8rem] lg:rounded-[2rem] shadow-xl'>
                        <ContactForm/>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page