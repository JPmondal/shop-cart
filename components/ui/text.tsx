import { cn } from "@/lib/utils"

export const Title = ({children,className}:{children : React.ReactNode, className? : string})=>{
    return (
        <h2 className={cn(" font-sans text-3xl font-bold text-shop_dark_green capitalize tracking-wide ",className)}>{children}</h2>
    )
}