import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageGridInicial() {
    const codigoHTML = `<div className="w-full 
grid gap-2.5 
grid-cols-3
">
<Caixa className="row-start-2 row-end-4">#1</Caixa>
<Caixa className="row-start-1 row-end-3
col-start-2 col-end-4
">#2</Caixa>
    ...
</div>
    `
    const observacoes = `Dentro do CSS Grid temos linhas no eixo x e linhas no eixo y que separam as colunas e linhas.
    Sendo a primeira linha no eixo x a linha 1 que seria a "margem superior" do grid. Ou seja num grid 3x3 temos 4 linhas,
    tanto para o eixo x como para o y.
    `

    return (
        <Pagina>
            <div className="w-full 
            h-36
            grid gap-2.5 
            grid-cols-3
            ">
                <Caixa className="row-start-2 row-end-4">#1</Caixa>
                <Caixa className="row-start-1 row-end-3
                col-start-2 col-end-4
                ">#2</Caixa>
                <Caixa>#3</Caixa>
                <Caixa>#4</Caixa>
                <Caixa>#5</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>
    )
}