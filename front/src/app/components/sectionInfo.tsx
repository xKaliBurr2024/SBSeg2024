import { Sections } from "../result/page";

interface ISectionInfoProps{
    sectionType: Sections
    info: string
    extra?: boolean
}

export default function SectionInfo({sectionType, info, extra}: ISectionInfoProps){
    const title = () => {
        if(sectionType == Sections.GeneralInfo){return extra || false ? "Banner da Página HTML Inicial do Alvo" :"Informações Gerais do Domínio"}
        if(sectionType == Sections.Directories){return "Varredura de Diretórios"}
        if(sectionType == Sections.Services){return "Scanner de Portas de Rede"}
        if(sectionType == Sections.Neighbors){return extra || false ? "Sub DNS do Domínio" : "DNS Reverso do Domínio"}
    };

    return(
        <section className="pt-7 mb-7">
            <h2 className="text-blue-500 text-2xl font-bold mb-5">{title()}</h2>
            <pre className="text-white overflow-x-auto">{info}</pre>
        </section>
    );
}