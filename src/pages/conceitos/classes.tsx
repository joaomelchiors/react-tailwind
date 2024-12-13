import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo"
import Pagina from "@/components/templates/Pagina"


export default function PaginaClasses() {
    const codigoHTML = `<div className="
    flex justify-center items-center
    bg-sky-500 text-amber-300
    text-6xl h-48
">Texto</div>`
    
    
    return (
        <Pagina>
            <div className="
                flex justify-center items-center
                bg-sky-500 text-amber-300
                text-6xl h-48
            ">Texto</div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} />
        </Pagina>
    )
}




