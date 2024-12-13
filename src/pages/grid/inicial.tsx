import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageGridInicial() {
    const codigoHTML = `<div className="w-full 
grid gap-2.5 
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
2xl:grid-cols-6
">
    ...
    <Caixa className="col-span-2">#5</Caixa>
    ...
</div>
    `
    const observacoes = `col-span-2 = mescla duas celulas ***
    row-span-2 = mescla duas celulas em outra orientação.
    `

    return (
        <Pagina>
            <div className="w-full 
            grid gap-2.5 
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            2xl:grid-cols-6
            ">
                <Caixa>#1</Caixa>
                <Caixa>#2</Caixa>
                <Caixa>#3</Caixa>
                <Caixa>#4</Caixa>
                <Caixa className="col-span-2">#5</Caixa>
                <Caixa>#6</Caixa>
                <Caixa className="row-span-2">#7</Caixa>
                <Caixa>#8</Caixa>
                <Caixa>#9</Caixa>
                <Caixa>#10</Caixa>
                <Caixa>#11</Caixa>
                <Caixa>#12</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>
    )
}