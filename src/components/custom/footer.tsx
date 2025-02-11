import Link from 'next/link'
import { MaxWidthWrapper } from '../max-width-wrapper'
import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <section className="relative   bg-bgdark mx-5 rounded-[2rem] mb-5">
                <MaxWidthWrapper className="max-w-screen-3xl py-20 lg:py-24">
                    <div className='p-3 lg:p-5 rounded-3xl space-y-10'>
                        <div>
                            <h2 className='text-[3rem] lg:text-[5rem] text-center text-white'>Let&apos;s Collab</h2>
                            <p className='text-center text-gray-200 text-xl'>Your next departure starts here </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link href='#getstarted' className='flex  items-center justify-center rounded-full py-4 px-10 bg-blue-600 hover:bg-blue-600/90 text-white group'>Book a Call <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" /></Link>
                        </div>
                    </div>

                </MaxWidthWrapper>
                <div className='flex bg-indigo-600 py-1 px-10 gap-10 mt-10 overflow-clip'>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <><div key={i}><h4 className='text-white'>CONSOLE.LOG</h4></div></>
                    ))}
                </div>
                <MaxWidthWrapper className="max-w-screen-3xl py-10">
                    <div className='flex flex-col lg:flex-row gap-5 items-center justify-between'>
                        <div>
                            <ul className='flex flex-row text-gray-200 gap-5 lg:gap-10'>
                                <li><Link href='/agency'>Agency</Link></li>
                                <li><Link href='/blog'>Blog</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Link href='/' className="flex z-40">
                                <Image src='/images/logo-white.png' width={300} height={53} alt="CompiledBox Logo" />
                                <span className="sr-only">CompiledBox</span>
                            </Link>
                        </div>
                        <div>
                            <ul className='flex flex-row text-gray-200 gap-5 lg:gap-10'>
                                <li><Link href='/terms-of-service'>Terms of Service</Link></li>
                                <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}

export default Footer