import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageContainer() {
    const codigoHTML = `<div className="container bg-red-500">
    Container
</div>`

    const observacoes = `Existe uma classe chamada container. ***
    Ele usa um controle de tamanho de largura baseado notamanho disponível se adequando
    a medida que esse tamanho sofre influencia da viewport.

    `
    return (
        <Pagina>
            <div className="container bg-red-500">
                Container
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes} />
        </Pagina>
    )
}