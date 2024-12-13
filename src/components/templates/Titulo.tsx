interface TituloProps {
    principal: string
    secundario: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="w-full
        flex flex-col
        p-1
        bg-red-500 text-zinc-300">
            <span className="
            md:text-xl md:font-normal
            lg:text-2xl lg:font-semibold
            xl:text-3xl xl:font-bold
            2xl:text-4xl 2xl:font-semibold
            ">{props.principal}</span>
            <span className="font-light">{props.secundario}</span>
        </div>
    )
}