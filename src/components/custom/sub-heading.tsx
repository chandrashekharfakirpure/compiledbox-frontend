import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
    children?: ReactNode

}

export const Subheading = ({ children, className, ...props }: HeadingProps) => {
    return (
        <h2 className={cn('text-[3rem] lg:text-[3.2rem] ', className)}
            {...props}
        >
            {children}
        </h2>
    )
}