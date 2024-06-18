import { getBanner, getDirectoryScan, getIP, getPorts, getReverseDNS, getSubDNS, getWhoIs } from "./scan"

export async function RunAllScan(input: string, protocol: 'http' | 'https') {
    const url = `${protocol}://${input}`
    const host = input.split('/')[0].split(':')[0]
    const ip = (await (await getIP(host)).text()).split(' ').at(-1)!
    const promises = [
        getReverseDNS(ip),
        getSubDNS(host),
        getWhoIs(ip),
        getBanner(url),
        getDirectoryScan(ip),
        getPorts(ip)
    ]
    return promises
}
