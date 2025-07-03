import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-blue-600 text-white hover:bg-blue-700",
                secondary:
                    "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
                destructive:
                    "border-transparent bg-red-600 text-white hover:bg-red-700",
                outline: "text-gray-900 border-gray-300",
                liverpool: "border-transparent bg-liverpool-red text-white hover:bg-liverpool-red/80",
                gold: "border-transparent bg-liverpool-gold text-black hover:bg-liverpool-gold/80",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants } 