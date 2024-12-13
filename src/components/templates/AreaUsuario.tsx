import { IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";
interface UsuarioInfoProps {
    nome: string;
    email: string;
    imagemURL: string;
}

export default function AreaUsuario(props:UsuarioInfoProps) {
    return(
        <div className="
            bg-white dark:bg-black
            border-t-2 border-zinc-200 dark:border-zinc-900
            grid
            grid-cols-1 md:grid-cols-[45px_1fr_20px]
            items-center
            gap-y-[1px] gap-x-3 px-2 py-3
            sticky
            bottom-0
        ">
            <div className="
                row-start-1 row-end-3 
                h-[45px] w-full
                flex-center
            ">
                <Image src={props.imagemURL} alt="Avatar" width={45} height={45} className="object-cover rounded-full"/>
            </div>
            <div className="
                col-start-2
                text-zinc-800 dark:text-zinc-200
                font-bold
                ehidden md:eblock
                transition-fade
            ">
                {props.nome}
            </div>
            <div className="
                col-start-2
                text-zinc-500 dark:text-zinc-400 text-sm
                font-normal 
                ehidden md:eblock
                transition-fade
            ">
                {props.email}
            </div>
            <IconDotsVertical className="
                col-start-3
                row-start-1 row-end-3
                cursor-pointer
                ehidden md:eblock
                text-zinc-500 dark:text-zinc-400 text-sm
            "/>
        </div>
    )
}