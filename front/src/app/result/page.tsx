'use client';
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Loading from "../components/loading";
import CustonFooter from "../components/custonFooter";
import CustonButton from "../components/custonButton";
import SectionButton from "../components/sectionButton";

//Remover depois
const auxText = `Lorem ipsum dolor sit amet. Est delectus quisquam 33 consequatur voluptas aut itaque animi rem aliquam reprehenderit 33 ullam necessitatibus sed neque repudiandae. Vel quia ducimus et rerum comodi qui nostrum fuga aut nemo praesentium qui inventore ducimus. Aut sint quia qui magnam impedit est accusamus libero sed officiis doloribus hic odio dolorum sed repellat molestiae qui impedit pariatur. Est totam nulla eos voluptatem culpa aut necessitatibus praesentium id temporibus iusto. Ex nemo aperiam qui reprehenderit facilis non doloribus voluptatem aut fugiat sint quo nobis illum. Sit unde ipsa sit dolorem aliquam non similique quae non dignissimos consequatur nam similique assumptionnda est perferendis cumque? Non sapiente sequi ut explicabo repellendus et sint labore.`

export default function ResultPage(){
    const searchParams = useSearchParams()
    const [btn1, setBtn1] = useState(true);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [title1, setTitle1] = useState("Identificação de Endereço IP");
    const [title2, setTitle2] = useState("Informações Gerais do Domínio");
    const [text1, setText1] = useState("1 " + auxText);
    const [text2, setText2] = useState("1 " + auxText);

    const [searchValue, setSearchValue] = useState("")
    const optionSelected = searchParams.get('option') 
    const oldSearch = searchParams.get('search')

    function buttonSwitch(value: number){
        value == 1 ? setBtn1(true) : setBtn1(false)
        value == 2 ? setBtn2(true) : setBtn2(false)
        value == 3 ? setBtn3(true) : setBtn3(false)
    }

    function changeTitle(value: number){
        if(value == 1){
            setTitle1("Identificação de Endereço IP")
            setTitle2("Informações Gerais do Domínio")
            setText1("1 " + auxText)
            setText2("1 " + auxText)
        }else if(value == 2){
            setTitle1("Scanner de Portas de Redes")
            setTitle2("Varredura de Diretórios")
            setText1("2 " + auxText)
            setText2("2 " + auxText)
        }else if(value == 3){
            setTitle1("DNS Reverso do Domínio")
            setTitle2("Sub-DNS & Sistemas Integrados")
            setText1("3 " + auxText)
            setText2("3 " + auxText)
        }
    }

    function btnClick(value: number){
        buttonSwitch(value)
        changeTitle(value)
    }

    return(
        <main className="min-h-screen bg-slate-800 relative">
            <header className="flex flex-row justify-around text-sm pt-10">
                <Link href={{pathname: "/"}}>
                    <Image 
                        src="/exekaliburr-icon.svg"
                        alt={""}
                        width={50}
                        height={24}
                        priority
                    />
                </Link>
                <div className="flex flex-row border border-white items-center rounded-md bg-slate-700 p-3 w-3/4">
                    <div className="pr-5 border-r-2">
                        <p className="text-blue-500">{optionSelected}</p>
                    </div>
                    <IoInformationCircleOutline className="text-blue-500 ml-3" size={25}/>
                    <div className="ml-3 w-full">
                        <div 
                            className="text-gray-400 bg-slate-700 w-full"
                        >{oldSearch}
                        </div>
                    </div>
                </div>
                <CustonButton onClick={() => {/*DO NOTHING*/}}>
                    <p>DOWNLOAD DA ANÁLISE</p>
                    <MdOutlineFileDownload className="ml-3" size={25}/>
                </CustonButton>
            </header>
            <div className="w-full h-full pl-10 pr-10">
                <div className="flex flex-row mt-7">
                    <SectionButton flag={btn1} onClick={() => btnClick(1)}>
                        <p>IFORMAÇÕES DO ID E IP</p>
                    </SectionButton>
                    <SectionButton flag={btn2} onClick={() => btnClick(2)}>
                        <p>PORTAS E DOMINIOS ESCANEADOS</p>
                    </SectionButton>
                    <SectionButton flag={btn3} onClick={() => btnClick(3)}>
                        <p>DNS REVERSO E SUB DNS</p>
                    </SectionButton>
                </div>
                <div className="bg-slate-900 mt-10 divide-y divide-blue-500 p-10">
                    <section className="mb-7">
                        <h1 className="text-blue-500 text-2xl font-bold mb-5">{title1}</h1>
                        <p className="text-white">{text1}</p>
                    </section>
                    <section className="pt-7">
                        <h1 className="text-blue-500 text-2xl font-bold mb-5">{title2}</h1>
                        <p className="text-white">{text2}</p>
                    </section>
                </div>
            </div>
            <CustonFooter/>
        </main>
    );
}
