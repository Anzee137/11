import * as axios from "axios";



export const getIpInfo = (Ip) => {
    return (axios.get(`https://geo.ipify.org/api/v1?apiKey=at_eyfIv2pugqfc3gV7OnUjmnnm90uL7&ipAddress=${Ip}`));
}