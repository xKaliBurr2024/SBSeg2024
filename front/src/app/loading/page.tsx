'use client';
import Image from "next/image";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoadingPage({searchParams}: {searchParams: any}){
    const router = useRouter()
    const [progressValue, setProgressValue] = useState(0)

    const progressArray = ["0%", "20%", "40%", "60%", "80%"]

    function updateProgress(){
        setProgressValue(progressValue < 4 ? progressValue + 1 : progressValue)
        console.log(progressValue)

        if(progressValue == 4){
            router.push("/result" + `?option=${searchParams.option}&search=${searchParams.search}`)
        }
    }

    useEffect(() => {
        setTimeout(updateProgress, 2000)
    })

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
            <p className="mb-3">{searchParams.search}</p>
            <p className="text-9xl mb-10">{progressArray[progressValue]}</p>
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