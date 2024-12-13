import { ReactNode } from "react"

interface CaixaProps {
    children: ReactNode
    className?: string
}

export default function Caixa(props: CaixaProps) {
    return(
        <div className={`
            bg-red-500 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </div>
    )
}