import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"

export const Navbar = async () => {
    return (
        <nav className="sticky z-50 h-16 inset-0 top-0 w-full bg-gray-50 drop-shadow-sm">
            <MaxWidthWrapper className="max-w-screen-3xl">
                <div className="flex h-16 items-center justify-between">
                    <Link href='/' className="flex z-40 font-semibold text-gray-900 border-2 border-blue-600 py-1 px-4">
                        compiledbox
                    </Link>
                    <div className="hidden h-full lg:flex items-center space-x-4">
                        <Link href='/pricing' className= 'flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                            Pricing
                        </Link>
                        <Link href='/agency' className= 'flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                            Agency
                        </Link>
                        <Link href='/blog' className= 'flex text-sm items-center gap-1 text-gray-800 hover:bg-gray-100 py-1 px-4 rounded-md'>
                            Blog
                        </Link>
                        <Link href='/contact' className="py-2 text-sm px-8 bg-bgdark hover:bg-bgdark/90 text-gray-100 rounded-full">
                            Contact
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
