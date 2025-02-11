import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
    children?: ReactNode

}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
    return (
        <h1 className={cn('text-[2rem] lg:text-[4rem] leading-snug font-medium tracking-tighter bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent', className)}
            {...props}
        >
            {children}
        </h1>
    )
}