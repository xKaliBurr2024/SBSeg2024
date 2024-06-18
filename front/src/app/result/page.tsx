'use client';
import { useState, useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Loading from "../components/loading";
import CustomFooter from "../components/customFooter";
import CustomButton from "../components/customButton";
import SectionButton from "../components/sectionButton";
import { RunAllScan } from "@/api/run_all_scan";
import IpSection from "../components/ipSection";
import SectionInfo from "../components/sectionInfo";

//Remover depois
const auxText = `Lorem ipsum dolor sit amet. Est delectus quisquam 33 consequatur voluptas aut itaque animi rem aliquam reprehenderit 33 ullam necessitatibus sed neque repudiandae. Vel quia ducimus et rerum comodi qui nostrum fuga aut nemo praesentium qui inventore ducimus. Aut sint quia qui magnam impedit est accusamus libero sed officiis doloribus hic odio dolorum sed repellat molestiae qui impedit pariatur. Est totam nulla eos voluptatem culpa aut necessitatibus praesentium id temporibus iusto. Ex nemo aperiam qui reprehenderit facilis non doloribus voluptatem aut fugiat sint quo nobis illum. Sit unde ipsa sit dolorem aliquam non similique quae non dignissimos consequatur nam similique assumptionnda est perferendis cumque? Non sapiente sequi ut explicabo repellendus et sint labore.`

export enum Sections {
    GeneralInfo = "INFORMAÇÕES GERAIS",
    Directories = "DIRETÓRIOS E PÁGINAS SENSÍVEIS",
    Services = "SERVIÇOS E PORTAS DE REDE",
    Neighbors = "DOMÍNIOS VIZINHOS"
}

export default function ResultPage(){
    const searchParams = useSearchParams();
    const [section, setSection] = useState(Sections.GeneralInfo)
    const [isLoading, setIsLoading] = useState(true)
    const [ip, setIp] = useState("")
    const [data, setData] = useState({
        reverseDNS: "",
        subDNS: "",
        whoIs: "",
        banner: "",
        directoryScan: "",
        ports: ""
    })

    const optionSelected = searchParams.get('option') as 'http' | 'https'
    const oldSearch = searchParams.get('search')

    useEffect(() => {
        const fetchData = async () => {
            const {promises, ip} = await RunAllScan(oldSearch!, optionSelected)
            if(promises){
                setData({
                    reverseDNS: await (await promises.reverseDNS).text(),
                    subDNS: await (await promises.subDNS).text(),
                    whoIs: await (await promises.whoIs).text(),
                    banner: await (await promises.banner).text(),
                    directoryScan: await (await promises.directoryScan).text(),
                    ports: await (await promises.ports).text()
                })
                setIp(ip)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [oldSearch, optionSelected])

    const infoText = () => {
        if(section == Sections.GeneralInfo){return data.whoIs}
        if(section == Sections.Directories){return data.directoryScan}
        if(section == Sections.Services){return data.ports}
        if(section == Sections.Neighbors){return data.reverseDNS}
    }

    function btnClick(value: Sections){
        setSection(value)
    }

    return(<>{ isLoading ? <Loading/> :
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
                    <CustomButton onClick={() => {/*DO NOTHING*/}}>
                        <p>DOWNLOAD DA ANÁLISE</p>
                        <MdOutlineFileDownload className="ml-3" size={25}/>
                    </CustomButton>
                </header>
                <div className="w-full h-full pl-10 pr-10">
                    <div className="flex flex-row mt-7">
                        <SectionButton flag={section} onClick={() => btnClick(Sections.GeneralInfo)} sectionType={Sections.GeneralInfo}/>
                        <SectionButton flag={section} onClick={() => btnClick(Sections.Directories)} sectionType={Sections.Directories}/>
                        <SectionButton flag={section} onClick={() => btnClick(Sections.Services)} sectionType={Sections.Services}/>
                        <SectionButton flag={section} onClick={() => btnClick(Sections.Neighbors)} sectionType={Sections.Neighbors}/>
                    </div>
                    <div className="bg-slate-900 mt-10 divide-y divide-blue-500 p-10">
                        <IpSection alias={oldSearch!} ip={ip} info={data.subDNS}/>
                        <SectionInfo sectionType={section} info={infoText()!}/>
                        {section == Sections.GeneralInfo ? <SectionInfo sectionType={section} info={data.banner} banner={true}/> : <></>}
                    </div>
                </div>
                <CustomFooter/>
            </main>
        }</>
    );
}
