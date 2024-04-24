import { cn } from "@/lib/utils"

export default function Section({ id, children, className }: { id?: string, children: React.ReactNode, className?: string }) {
    return (
        <section
            id={id}
            className={cn('px-8 w-full py-20', className)} >
            {/* <div className={cn('w-full mx-auto max-w-[1000px]', className)}> */}
                {children}
            {/* </div> */}
        </section>
    )
}