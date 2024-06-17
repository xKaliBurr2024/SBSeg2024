import { ReactNode } from "react";

interface ICustnButtonProps{
    children: ReactNode
    onClick: VoidFunction
}

export default function CustonButton({children, onClick}: ICustnButtonProps){
    return (
    <button 
        className="text-white bg-gradient-to-r from-cyan-500 to-purple-700 items-center w-fit p-3 rounded-md flex flex-row"
        onClick={() => onClick()}
    >
        {children}
    </button>);
}