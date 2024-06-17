import { ReactNode } from "react";

interface ISectionButtonProps{
    flag: boolean
    onClick: VoidFunction
    children: ReactNode
}

export default function SectionButton({flag, onClick, children}: ISectionButtonProps){
    return(
        <button 
            className={`p-5 text-white rounded-md border border-blue-500 ${flag? "bg-blue-500" :"bg-slate-700"} mr-10`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}