import Pagina from "@/components/templates/Pagina";
import { IconBrandTailwind } from "@tabler/icons-react";


export default function Home() {
  return (
    <Pagina >
      <div className="
        flex flex-1 flex-col justify-center items-center
        
        text-4xl font-bold
        ">
          <span>Bem vindo ao Curso de Tailwind</span> 
          <IconBrandTailwind size={72}/>
        </div> 
    </Pagina>
  );
}
