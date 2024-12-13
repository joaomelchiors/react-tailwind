import { IconBrandTailwind } from "@tabler/icons-react";
import Link from "next/link";


export default function Logo(){
    return (
        <Link href="/">
            <div id="Logo" className="
            grid
            grid-cols-1 md:grid-cols-[30px_1fr]
            h-[45px]
            items-center
            gap-4 px-2 py-2
            text-2xl font-black
            ">
                
                <IconBrandTailwind size={30} className="
                    w-full
                    Flex
                    items-center
                    justify-end md:justify-start
                    text-zinc-600 dark:text-zinc-300
                "/>
                <span className="
                    ehidden md:eblock
                    transition-fade
                    bg-gradient-to-r from-blue-500 to-blue-950
                    bg-clip-text text-transparent
                ">Tailwind</span>
            </div>
        </Link>
    )
}

/*
className antiga
flex items-center
gap-4 px-2 py-2
text-2xl font-black 
*/