import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PageBackgroung() {
    const codigoHTML = `<div className=" w-full text-zinc-200
    flex-center 
    bg-gradient-to-r from-purple-800 to-black
">
    BackGround
</div>`

    const observacoes = `Para colocar um background color basta "bg-Cor-Intensidade_Cor". ***
    Já para fazer um gradiente temos a seguinte estrutura.***
    (sem cor intermediária) O tipo de gradiente => from-bg-Inicial => from-bg-final.***
    (cem cor intermediária) O tipo de gradiente => from-bg-Inicial => via-bg-corintermadiaria => from-bg-final.***
    O tipo pode ser: (para esquerda, de cima para esquerda, "suas variações" e radial ou cônico). ***
    "A diferença entre o primeiro gradiente e o segundo é que o segundo usou-se a via para chegar no black mais cedo.
    `
    
    return (
        <Pagina>
            <div className=" w-full text-zinc-200
                flex-center 
                bg-gradient-to-r from-purple-800 to-black
            ">
                BackGround
            </div>
            <div className=" w-full text-zinc-200
                flex-center 
                bg-gradient-to-r from-purple-800 via-black to-black
            ">
                BackGround
            </div>
            <div className=" w-full text-zinc-200
                flex-center 
                bg-gradient-to-r from-purple-800 via-yellow-500 to-black
            ">
                BackGround
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes} />
        </Pagina>
    )
}