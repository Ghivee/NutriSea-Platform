import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Konfigurasi variasi tampilan tombol menggunakan CVA (Class Variance Authority)
// Memudahkan pengelolaan warna dan gaya (seperti gaya utama atau garis bawah) dengan kelas terpisah
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
                outline: "border border-neutral-700 bg-transparent text-neutral-200 hover:bg-neutral-800",
                secondary: "bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 border border-blue-800/50",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-full px-4 text-xs",
                lg: "h-12 rounded-full px-8 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

// Menyiapkan tipe prop standar dari HTML Button ditambah properti varian yang telah kita tetapkan
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean // Izinkan tombol digunakan sebagai pembungkus untuk link (Tag anchor)
}

// Komponen Tombol Fungsional yang Meneruskan Referensi DOM (ForwardRef)
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Jika diberikan 'asChild', kita membungkus children-nya langsung menggunakan komponen Slot
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }