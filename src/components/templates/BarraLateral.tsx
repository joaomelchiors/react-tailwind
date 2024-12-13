import AreaUsuario from "./AreaUsuario";
import Logo from "./Logo";
import Menu from "./Menu";


export default function BarraLateral() {
    
    return (
        <aside id="BarraLateral" 
        className="dark:bg-black 
            w-[95px] md:w-1/4 
            h-full
            px-2 py-2
            text-zinc-200
            transition-width duration-1000
            relative
            flex flex-col
        ">   
            <div id="areaRolavel"
                className="
                flex-1
                overflow-y-auto
                scrollbar-hidden    
            ">
                <Logo />
                <Menu />
            </div> 
            
            <div id="areaNaoRolavel">
                <AreaUsuario nome="João Marcos Melchiors" email="joao@zmail.com" imagemURL="/image/avatarDev.webp"/>
            </div>
    
        </aside>
    )
}

/*
bg-black w-1/4 h-full
            px-2 py-2
            text-zinc-200
            overflow-y-auto
*/        