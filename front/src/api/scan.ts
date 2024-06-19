import { customFetch } from "./api"

export function getIP(host: string) {
    return customFetch(`/ip?host=${host}`, {method: 'GET'})
}

export function getWhatweb(host: string) {
    return customFetch(`/whatweb?host=${host}`, {method: 'GET'})
}

export function getReverseDNS(ip: string) {
    return customFetch(`/reverse_dns?ip=${ip}`, {method: 'GET'})
}

export function getSubDNS(host: string) {
    // return customFetch(`/sub_dns?host=${host}`, {method: 'GET'})
    return {text: () => "Testando"}
}

export function getWhoIs(ip: string) {
    return customFetch(`/whois?ip=${ip}`, {method: 'GET'})
}

export function getBanner(url: string) {
    return customFetch(`/banner?url=${url}`, {method: 'GET'})
}

export function getDirectoryScan(ip: string) {
    // return customFetch(`/directory_scan?ip=${ip}`, {method: 'GET'})
    return {text: () => "Testando2"}
}

export function getPorts(ip: string) {
    return customFetch(`/ports?ip=${ip}`, {method: 'GET'})
}
