import { GrCircleInformation } from "react-icons/gr";

interface IHintElementProps{
    text: string
}

export default function HintElement({text}: IHintElementProps){
    return(
        <div className="flex flex-row w-full mt-5 mb-5">
            <GrCircleInformation className="text-white mr-2 min-w-[25px]" size={25}/>
            <p className="w-fit">{text}</p>
        </div>
    );
}