import motuns from "../assets/members/motunrayoK.png"
import hannahs from "../assets/members/hannahE.png"
import adeyinkas from "../assets/members/adeyinkaA.png"
import akinsanmis from "../assets/members/akinsanmiO.png"
import deborahs from "../assets/members/deborahI.png"
import chisoms from "../assets/members/chisomC.png"
import oyebodes from "../assets/members/oyebodeT.jpg"

export interface ITeamMember {
    photo: string,
    name: string,
    positions: Array<string>
}


export const teamMembers:Array<ITeamMember> = [
    {name: "Kareem Motunrayo", photo: motuns,  positions: ["Co-Founder & Innovation Strategist"]},
    {name: "Oyebode Tijesunimi", photo: oyebodes,  positions: ["CO Founder & Digital Marketing Manager"]},
    {name: "Adeyinka Adeyelu", photo: adeyinkas,  positions: ["COO & Project Manager"]},
    {name: "Chukwuma Chisom", photo: chisoms,  positions: ["Smart Contract Developer"]},
    {name: "Ejimofor Hannah", photo: hannahs,  positions: ["Frontend Developer"]},
    {name: "Akinsanmi Oluwafunmike", photo: akinsanmis,  positions: ["Quality Assurance Analyst"]},
    {name: "Iwuchukwu Deborah", photo: deborahs,  positions: ["Product Designer"]},
]


