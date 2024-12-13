import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageTextoComGradiente() {
    const codigoHTML = `<span className="
    bg-gradient-to-r from-red-600 to-black
    bg-clip-text
    text-transparent
">
    Texto com Grandiente
</span>`

    const observacoes = `Para fazer um texto com gradiente tem dois macentes.***
    Primeiramente colocaremos um background no texto. Agora os macetes são: ***
    Coloca o texto transparente -> text-transparent e***
    Restringe o background ao texto -> bg-clip-text
    `
    
    return (
        <Pagina>
            <span className="
                text-6xl font-black
                bg-gradient-to-r from-red-600 to-black
                bg-clip-text
                text-transparent
            ">
                Texto com Grandiente
            </span>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes} />
        </Pagina>
    )
}