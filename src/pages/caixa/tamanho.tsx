import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageTamanho() {
    const codigoHTML = `<div className="flex flex-col w-full gap-1">
    <Caixa className="w-16 h-16">#1</Caixa>
    <Caixa className="w4/5">#2</Caixa>
    <Caixa className="w-1/2">#3</Caixa>
    <Caixa className="w-[75%]">#4</Caixa>
    <Caixa className="min-w-[200px]">#5</Caixa>
    <Caixa className="h-full">#6</Caixa>
</div>`

    return (
        <Pagina>
            <div className="flex flex-col w-full gap-1">
                <Caixa className="w-16 h-16">#1</Caixa>
                <Caixa className="w4/5">#2</Caixa>
                <Caixa className="w-1/2">#3</Caixa>
                <Caixa className="w-[75%]">#4</Caixa>
                <Caixa className="min-w-[200px]">#5</Caixa>
                <Caixa className="h-full">#6</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML}/>
        </Pagina>
    )
}