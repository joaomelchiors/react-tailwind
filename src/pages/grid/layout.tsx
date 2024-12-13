import Caixa from "@/components/templates/Caixa"
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo"

import Grid from "@/components/layout/Grid"
import Pagina from "@/components/templates/Pagina"



export default function PageGridInicial() {
    const codigoHTML = `Trecho no tailwind.config.ts
safelist: [
{
    pattern: /^grid-cols-/,
    variants: ['sm', 'md', 'lg', 'xl', '2xl']
}
],

Componente GRID
import { ReactNode } from "react"

interface GridProps {
    cols?: number
    children: NonNullable<ReactNode>
}

export default function Grid(props: GridProps) {
    return(
        <div id="renderGrid" className={interpolação}>
                {props.children}
        </div>
    )
}
    `
    const observacoes = `Se for usar uma interpolação de textos em um layout, como o caso,
    necessita que seja criado no arquivo tailwind.config.ts uma lista segura. Essa lista
    tem como objetivo apontar para "compilador" que essas classes do taillwind serão usadas
    indenpendete de estarem no código ou não. Isso porque o tailwind elimina as classes não
    usadas quando da "compilação". ***
    pattern = tipo dos css que estarão na "compilação"
    variantes =  as variantes dele, nesse caso os tamanhos de tela.
    `

    return (
        <Pagina>
            <Grid cols={1} gap={3} md={2} lg={3} xl={4} xl2={5} clasName="bg-black">
                <Caixa>#1</Caixa>
                <Caixa>#2</Caixa>
                <Caixa>#3</Caixa>
                <Caixa>#4</Caixa>
                <Caixa>#5</Caixa>
                <Caixa>#6</Caixa>
                <Caixa>#7</Caixa>
            </Grid>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>
    )
}