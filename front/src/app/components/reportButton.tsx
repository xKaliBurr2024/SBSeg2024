import { MdOutlineFileDownload } from "react-icons/md"
import CustomButton from "./customButton"

const header =
` __          __  _            _  __     _ _ _                            ___    ___
 \\ \\        / / | |          | |/ /    | (_) |                          |__ \\  / _ \\
  \\ \\  /\\  / /__| |__   __  _| ' / __ _| |_| |__  _   _ _ __ _ __  __   __ ) || | | |
   \\ \\/  \\/ / _ \\ '_ \\  \\ \\/ /  < / _\` | | | '_ \\| | | | '__| '__| \\ \\ / // / | | | |
    \\  /\\  /  __/ |_) |  >  <| . \\ (_| | | | |_) | |_| | |  | |     \\ V // /_ | |_| |
     \\/  \\/ \\___|_.__/  /_/\\_\\_|\\_\\__,_|_|_|_.__/ \\__,_|_|  |_|      \\_/|____(_)___/

By round table team
`

interface ReportButtonProps {
    search: string
    ip: string
    results: {
        whatweb: string
        reverseDNS: string
        subDNS: string
        whoIs: string
        banner: string
        directoryScan: string
        ports: string
    }
}


export default function ReportButton({ search, ip, results }: ReportButtonProps) {
    function getReportBody() {
        return `${header}
###########################################
###     Identificação de Endereço IP    ###
###########################################

Alias usado: ${search}
Endereço IP Descoberto: ${ip}

Outras Informações Relacionadas aos Endereçamentos IP do Alvo:
${results.whatweb}

############################################
###      Scanner de Portas de Redes      ###
############################################

${results.ports}

###################################
###   Varredura de Diretórios   ###
###################################

${results.directoryScan}

############################################
###     Informações Gerais do Domínio    ###
############################################

${results.whoIs}

#####################################################
###    Banner da Página HTML Inicial do Alvo      ###
#####################################################

${results.banner}

####################################
###     DNS Reverso do Domínio   ###
####################################

${results.reverseDNS}

############################################
###    Sub-DNS & Sistemas Integrados     ###
############################################

${results.subDNS}

Exploração Realizada em: ${new Date().toLocaleString()}
`
    }

    function generateReport() {
        const body = getReportBody()
        const file = new Blob([body], {type: 'text/plain'})
        const url = URL.createObjectURL(file)

        const link = document.createElement('a')
        link.href = url
        link.download = 'report.txt'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <CustomButton onClick={generateReport}>
            <p>DOWNLOAD DA ANÁLISE</p>
            <MdOutlineFileDownload className="ml-3" size={25}/>
        </CustomButton>
    )
}