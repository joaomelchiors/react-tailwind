import { ReactNode } from "react"

interface GridProps {
    cols?: number
    gap?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number  //não é permitido começar uma variável com número
    children: NonNullable<ReactNode>
    clasName?: string

}

export default function Grid(props: GridProps) {
    return(
        <div id="renderGrid" className={`w-full gap-${props.gap ?? 0 } 
        grid grid-cols-${props.cols ?? 1}
        ${props.sm ? `sm:grid-cols-${props.sm}` : ``}
        ${props.md ? `md:grid-cols-${props.md}` : ``}
        ${props.lg ? `lg:grid-cols-${props.lg}` : ``}
        ${props.xl ? `xl:grid-cols-${props.xl}` : ``}
        ${props.xl2 ? `2xl:grid-cols-${props.xl2}` : ``}
        ${props.clasName ?? ``}
        `}>
                {props.children}
        </div>
    )
}