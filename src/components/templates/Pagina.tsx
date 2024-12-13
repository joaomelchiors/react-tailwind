import { ReactNode, useState } from 'react'
import BarraLateral from "./BarraLateral";
import Conteudo from "./Conteudo";
import SwitchTemaDark from './SwitchTemaDark';


interface PaginaProps {
    children: NonNullable<ReactNode>
}

export default function Pagina(props: PaginaProps) {
    const [darkEnable, setIsDark] = useState<boolean>(false)

    return(
        <div id="RenderPagina" className={`flex w-screen h-screen relative
            ${darkEnable? 'dark' : ''}
        `}>
            <BarraLateral />
            <Conteudo>{props.children}</Conteudo>
            <SwitchTemaDark 
                funcaoAlterarModoDark={() => darkEnable? setIsDark(false) : setIsDark(true)}
                isDark={darkEnable ? true : false}
            />
        </div>
    )
}



