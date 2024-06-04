'use client';
import { IoMdSearch } from "react-icons/io";
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function HomePage(){
    const router = useRouter()

    function handleSearch(){
        router.push('/result')
    }

    return(
        <main className="flex flex-col min-h-screen bg-slate-800 items-center justify-center relative">
            <Image 
                src="/exekaliburr-logo-full.svg"
                alt={""}
                width={200}
                height={24}
                priority
            />
            <form className="w-1/4 flex flex-col items-center justify-center text-sm pt-10">
                <div className="flex flex-row border border-white rounded-md bg-slate-600 p-3 w-full">
                    <div className="pr-5 border-r-2">
                        <p className="text-blue-500">Http</p>
                    </div>
                    <IoMdSearch className="text-blue-500 ml-3" size={25}/>
                    <div className="ml-3 w-full">
                        <input className="text-gray-400 bg-slate-600 w-full"
                            placeholder="Insira a URL que você deseja escanear"
                        >
                        </input>
                    </div>
                </div>
                <button 
                    className="text-white bg-gradient-to-r from-cyan-500 to-purple-700 w-fit mt-10 p-3 rounded-md"
                    onClick={() => handleSearch()}
                >
                    REALIZAR ANÁLISE
                </button>
            </form>
            <footer className="absolute bottom-0 bg-slate-900 text-white w-full h-14 flex flex-row items-center justify-between text-sm">
                <div></div>
                <div>
                    <p>ExeKaliburr 2024 - All rights reserved</p>
                </div>
                <div className="flex flex-col mr-3 pb-2">
                    <p>versão 1.0</p>
                    <p>by drezens</p>
                </div>
            </footer>
        </main>
    );
}