import { IconMoon, IconSun } from "@tabler/icons-react";

interface SwitchDarkMode {
    funcaoAlterarModoDark: () => void
    isDark: boolean
}

export default function SwitchTemaDark(props:SwitchDarkMode) {

    return (
    <div
      className="
        absolute top-4 right-6 
        cursor-pointer 
        text-zinc-600 dark:text-zinc-300
        "
        onClick={props.funcaoAlterarModoDark}
    >
        {props.isDark ? <IconMoon /> : <IconSun />}
    </div>  
    )
}


