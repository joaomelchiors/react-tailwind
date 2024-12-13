import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo"
import Pagina from "@/components/templates/Pagina"
import Titulo from "@/components/templates/Titulo"

export default function PageTipografia() {
    const codigoHTML = `Exemplo do Template Titulo
interface TituloProps {
principal: string
secundario: string
}

export default function Titulo(props: TituloProps) {
return (
    <div className="w-full
    flex flex-col
    p-1
    bg-red-500 text-zinc-300">
        <span className="
        md:(text-xl font-normal) 
        lg:(text-2xl font-semibold)
        xl:(text-3xl font-bold)
        2xl:(text-4xl font-semibold)
        ">{props.principal}</span>
        <span className="font-light">{props.secundario}</span>
    </div>
)
}`
    
    const observacoes = `Ao trabalhar com tipografia devemos ter uma pasta Templates com nossos
    tipos de textos. ***
    Peso da font (Black "900", extraBold "800", bold "700", semibold "600", basic "500", light "400", extralight "200", thin "100" ). ***
    Tipo de font (Mono - Monoespaçada, serif - Tem as serifas, sans-serif (padrão) - sem serifas). ***
    Cores (text-red-500).`

    return (
        <Pagina>
            <Titulo principal="Tipografias" secundario="Uso de templates" />
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes} />
        </Pagina>
    )
}