import { MdTravelExplore } from "react-icons/md";
import { Sections } from "../result/page";


interface IIpSectionProps{
    alias: string
    ip: string
    info: string
    sectionType: Sections
}

export default function IpSection({alias, ip, info, sectionType}: IIpSectionProps){
    const title = "Identificação de Endereço IP";
    const subTitle = "OUTRAS INFORMAÇÕES RELACIONADAS AOS ENDEREÇAMENTOS IP DO ALVO:";

    return(
        <section className="mb-7">
            <h1 className="text-blue-500 text-2xl font-bold mb-5">{title}</h1>
            <div className="flex flex-row items-start">
                <MdTravelExplore className="text-blue-500 mr-3" size={30}/>
                <div className="text-white mb-5">
                    <p>{`Alias Pesquisado: ${alias}`}</p>
                    <p>{`Endereço IP Descoberto: ${ip}`}</p>
                </div>
            </div>
            {sectionType == Sections.GeneralInfo ? <p className="text-white mb-3">{subTitle}</p> : <></>}
            {sectionType == Sections.GeneralInfo ? <pre className="text-white overflow-x-auto">{info}</pre> : <></>}
        </section>
    );
}