import { ReactNode } from "react";

interface MenuGrupoProps {
    textMenuGrupo: string;
    children: NonNullable<ReactNode>
}

export default function MenuGrupo(props: MenuGrupoProps){
    return(
        <div className="mt-4 gap-4 text-zinc-400 dark:text-zinc-600 text-xs
        text-center md:text-left
        ">
            <span className="uppercase">{props.textMenuGrupo}</span>
            <div id='listItems' className="flex flex-col mt-2 gap-2 
                text-center md:text-left
            ">
                {props.children}
            </div>
        </div>
    )
}