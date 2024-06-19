import Image from "next/image";

interface ILoadingProps{
    domainName: string
}

export default function Loading({domainName}: ILoadingProps){
    return (
        <>
            <Image
                src="/exekaliburr-icon.svg"
                alt={""}
                width={70}
                height={24}
                priority
            />
            <div className="flex flex-row items-end text-xl mb-3 mt-7">
                <h1>Aguarde, realizando análise</h1>
                <p className="animate-pulse">...</p>
            </div>
            <h2>Endereço da análise:</h2>
            <p className="mb-3">{domainName}</p>
            <Image
                className="motion-safe:animate-spin"
                src="/loading.svg"
                alt={""}
                width={70}
                height={24}
                priority
            />
            <div className="flex flex-row items-end">
                <p className="mt-5">Analisando DNS</p>
                <p className="animate-pulse">...</p>
            </div>
        </>
    );
}
