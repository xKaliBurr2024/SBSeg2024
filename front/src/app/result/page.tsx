'use client';
import { useState, useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Loading from "../components/loading";
import SectionButton from "../components/sectionButton";
import { RunAllScan } from "@/api/run_all_scan";
import IpSection from "../components/ipSection";
import SectionInfo from "../components/sectionInfo";
import Hint from "../components/hint";
import ReportButton from "../components/reportButton";

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
        whatweb: "",
        reverseDNS: "",
        subDNS: "",
        whoIs: "",
        banner: "",
        directoryScan: "",
        ports: ""
    })

    const optionSelected = searchParams.get('option') as 'http' | 'https'
    const searchValue = searchParams.get('search')?.toLocaleLowerCase()

    useEffect(() => {
        const fetchData = async () => {
            const {promises, ip} = await RunAllScan(searchValue!, optionSelected)
            if(promises) {
                setData({
                    whatweb: await promises.whatweb.then(response => response.text()),
                    reverseDNS: await promises.reverseDNS.then(response => response.text()),
                    subDNS: await promises.subDNS.then(response => response.text()),
                    whoIs: await promises.whoIs.then(response => response.text()),
                    banner: await promises.banner.then(response => response.text()),
                    directoryScan: await promises.directoryScan.then(response => response.text()),
                    ports: await promises.ports.then(response => response.text())
                })
                setIp(ip)
                setIsLoading(false)
            }
        }

        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const infoText = () => {
        if(section == Sections.GeneralInfo){return data.whoIs}
        if(section == Sections.Directories){return data.directoryScan}
        if(section == Sections.Services){return data.ports}
        if(section == Sections.Neighbors){return data.reverseDNS}
    }

    function btnClick(value: Sections){
        setSection(value)
    }

    if (isLoading) return <Loading domainName={searchValue!}/>

    return (
        <>
            <header className="flex flex-row gap-4 text-sm w-full">
                <Link href={{pathname: "/"}}>
                    <Image
                        src="/exekaliburr-icon.svg"
                        alt={""}
                        width={50}
                        height={24}
                        priority
                    />
                </Link>
                <div className="flex flex-row border border-white items-center rounded-md bg-slate-700 p-3 grow">
                    <div className="pr-5 border-r-2">
                        <p className="text-blue-500">{optionSelected}</p>
                    </div>
                    <IoInformationCircleOutline className="text-blue-500 ml-3" size={25}/>
                    <div className="ml-3 w-full">
                        <div className="text-gray-400 bg-slate-700 w-full">{searchValue}</div>
                    </div>
                </div>
                <ReportButton search={searchValue!} ip={ip} results={data} />
            </header>
            <div className="flex flex-col w-full h-full mt-10 gap-6">
                <div className="flex flex-row gap-4 overflow-x-auto">
                    <SectionButton flag={section} onClick={() => btnClick(Sections.GeneralInfo)} sectionType={Sections.GeneralInfo}/>
                    <SectionButton flag={section} onClick={() => btnClick(Sections.Directories)} sectionType={Sections.Directories}/>
                    <SectionButton flag={section} onClick={() => btnClick(Sections.Services)} sectionType={Sections.Services}/>
                    <SectionButton flag={section} onClick={() => btnClick(Sections.Neighbors)} sectionType={Sections.Neighbors}/>
                </div>
                <Hint sectionType={section}/>
                <div className="flex flex-row justify-between">
                    <div className="bg-slate-900 divide-y divide-blue-500 p-10 rounded-md w-full">
                        <IpSection alias={searchValue!} ip={ip} info={data.whatweb} sectionType={section}/>
                        <SectionInfo sectionType={section} info={infoText()!}/>
                        {section == Sections.GeneralInfo ? <SectionInfo sectionType={section} info={data.banner} extra={true}/> : <></>}
                        {section == Sections.Neighbors ? <SectionInfo sectionType={section} info={data.subDNS} extra={true}/> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}
