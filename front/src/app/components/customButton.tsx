import { ReactNode } from "react";

interface ICustomButtonProps{
    children: ReactNode
    onClick?: VoidFunction
}

export default function CustomButton({children, onClick}: ICustomButtonProps){
    return (
        <button
            className="text-white bg-gradient-to-r from-cyan-500 to-purple-700 items-center w-fit p-3 rounded-md flex flex-row"
            onClick={onClick}
        >
            {children}
        </button>
    );
}