import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"

export const Navbar = async () => {
    return (
        <nav className="sticky z-50 h-16 inset-0 top-0 w-full border-b border-gray-700 bg-[#181818] backdrop-blur transition-all">
            <MaxWidthWrapper className="max-w-screen-3xl">
                <div className="flex h-16 items-center justify-between">
                    <Link href='/' className="flex z-40 font-semibold text-white border-2 border-brand-800 py-1 px-4">
                        compiledbox
                    </Link>
                    <div className="h-full flex items-center space-x-4">

                        <Link href='/pricing' className= 'flex items-center gap-1 font-medium text-gray-50 hover:bg-gray-800/70 py-1 px-4 rounded-md'>
                            Home
                        </Link>
                        <Link href='/sign-in' className= 'flex items-center gap-1 font-medium text-gray-50 hover:bg-gray-800/70 py-1 px-4 rounded-md'>
                            Web Design
                        </Link>
                        <Link href='/sign-in' className= 'flex items-center gap-1 font-medium text-gray-50 hover:bg-gray-800/70 py-1 px-4 rounded-md'>
                            Projects
                        </Link>
                        <Link href='/sign-in' className= 'flex items-center gap-1 font-medium text-gray-50 hover:bg-gray-800/70 py-1 px-4 rounded-md'>
                            About
                        </Link>
                        <Link href='/sign-in' className= 'flex items-center gap-1 font-medium text-gray-50 hover:bg-gray-800/70 py-1 px-4 rounded-md'>
                            Blog
                        </Link>
                        <Link href='/sign-in' className= 'flex items-center gap-1 font-medium text-gray-50 hover:bg-gray-800/70 py-1 px-4 rounded-md'>
                            Contact
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
