import Caixa from "@/components/templates/Caixa"
import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo"
import Pagina from "@/components/templates/Pagina"

export default function PageBoxSizing() {
    const codigoHTML=`<div className="flex flex-col gap-2">
    <Caixa className="w-36">#1</Caixa>
    <Caixa className="w-36 h-36 border-8 border-white">#2</Caixa>
    <Caixa className="w-36 h-36 border-8 border-white box-content">#3</Caixa>
</div>`

    const observacoes=`Por padrão a caixa que agrupa o elemento é box-border, ou seja
    os elementos da caixa estrão todos dentro do tamanho da box. Isso é possível ver 
    comparando a caixa 1 e a caixa 2, pois o conteúdo ficou menor por comportar a margem
    junto. Porém ao modificar para box-content a caixa agora se limita a manter o tamanho
    do conteúdo deixando assim a parte da margem fora, com isso a caixa 3 ficou maior que
    as outras.
    `
    return (
        <Pagina>
            <div className="flex flex-col gap-2">
                <Caixa className="w-36">#1</Caixa>
                <Caixa className="w-36 h-36 border-8 border-white">#2</Caixa>
                <Caixa className="w-36 h-36 border-8 border-white box-content">#3</Caixa>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>
    )
}