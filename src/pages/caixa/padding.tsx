import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PagePadding() {
const codigoHTML = `<div className="flex-center>
    <Caixa className="px-3">#1</Caixa>
    <Caixa className="py-3">#2</Caixa>
    <Caixa className="pb-4 pl=6">#3</Caixa>
    <Caixa className="p-7">#3</Caixa>
    <Caixa className="pt-[11px]">#5</Caixa>
</div>`

const observacoes = `
    px = padding no eixo da horizontal ***
    py = padding no eixo da vertical ***
    pb = paddingBotton - padding embaixo ***
    pl = paddingLeft - padding na esquerda ***
    p = padding em todos as direçãoes ***
    pt = paddingTop - padding em cima.

`
    return (
        <Pagina >
            <div className="flex-center">
                <Caixa className="px-3">#1</Caixa>
                <Caixa className="py-3">#2</Caixa>
                <Caixa className="pb-4 pl-6">#3</Caixa>
                <Caixa className="p-7">#4</Caixa>
                <Caixa className="pt-[11px]">#5</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>

    )
}