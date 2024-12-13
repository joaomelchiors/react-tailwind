import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PagePaginaModelo() {
    const codigoHTML = `Digitar o código aqui.
    `

    const observacoes = `Colocar observações aqui.
    `
    
    return (
        <Pagina>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes} />
        </Pagina>
    )
}