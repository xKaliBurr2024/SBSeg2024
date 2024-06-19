import { MdTravelExplore } from "react-icons/md";


interface IIpSectionProps{
    alias: string
    ip: string
    info: string
}

export default function IpSection({alias, ip, info}: IIpSectionProps){
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
            <p className="text-white">{subTitle}</p>
            <pre className="text-white">{info}</pre>
        </section>
    );
}