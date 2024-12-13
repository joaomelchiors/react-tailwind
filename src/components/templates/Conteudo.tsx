import { ReactNode } from "react"

interface ConteudoProps {
    children: NonNullable<ReactNode>
}

export default function Conteudo(props: ConteudoProps) {
    /*
        Diferença no h-full e nim-h-full
        h-full expande o container até a altura do elemento pai, porém caso o container ocupe mais que o elemento pai não haverá renderização.
        min-h-full é o mesmo que o h-full porém agora caso o conteúdo precise expandir além do pai ele irá expandir.
        overflow-y-auto, faz barra de rolagem aparecer quando estivermos com conteúdo além das dimensões.
        
        Porque, quando não tinha o elemento filho, o jsutify-center empurrava os elementos em containers maior que a tela para cima?
        Por que quando usamos no pai o tamanho da tela area é definida pelo avô (devido ao full no filho) que nesse caso é h-screen aliado ao fato que a orientação do 
        pai para os filhos são de coluna (flex-col) o justify-center ao tentar alinhar no eixo x irá empurar o conteúdo para cima.
        Solução 1 = Remover o jsutify-center
        Isso eliminara o problema, mas agora todos os conteúdos serão renderizados no topo e não queremos isso.
        Solução 2 = Cria um filho com o justify-center
        OK funcionou!!!!
        MASSS, então, se o problema é a tela no avô que tal mudarmos ela de h-screen, para min-h-screen?
        Acontece que se fizer isso caso o outro componente filho que (barra lateral) estiver com o h-full a área diminuirá. 
        Beleza então, eu só coloco min-h-full na barra lateral e pronto agora teremos a página correta e o elemento filho de conteudo posicionado
        certo a barra lateral expandida correta. TUDO CERTO, masssss se o elemento filho de conteúdo expandir e tivermos que efetuar a rolagem 
        a barra lateral descerá junto, dexiando de ficar fixa.
        Por tanto, a aplicação página tem que ser h-screen e f-screen, seus componentes que tem que adequar, como é o conteúdo que tem que expandir ele
        ganha o min-h-full e a remoção do justify-center, para centralizar objetos que estão dentro do min criamos um filho com o justify-center, pois agora 
        a area é a do pai pois usamos o flex-1 para espelhar, pois a orientação do pai é col que equivale a h

        <div className="flex flex-col flex-1 justify-center items-center">{props.children}</div>
    */

    return (
        <div id="RenderConteudo" className="flex flex-col flex-1 min-h-screen overflow-y-auto bg-zinc-200 dark:bg-zinc-800">
            <div className="flex-center flex-col flex-1 p-7">{props.children}</div>
        </div>

    )
}