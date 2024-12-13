import Caixa from "@/components/templates/Caixa";
import Pagina from "@/components/templates/Pagina";

export default function PageFlexBoxInicial (){
    return(
        <Pagina>
            <div className="flex-1 w-full">
                <div className="flex flex-reverse flex-wrap content-center justify-center gap-3 h-full">
                    <Caixa className="w-2/5">#1</Caixa>
                    <Caixa className="w-2/5">#2</Caixa>
                    <Caixa className="w-2/5">#3</Caixa>
                    <Caixa className="w-2/5">#4</Caixa>
                    <Caixa className="w-2/5">#5</Caixa>
                </div>
            </div>
        </Pagina>
    )
}