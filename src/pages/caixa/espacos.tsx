import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PaginaEspacos() {
    const codigoHTML = `<div className="space-y-5">
    <Caixa>#1</Caixa>
    <Caixa>#2</Caixa>
    <Caixa>#3</Caixa>
    <Caixa>#4</Caixa>
    <Caixa>#5</Caixa>
</div>`

const observacoes = `Os espações só servem quando os elementos não estão em um flexbox ou grid
`
    return (
        <Pagina>
            <div className="space-y-5">
                <Caixa>#1</Caixa>
                <Caixa>#2</Caixa>
                <Caixa>#3</Caixa>
                <Caixa>#4</Caixa>
                <Caixa>#5</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>
    )
}