'use client';
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";

export default function ResultPage(){
    const [btn1, setBtn1] = useState(true);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [title1, setTitle1] = useState("Identificação de Endereço IP");
    const [title2, setTitle2] = useState("Informações Gerais do Domínio");

    function buttonSwitch(value: number){
        value == 1 ? setBtn1(true) : setBtn1(false)
        value == 2 ? setBtn2(true) : setBtn2(false)
        value == 3 ? setBtn3(true) : setBtn3(false)
    }

    function changeTitle(value: number){
        if(value == 1){
            setTitle1("Identificação de Endereço IP")
            setTitle2("Informações Gerais do Domínio")
        }else if(value == 2){
            setTitle1("Scanner de Portas de Redes")
            setTitle2("Varredura de Diretórios")
        }else if(value == 3){
            setTitle1("DNS Reverso do Domínio")
            setTitle2("Sub-DNS & Sistemas Integrados")
        }
    }

    return(
        <main className="min-h-screen bg-slate-800 relative">
            <header className="flex flex-row justify-around text-sm pt-10">
                <Image 
                    src="/exekaliburr-icon.svg"
                    alt={""}
                    width={50}
                    height={24}
                    priority
                />
                <div className="flex flex-row border border-white items-center rounded-md bg-slate-700 p-3 w-3/4">
                    <div className="pr-5 border-r-2">
                        <p className="text-blue-500">Http</p>
                    </div>
                    <IoInformationCircleOutline className="text-blue-500 ml-3" size={25}/>
                    <div className="ml-3 w-full">
                        <input className="text-gray-400 bg-slate-700 w-full"
                            placeholder="Insira a URL que você deseja escanear"
                        >
                        </input>
                    </div>
                </div>
                <button className="text-white bg-gradient-to-r from-cyan-500 to-purple-700 items-center w-fit p-3 rounded-md flex flex-row">
                    <p>DOWNLOAD DA ANÁLISE</p>
                    <MdOutlineFileDownload className="ml-3" size={25}/>
                </button>
            </header>
            <div className="w-full h-full pl-10 pr-10">
                <div className="flex flex-row text-white mt-7">
                    <button 
                        className={`p-5 rounded-md border border-blue-500 ${btn1? "bg-blue-500" :"bg-slate-700"} mr-10`}
                        onClick={() => {
                            buttonSwitch(1)
                            changeTitle(1)
                        }}
                    >
                        IFORMAÇÕES DO ID E IP
                    </button>
                    <button 
                        className={`p-5 rounded-md border border-blue-500 ${btn2? "bg-blue-500" :"bg-slate-700"} mr-10`}
                        onClick={() => {
                            buttonSwitch(2)
                            changeTitle(2)
                        }}
                    >
                        PORTAS E DOMINIOS ESCANEADOS
                    </button>
                    <button 
                        className={`p-5 rounded-md border border-blue-500 ${btn3? "bg-blue-500" :"bg-slate-700"} mr-10`}
                        onClick={() => {
                            buttonSwitch(3)
                            changeTitle(3)
                        }}
                    >
                        DNS REVERSO E SUB DNS
                    </button>
                </div>
                <div className="bg-slate-900 mt-10 divide-y divide-blue-500 p-10">
                    <section className="mb-7">
                        <h1 className="text-blue-500 text-2xl font-bold mb-5">{title1}</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet. Est delectus quisquam 33 consequatur voluptas aut itaque animi rem aliquam reprehenderit 33 ullam necessitatibus sed neque repudiandae. Vel quia ducimus et rerum comodi qui nostrum fuga aut nemo praesentium qui inventore ducimus. Aut sint quia qui magnam impedit est accusamus libero sed officiis doloribus hic odio dolorum sed repellat molestiae qui impedit pariatur. Est totam nulla eos voluptatem culpa aut necessitatibus praesentium id temporibus iusto. Ex nemo aperiam qui reprehenderit facilis non doloribus voluptatem aut fugiat sint quo nobis illum. Sit unde ipsa sit dolorem aliquam non similique quae non dignissimos consequatur nam similique assumptionnda est perferendis cumque? Non sapiente sequi ut explicabo repellendus et sint labore.</p>
                    </section>
                    <section className="pt-7">
                        <h1 className="text-blue-500 text-2xl font-bold mb-5">{title2}</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet. Est delectus quisquam 33 consequatur voluptas aut itaque animi rem aliquam reprehenderit 33 ullam necessitatibus sed neque repudiandae. Vel quia ducimus et rerum comodi qui nostrum fuga aut nemo praesentium qui inventore ducimus. Aut sint quia qui magnam impedit est accusamus libero sed officiis doloribus hic odio dolorum sed repellat molestiae qui impedit pariatur. Est totam nulla eos voluptatem culpa aut necessitatibus praesentium id temporibus iusto. Ex nemo aperiam qui reprehenderit facilis non doloribus voluptatem aut fugiat sint quo nobis illum. Sit unde ipsa sit dolorem aliquam non similique quae non dignissimos consequatur nam similique assumptionnda est perferendis cumque? Non sapiente sequi ut explicabo repellendus et sint labore.</p>
                    </section>
                </div>
            </div>
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

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     try {
//         //
//     } catch (error) {
//         //
//     }

//     return {props};
// }