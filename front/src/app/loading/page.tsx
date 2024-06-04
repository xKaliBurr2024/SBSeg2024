import Image from "next/image";

export default function LoadingPage(){
    return(
        <main className="min-h-screen bg-slate-800 flex flex-col items-center justify-center text-white">
            <Image 
                src="/exekaliburr-icon.svg"
                alt={""}
                width={70}
                height={24}
                priority
            />
            <h1 className="text-xl mb-3 mt-7">Aguarde, realizando análise...</h1>
            <h2>Endereço da análise:</h2>
            <p className="mb-3">endereço</p>
            <p className="text-9xl mb-10">70%</p>
            <Image 
                src="/loading.svg"
                alt={""}
                width={70}
                height={24}
                priority
            />
            <p className="mt-5">Analisando DNS</p>
        </main>
    );
}