export default function CustomFooter(){
    return (
        <footer className="absolute bottom-0 bg-slate-900 text-white w-full h-14 flex flex-row items-center justify-between text-sm">
            <div></div>
            <div>
                <p>xKaliburr 2024 - All rights reserved</p>
            </div>
            <div className="flex flex-col mr-3 pb-2 text-right">
                <p>versão 2.0</p>
                <p>by round table team</p>
            </div>
        </footer>
    );
}