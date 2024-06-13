'use client';
import { IoMdSearch } from "react-icons/io";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";
import Link from 'next/link'

export default function HomePage(){
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [optionSelected, setOptionSelected] = useState("Http")
    const [inputValue, setInputValue] = useState("")

    const options = ["Http", "Https"]

    const optionsStyle = `${isOpen || "invisible"} absolute h-fit w-fit bg-slate-600 border translate-y-7 p-3`

    const listElements = options.map((value) => <li key={value}>
        <button onClick={()=>{
            setOptionSelected(value)
            setIsOpen(false)
        }}>
            {value}
        </button>
    </li>)

    return(
        <main className="flex flex-col min-h-screen bg-slate-800 items-center justify-center relative">
            <Image 
                src="/exekaliburr-logo-full.svg"
                alt={""}
                width={200}
                height={24}
                priority
            />
            <form 
                className="w-1/4 flex flex-col items-center justify-center text-sm pt-10"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div className="flex flex-row border border-white rounded-md bg-slate-600 p-3 w-full">
                    <div className="pr-5 border-r-2 flex flex-row text-blue-500 relative">
                        <p>{optionSelected}</p>
                        <button type='button' className="ml-2" onClick={() => setIsOpen(!isOpen)}>
			                {isOpen ? <MdArrowDropUp size={23}/> : <MdArrowDropDown size={23}/>}
		                </button>
                        <ul className={optionsStyle}>{listElements}</ul>
                    </div>
                    <IoMdSearch className="text-blue-500 ml-3" size={25}/>
                    <div className="ml-3 w-full">
                        <input 
                            className="text-gray-400 bg-slate-600 w-full"
                            placeholder="Insira a URL que você deseja escanear"
                            value={inputValue}
                            onChange={(e) => { setInputValue(e.target.value) }}
                        >
                        </input>
                    </div>
                </div>
                <Link href={{
                    pathname:'/loading',
                    query: {
                        option: optionSelected,
                        search: inputValue,
                    }
                }}>
                    {<button 
                        className="text-white bg-gradient-to-r from-cyan-500 to-purple-700 w-fit mt-10 p-3 rounded-md"
                        onClick={() => {/*DO NOTHING*/}}
                    >
                        REALIZAR ANÁLISE
                    </button>}
                </Link>
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