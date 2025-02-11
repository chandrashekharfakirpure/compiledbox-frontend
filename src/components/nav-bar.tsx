import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { AlignRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"

export const Navbar = async () => {
    return (
        <nav className="sticky z-50 h-16 inset-0 top-0 w-full bg-gray-50 drop-shadow-sm">
            <MaxWidthWrapper className="max-w-screen-3xl flex md:flex-col justify-between">
                <div className="flex h-16 items-center justify-between">
                    <Link href='/' className="flex z-40">
                        <Image src='/images/logo.png' width={300} height={53} alt="CompiledBox Logo" />
                        <span className="sr-only">CompiledBox</span>
                    </Link>
                    <div className="hidden h-full lg:flex items-center space-x-4">
                        <Link href='/pricing' className='flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                            Pricing
                        </Link>
                        <Link href='/agency' className='flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                            Agency
                        </Link>
                        <Link href='/blog' className='flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                            Blog
                        </Link>
                        <Link href='/contact' className="py-2 text-sm px-8 bg-bgdark hover:bg-bgdark/90 text-gray-100 rounded-full">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className='flex md:hidden px-1'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button><AlignRightIcon size={30} /></button>
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetTitle>
                                <Link href='/' className="flex z-40">
                                    <Image src='/images/logo.png' width={300} height={53} alt="CompiledBox Logo" />
                                    <span className="sr-only">CompiledBox</span>
                                </Link>
                            </SheetTitle>

                            <div className='pt-5'>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href='/pricing' className='flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/agency' className='flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                                            Agency
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/blog' className='flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact' className="py-2 text-sm px-8 bg-bgdark hover:bg-bgdark/90 text-gray-100 rounded-full">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="flex items-center gap-1 cursor-default hover:bg-accent rounded-sm w-fit text-sm outline-none focus:bg-accent">

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                
            </MaxWidthWrapper>
            
        </nav>
    )
}
