import { Sections } from "../result/page";

interface ISectionInfoProps{
    sectionType: Sections
    info: string
    banner?: boolean
}

export default function SectionInfo({sectionType, info, banner}: ISectionInfoProps){
    const title = () => {
        if(sectionType == Sections.GeneralInfo){return banner || false ? "Banner da Página HTML Inicial do Alvo" :"Informações Gerais do Domínio"}
        if(sectionType == Sections.Directories){return "Varredura de Diretórios"}
        if(sectionType == Sections.Services){return "Scanner de Portas de Rede"}
        if(sectionType == Sections.Neighbors){return "DNS Reverso do Domínio"}
    };

    return(
        <section className="pt-7 mb-7">
            <h2 className="text-blue-500 text-2xl font-bold mb-5">{title()}</h2>
            <p className="text-white">{info}</p>
        </section>
    );
}