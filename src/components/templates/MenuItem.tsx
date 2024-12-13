import Link from "next/link";
import React from "react";
import { ReactElement, useState } from "react";

interface MenuItemProps {
    iconMenu: ReactElement
    textMenu: string
    href: string
    className?:string
}

export default function MenuItem(props: MenuItemProps){
    const [showTooltip, setShowTooltips] = useState<boolean>(false)

    return(
        <Link id="renderMenuItem" href={props.href} className={`
            grid 
            grid-cols-1 md:grid-cols-[30px_1fr] 
            text-center md:text-left
            transition-fade
            items-center
            gap-2 ml-1
            text-sm text-zinc-600 dark:text-zinc-200 hover:text-blue-900 transition-colors duration-200 ease-out
            ${props.className ?? ''}
            `}
            onMouseEnter={() => setShowTooltips(true)}
            onMouseLeave={() => setShowTooltips(false)}
        >
            <span className="
                flex
                items-center
                justify-center md:justify-start
                
            ">
                {React.cloneElement(props.iconMenu, {stroke:2})}</span>
            {/* Tooltip visível apenas quando com o mouse em cima e em telas menores que md */}
            {showTooltip && (
                <div className="absolute bg-white dark:bg-black text-black dark:text-white text-xs rounded p-1 mt-8 left-[60px]  md:hidden">
                    {props.textMenu}
                </div>
            )}
            <span className="ehidden md:eblock transition-fade font-bold">{props.textMenu}</span>
        </Link>
    )
}
