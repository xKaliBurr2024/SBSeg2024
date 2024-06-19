import { Sections } from "../result/page";
import HintElement from "./hintElement";
import { MdLightbulb } from "react-icons/md";

interface IHintProps{
    sectionType: Sections
}

export default function Hint({sectionType}: IHintProps){
    const generalInfoText = "O Web xKaliburr é capaz de capturar informações detalhadas sobre as configurações do domínio analisado, tais como os plugins ativos na página, tecnologias utilizadas pelo sistema, códigos HTML da página inicial, dados pessoais dos proprietários do domínio, entre muitas outras informações."
    const directoriesText = "O Web xKaliburr é capaz de realizar varreduras nas árvores de subdiretórios do alvo analisado. Esta abordagem é interessante do ponto de vista de um agente malicioso, pois amplia a superfície de ataques que podem ser direcionados ao site-alvo."
    const servicesText = "O Web xKaliburr é capaz de realizar comunicações com as portas de rede existentes na infraestrutura do domínio explorado. Dessa forma, é possível obter informações valiosas sobre as configurações daquela hospedagem, possibilitando a aplicação de diversas abordagens ofensivas ao alvo analisado."
    const neighborsText = `O Web xKaliBurr possibilita a varredura das hospedagens e sub-sistemas presentes no mesmo intervalo de endereçamento IP do alvo analisado. Dessa forma, é possível identificar outros potenciais alvos de ataques, ampliando a superfície de ataque disponível para um invasor. Em caso de sucesso na aplicação de qualquer vetor de ataque, o invasor pode realizar uma operação conhecida como "Movimentação Lateral". Assim, partindo de um domínio vulnerável na vizinhança do alvo principal, ele é capaz de causar impactos significativos no objetivo das explorações.`

    const generalInfoHint1 = "Vulnerabilidades nos plugins detectados;"
    const generalInfoHint2 = "Existência de comentários comprometedores, deixados inadvertidamente pelos desenvolvedores nos códigos HTML da página analisada;"
    const generalInfoHint3 = "Vazamentos inadequados de e-mails corporativos, telefones, nomes de administradores e responsáveis pelo domínio. Essas informações podem ser utilizadas para ataques de Phishing e Engenharia Social."

    const directoriesHint1 = "Páginas administrativas, como painéis de login de funcionários ou utilizadores internos do sistema. Essas páginas podem ser vítimas de ataques de Força Bruta e sucessivas tentativas de conexão;"
    const directoriesHint2 = "Diretórios de serviços internos. Páginas que, por alguma razão, precisam ter comunicação direta com o back-end da aplicação. Mesmo que não possuam nenhum link direto com as páginas públicas utilizadas pelos usuários comuns, é possível detectar esse tipo de página caso medidas adequadas de proteção não tenham sido devidamente configuradas;"
    const directoriesHint3 = "Qualquer página que possua campo de entrada de dados expostos aos usuários. É extremamente importante sempre aplicar o princípio da Confiança Zero. Portanto, campos de busca, painéis de cadastro ou qualquer tecnologia semelhante que apresente esse input de dados precisam urgentemente estar devidamente protegidos e sanitizados."

    const servicesHint1 = "Configurações inadequadas das portas de rede. Aplicando o princípio do Privilégio Mínimo, desabilitando a ativação de portas desnecessárias para reduzir as superfícies de ataque dos invasores;"
    const servicesHint2 = "Verifique se os serviços operantes em suas portas de rede estão atualizados e protegidos. Uma das maneiras mais simples de realizar ataques a domínios inseguros na internet é utilizando Exploits em tecnologias desatualizadas presentes em algum site;"
    const servicesHint3 = `Procure camuflar suas portas de rede. Uma abordagem comum é a utilização de "Portas Altas". Por exemplo, utilizar a porta 4343 no lugar da porta 443 que é destinada por padrão à comunicação de serviços HTTPS, esta é um alvo comum entre todos os atacantes. Se sua aplicação utiliza essa configuração, considere modificar o serviço para outra porta incomum, conhecida apenas pelos funcionários internos do sistema.`

    const hintText = () => {
        if(sectionType == Sections.GeneralInfo){return generalInfoText}
        if(sectionType == Sections.Directories){return directoriesText}
        if(sectionType == Sections.Services){return servicesText}
        if(sectionType == Sections.Neighbors){return neighborsText}
    }

    const hintElementText = (value: number) => {
        if(sectionType == Sections.GeneralInfo){
            if(value == 1){return generalInfoHint1}
            if(value == 2){return generalInfoHint2}
            if(value == 3){return generalInfoHint3}
        }
        if(sectionType == Sections.Directories){
            if(value == 1){return directoriesHint1}
            if(value == 2){return directoriesHint2}
            if(value == 3){return directoriesHint3}
        }
        if(sectionType == Sections.Services){
            if(value == 1){return servicesHint1}
            if(value == 2){return servicesHint2}
            if(value == 3){return servicesHint3}
        }
    }

    return(
        <section className="flex flex-col w-full border border-white bg-gradient-to-r from-cyan-500 to-purple-700 rounded-md text-white p-5">
            <div className="flex flex-row justify-center">
                <MdLightbulb className="text-yellow-500 mr-1" size={25}/>
                <h2>{"DICAS DE SEGURANÇA"}</h2>
            </div>
            <p className="py-3 text-white">{hintText()}</p>
            {
                sectionType != Sections.Neighbors ? <p className="w-full p-3 bg-yellow-500 rounded-md text-center text-black font-bold">
                    {"ESTEJA ATENTO"}
                </p> : <></>
            }
            <ul className="flex flex-col gap-3 mt-3">
                {sectionType != Sections.Neighbors ? <HintElement text={hintElementText(1)!}/> : <></>}
                {sectionType != Sections.Neighbors ? <HintElement text={hintElementText(2)!}/> : <></>}
                {sectionType != Sections.Neighbors ? <HintElement text={hintElementText(3)!}/> : <></>}
            </ul>
        </section>
    );
}