import { ReactNode } from "react";
import { Sections } from "../result/page";

interface ISectionButtonProps{
    flag: Sections
    onClick: VoidFunction
    sectionType: Sections
}

export default function SectionButton({flag, onClick, sectionType}: ISectionButtonProps){
    return(
        <button
            className={`p-5 text-white rounded-md border border-blue-500 grow ${flag == sectionType? "bg-blue-500" :"bg-slate-700"}`}
            onClick={() => onClick()}
        >
            {sectionType}
        </button>
    );
}