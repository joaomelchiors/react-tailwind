import { IconArrowAutofitContent, IconArrowForwardUp, IconAspectRatio, IconBackground, IconBoxMargin, IconBoxModel2, IconBoxPadding, IconClick, IconComponents, IconContainer, IconDeviceMobile, IconDimensions, IconGridDots, IconHtml, IconLayoutDashboard, IconLayoutGrid, IconResize, IconTextPlus, IconTexture, IconTypography } from "@tabler/icons-react";
import MenuGrupo from "./MenuGrupo";
import MenuItem from "./MenuItem";

export default function Menu(){
    return(
        <div className="
            flex flex-col 
            p-2            
        ">
                <MenuItem iconMenu={<IconHtml />} textMenu="Pagina Modelo" href="/paginaModelo" className="text-zinc-500 justify-center text-xs"/>
            <MenuGrupo textMenuGrupo="Conceitos">
                <MenuItem iconMenu={<IconTextPlus />} textMenu="Tudo é Classe" href="/conceitos/classes"/>
                <MenuItem iconMenu={<IconDeviceMobile />} textMenu="Mobile Frist" href="/conceitos/mobile"/>
                <MenuItem iconMenu={<IconClick />} textMenu="Pseudo Elemento :hover" href="/conceitos/pseudo"/>
                <MenuItem iconMenu={<IconComponents />} textMenu="Componentes" href="/conceitos/componentes"/>
            </MenuGrupo>
            <MenuGrupo textMenuGrupo="Caixa">
                <MenuItem iconMenu={<IconBoxPadding />} textMenu="Padding" href="/caixa/padding"/>
                <MenuItem iconMenu={<IconBoxMargin />} textMenu="Margem" href="/caixa/margem"/>
                <MenuItem iconMenu={<IconArrowAutofitContent />} textMenu="Espaços" href="/caixa/espacos"/>
                <MenuItem iconMenu={<IconResize />} textMenu="Tamanhos" href="/caixa/tamanho"/>
                <MenuItem iconMenu={<IconBoxModel2 />} textMenu="Box Sizing" href="/caixa/boxSizing"/>
            </MenuGrupo>
            <MenuGrupo textMenuGrupo="FlexBox">
                <MenuItem iconMenu={<IconAspectRatio />} textMenu="FlexBox Resumao" href="/flexBox/inicial"/>
                <MenuItem iconMenu={<IconDimensions />} textMenu="Redmimensionamento" href="/flexBox/redimensionamento"/>
            </MenuGrupo>
            <MenuGrupo textMenuGrupo="Grid">
                <MenuItem iconMenu={<IconGridDots />} textMenu="Grid" href="/grid/inicial"/>
                <MenuItem iconMenu={<IconLayoutDashboard />} textMenu="Posicionamento" href="/grid/posicionamento"/>
                <MenuItem iconMenu={<IconLayoutGrid />} textMenu="Usando Layout" href="/grid/layout"/>
            </MenuGrupo>
            <MenuGrupo textMenuGrupo="Extras">
                <MenuItem iconMenu={<IconTypography />} textMenu="Tipografia" href="/extras/tipografia"/> 
                <MenuItem iconMenu={<IconContainer />} textMenu="Container" href="/extras/container"/>
                <MenuItem iconMenu={<IconBackground />} textMenu="Background" href="/extras/background"/>     
                <MenuItem iconMenu={<IconTexture />} textMenu="Texto com gradiente" href="/extras/textoComGradiente"/>                
            </MenuGrupo>
            <MenuGrupo textMenuGrupo="Avançado">
                <MenuItem iconMenu={<IconArrowForwardUp />} textMenu="Go up" href="@/pages/conceitos/pseudo" />
            </MenuGrupo>
        </div>   
    )
}