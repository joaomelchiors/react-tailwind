interface DemonstracaoCodigoProps {
    codigoHTML: string
    observacoes?: string
}

export default function DemonstracaoCodigo(props: DemonstracaoCodigoProps) {
    const paragrafos: string[] = props.observacoes ? props.observacoes.split('***') : []
    console.log(paragrafos)

    return(
        <div className="flex flex-col items-center">
            <h2 className='mt-6 text-zinc-600 dark:text-zinc-400 font-semibold text-wrap'>Codigo:</h2>
            <pre className="bg-black p-6 text-white rounded-lg overflow-auto">
                <code>{props.codigoHTML}</code>
            </pre>
            <div className="max-w-[600px] text-zinc-800 dark:text-zinc-200 text-wrap">
                {paragrafos.length > 0 ? (
                    <p className="
                        m-2 font-semibold 
                        text-zinc-600 
                        dark:text-zinc-400 text-lg
                    ">
                        Obeservações:
                    </p>) : <div></div>}
                {paragrafos.map((e, index)=> <p className="text-indent text-pretty" key={index} >{e}</p>)}
            </div>    
        </div>
    )
}