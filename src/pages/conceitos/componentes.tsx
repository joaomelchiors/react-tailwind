import DemonstracaoCodigo from "@/components/templates/DemonstracaoCodigo";
import Pagina from "@/components/templates/Pagina";

export default function PaginaComponentes() {
    const codigoHTML = `No arquivo globals.css
@layer utilities {
  .flex-center {
    @apply flex justify-center items-center;
  }
}

@layer components{
  .btn {
    @apply 
      px-4 py-2 rounded-md
      text-base;      
  }

  .btn-info {
    @apply btn;
    @apply bg-blue-500  hover:bg-blue-900;
  }
}
  
Na página:
<Pagina>
    <div className="flex gap-5">
        <button className="btn-info">info</button>
        <button className="btn bg-green-400 hover:bg-green-900">Sucesso</button>
        <button className="px-4 py-2 rounded-md bg-red-400 hover:bg-red-900">Erro</button>
    </div>
    <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
</Pagina>`

    const observacoes = `Quando temos muitas classes que se repetem, 
    podemos agrupar em componentes e utiliza-la ao longo da aplicação. ***
    No arquivo globals.css 
    incluimos @layer componentes {} e dentro dele criamos as classes. 
    Para podermos usar o tailwind usamos o @aply. Outro detalhe é que podemos criar estilos espcíficos
    usando o que já temo, como foi feito no caso btn-info. Outro ponto é criar por exemplo uma classe
    utilitaria que incorpore 'flex justify-center items-center`
    
    return(
        <Pagina>
            <div className="flex gap-5">
                <button className="btn-info">info</button>
                <button className="btn bg-green-400 hover:bg-green-900">Sucesso</button>
                <button className="px-4 py-2 rounded-md bg-red-400 hover:bg-red-900">Erro</button>
            </div>
            <DemonstracaoCodigo codigoHTML={codigoHTML} observacoes={observacoes}/>
        </Pagina>
    )
}