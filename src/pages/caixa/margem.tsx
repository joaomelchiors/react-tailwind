import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageMargem() {
const codigoHTML = `<div className="flex-center">
    <Caixa className="mx-3">#1</Caixa>
    <Caixa className="my-3">#2</Caixa>
    <Caixa className="mb-16 mr-6">#3</Caixa>
    <Caixa className="m-7">#4</Caixa>
    <Caixa className="mt-[11px]">#5</Caixa>
</div>`

const observacoes = `
    mx = Margem no eixo da horizontal ***
    my = Margem no eixo da vertical ***
    mb = MargemgBotton - Margem embaixo ***
    ml = MargemLeft - Margem na esquerda ***
    m = Margem em todos as direçãoes ***
    mt = MargemTop - Margem em cima.

`
    return (
        <Pagina >
            <div className="flex-center">
                <Caixa className="mx-3">#1</Caixa>
                <Caixa className="my-3">#2</Caixa>
                <Caixa className="mb-16 mr-6">#3</Caixa>
                <Caixa className="m-7">#4</Caixa>
                <Caixa className="mt-[11px]">#5</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>

    )
}