import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo"
import Pagina from "@/components/templates/Pagina"

export default function PageMobile() {
    const codigoHTML = `<div className="
        flex justify-center items-center
        bg-red-500 h-48
        text-3xl md:text-4xl lg:text-6xl
    ">
        <span className="inline sm:hidden">Mobile</span>
        <span className="hidden sm:inline">Não Mobile</span>
    </div>`

    const observacoes = `Tamanhos de dispositivos são: xs sm md lg xl 2xl. ***
    O comando sm:hidden informa que a partir de dispositvos com tamanhos a cima de SM estarão com o elemento escondido. ***
    Esse é o conceito de mobileFrist ou seja a condição é para maiores. ***
    Para visualizar o comportamento do texto, basta aumentar ou diminuir a area da página. ***
    Vários comportamentos podem existir, neste exemplo temos o texto modificado "Mobile" e "Não Mobile" assim como seu tamanho.`

    return (
        <Pagina>
            <div id="AreaDoTexto"className="
                flex justify-center items-center
                bg-red-500 h-48
                text-3xl md:text-4xl lg:text-6xl
            ">
                <span className="inline sm:hidden">Mobile</span>
                <span className="hidden sm:inline">Não Mobile</span>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>    
    )
}