'use client';
import { IoMdSearch } from "react-icons/io";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";
import Link from 'next/link'
import CustonFooter from "./components/custonFooter";
import CustonButton from "./components/custonButton";

export default function HomePage(){
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [optionSelected, setOptionSelected] = useState("https")
    const [inputValue, setInputValue] = useState("")

    const options = ["https", "http"]

    const optionsStyle = `${isOpen || "invisible"} absolute h-fit w-fit bg-white border rounded-md translate-y-11 -translate-x-6 p-3`
    
    const listElements = options.map((value) => <li key={value}>
        <button 
            onClick={()=>{
                setOptionSelected(value)
                setIsOpen(false)
            }}
            className={`pl-5 pr-5 pb-2 pt-2 ${value == 'https' ? 'border-b-2 border-black': ''} ${value == optionSelected ? 'text-blue-500' : 'text-black'}`}
        >
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
                className="w-1/3 flex flex-col items-center justify-center text-sm pt-10"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div className="flex flex-row border border-white rounded-md bg-slate-600 p-3 w-full">
                    <div className="pr-5 pl-3 border-r-2 flex flex-row text-blue-500 relative">
                        <p>{optionSelected}</p>
                        <button type='button' className="ml-2" onClick={() => setIsOpen(!isOpen)}>
			                {isOpen ? <MdArrowDropUp size={23}/> : <MdArrowDropDown size={23}/>}
		                </button>
                        <ul className={optionsStyle}>{listElements}</ul>
                    </div>
                    <IoMdSearch className="text-blue-500 ml-3" size={25}/>
                    <input 
                        className="text-gray-400 bg-slate-600 w-full ml-3"
                        placeholder="Insira a URL que você deseja escanear"
                        value={inputValue}
                         onChange={(e) => { setInputValue(e.target.value) }}
                    >
                    </input>
                </div>
                <Link 
                    href={{
                        pathname:'/result',
                        query: {
                            option: optionSelected,
                            search: inputValue,
                        }
                    }}
                    className="mt-10"
                >
                    <CustonButton onClick={() => {/*DO NOTHING*/}}>
                        REALIZAR ANÁLISE
                    </CustonButton>
                </Link>
            </form>
            <CustonFooter/>
        </main>
    );
}

// {<button 
//     className="text-white bg-gradient-to-r from-cyan-500 to-purple-700 w-fit mt-10 p-3 rounded-md"
//     onClick={() => {/*DO NOTHING*/}}
// >
//     REALIZAR ANÁLISE
// </button>}