import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo"
import Pagina from "@/components/templates/Pagina"

export default function PagePeseudo() {
    const codigoHTML = `<button className="
  p-2 rounded-md
  bg-green-500 hover:bg-green-700
  text-black hover:text-white
  shadow-sm shadow-white hover:shadow-none
  ">
    Salvar
</button>
`

    return(
        <Pagina>
                <button className="
                p-2 rounded-md
                bg-green-500 hover:bg-green-700
                text-black hover:text-white
                shadow-sm shadow-white hover:shadow-none
                    ">
                    Salvar
                </button>
                <DemonstracaoCodigo codigoHTML={codigoHTML}/>
        </Pagina>
    )
}