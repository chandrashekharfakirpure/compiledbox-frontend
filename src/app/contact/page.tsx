import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import React from 'react'
import ContactForm from './form'
import { Heading } from '@/components/custom/heading'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='flex flex-col gap-5 justify-center items-center pb-10 lg:pb-16'>
                        <Heading className='bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent'> We&apos;d love to help you.</Heading>
                        <p className='text-center'>Awesome, you finally made your decision here!<span className='lg:block'>Fill these forms & we will contact you back</span></p>
                    </div>
                    <div className='pt-20 bg-white p-10 rounded-[1.5rem] lg:rounded-[2rem] shadow-xl'>
                        <ContactForm/>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Page