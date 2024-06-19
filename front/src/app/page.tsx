'use client'
import Image from "next/image"
import { IoMdSearch } from "react-icons/io"
import { useRouter } from 'next/navigation'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { useState } from "react"
import CustomFooter from "@/app/components/customFooter"
import CustomButton from "@/app/components/customButton"

export default function HomePage(){
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [optionSelected, setOptionSelected] = useState("https")
    const [inputValue, setInputValue] = useState("")

    const options = ["https", "http"]
    const optionsStyle = `${isOpen || "hidden"} absolute h-fit w-fit bg-white border rounded-md translate-y-20 -translate-x-6 p-3`

    const listElements = options.map((value) => <li key={value}>
        <button
            onClick={() => {
                setOptionSelected(value)
                setIsOpen(false)
            }}
            className={`pl-5 pr-5 pb-2 pt-2 flex items-center ${value == optionSelected ? 'text-blue-500' : 'text-black'}`}
        >
            {value}
        </button>
    </li>)

    return(
        <main className="flex flex-col min-h-screen bg-slate-800 items-center justify-center relative">
            <Image 
                src="/xkaliburr_logo.svg"
                alt={""}
                width={250}
                height={24}
                priority
            />
            <form
                className="flex flex-col items-center justify-center text-sm pt-10 gap-2"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div className="flex flex-row border border-white rounded-md bg-slate-600 p-3 mb-5 w-full">
                    <div className="pr-5 pl-3 border-r-2 flex flex-row text-blue-500 w-[100px] relative">
                        <p>{optionSelected}</p>
                        <button type='button' className="ml-2" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <MdArrowDropUp size={23}/> : <MdArrowDropDown size={23}/>}
                        </button>
                        <ul className={optionsStyle}>{listElements}</ul>
                    </div>
                    <IoMdSearch className="text-blue-500 ml-3 min-w-[25px]" size={25} />
                    <input
                        className="text-gray-400 bg-slate-600 ml-3 w-[300px]"
                        placeholder="Insira a URL que você deseja escanear"
                        value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value) }}
                    >
                    </input>
                </div>
                <CustomButton onClick={() => router.push(`/result?option=${optionSelected}&search=${inputValue}`)}>
                    REALIZAR ANÁLISE
                </CustomButton>
            </form>
            <CustomFooter/>
        </main>
    )
}
