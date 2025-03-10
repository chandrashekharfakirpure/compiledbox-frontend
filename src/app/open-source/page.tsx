import { Subheading } from '@/components/custom/sub-heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { DownloadIcon, FrameIcon, GitForkIcon, MaximizeIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                        <div className='col-span-2 bg-bgdark p-10 rounded-[1.8rem] lg:rounded-[2rem] '>
                            <div className='space-y-6'>
                                <h1 className='py-3 px-5 lg:py-4 lg:px-8 bg-gray-200 text-gray-900 w-fit rounded-full'> We love open source!</h1>
                                <Subheading className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Open Source Code</Subheading>
                                <p className='text-gray-100 max-w-3xl text-[1.1rem] font-light'>We are excited to introduce our open-source library, designed for speed, efficiency, and seamless integration. Our library provides a minimal yet powerful solution for modern developers.</p>
                            </div>
                            <div className='flex justify-end'>
                                <FrameIcon color='#2563eb' strokeWidth={1} size={100} />
                            </div>
                        </div>
                        <div className='bg-bgdark p-5 xl:p-10 rounded-[1.8rem] lg:rounded-[2rem] flex flex-col justify-between'>
                            <Subheading className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-[2rem] lg:text-[2.5rem] xl:text-[3.2rem]'>Simplifying Development</Subheading>
                            <div className='flex justify-end'>
                                <MaximizeIcon color='#2563eb' strokeWidth={1} size={100} />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="relative pb-24 lg:pb-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        <div>
                            <Link href='https://github.com/compiledbox/ts-config-manager/' target='_blank' className='group'>
                                <div className='py-10 lg:py-12 lg:px-10 px-7 rounded-[1.5rem] lg:rounded-[1.8rem] border border-blue-200 shadow-sm group-hover:shadow-lg transition-shadow duration-500'>
                                    <div className='pb-10'>
                                        <h2 className="text-[1.5] lg:text-[2rem] mb-5 text-gray-800">ts-config-manager</h2>
                                        <p className="text-[1.1rem] font-light text-gray-700">
                                            A lightweight TypeScript library to simplify managing, validating, and transforming application configuration values.
                                        </p>
                                    </div>
                                    <div className='h-[0.1rem] w-full bg-blue-100' />
                                    <div className='pt-10 flex flex-row justify-between'>
                                        <div className='flex gap-2 items-center '>
                                            <StarIcon className='group-hover:text-yellow-400 group-hover:fill-yellow-400 ' /> 0
                                        </div>
                                        <div className='flex gap-2 items-center '>
                                            <GitForkIcon className='group-hover:text-blue-500'/> 0
                                        </div>
                                        <div className='flex gap-2 items-center '>
                                            <DownloadIcon className='group-hover:text-emerald-500'/> 0
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </div>

                    </div>
                </MaxWidthWrapper>
            </section>
            
        </>
    )
}

export default Page