import Caixa from "@/components/templates/Caixa";
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageRedimensionamento (){
    const codigoHTML = `<div className="flex flex-reverse 
items-center first:justify-center gap-3 w-full
">
    <Caixa className="w-14 shrink-0 grow-0">#1</Caixa>
    <Caixa className="w-32 grow-0">#2</Caixa>
    <Caixa className="w-64 shrink-0 grow">#3</Caixa>
    <Caixa className="w-15 flex-none">#2</Caixa>
    <Caixa className="w-10 flex-initial">#2</Caixa>
</div>`

    const observacoes = `flex-nome = shirink-0 e grow-0 ***
    flex-initial = shrink-1 e grow-0 ***
    flex-1 = shrink-1 grow-1
    flex-auto = Crescem e diminuem proporcionalmente ao tamanho inicial`
    return(
        <Pagina>
            <div className="flex flex-reverse items-center first:justify-center gap-3 w-full">
                <Caixa className="w-14 shrink-0 grow-0">#1</Caixa>
                <Caixa className="w-32 grow-0">#2</Caixa>
                <Caixa className="w-52 shrink-0 grow">#3</Caixa>
                <Caixa className="w-20 flex-none">#2</Caixa>
                <Caixa className="w-48 flex-initial">#2</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes} />
        </Pagina>
    )
}