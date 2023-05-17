import motuns from "../assets/members/motunrayoK.png"
import hannahs from "../assets/members/hannahE.png"
import adeyinkas from "../assets/members/adeyinkaA.png"
import akinsanmis from "../assets/members/akinsanmiO.png"
import deborahs from "../assets/members/deborahI.png"
import chisoms from "../assets/members/chisomC.png"
import oyebodes from "../assets/members/oyebodeT.png"


import sarahI from "../assets/members/sarahI.png"
import michealJ from "../assets/members/michealJ.png"
import olubisiI from "../assets/members/olubisiI.png"

export interface ITeamMember {
    photo: string,
    name: string,
    positions: Array<string>
}


export const teamMembers:Array<ITeamMember> = [
    {name: "Kareem Motunrayo", photo: motuns,  positions: ["Co-Founder & Innovation Strategist"]},
    {name: "Oyebode Tijesunimi", photo: oyebodes,  positions: ["CO Founder & Digital Marketing Manager"]},
    {name: "Adeyinka Adeyelu", photo: adeyinkas,  positions: ["COO & Project Manager"]},
    {name: "Akinsanmi Oluwafunmike", photo: akinsanmis,  positions: ["Quality Assurance Analyst"]},
    {name: "Iwuchukwu Deborah", photo: deborahs,  positions: ["Product Designer"]},
    {name: "Chukwuma Chisom", photo: chisoms,  positions: ["Smart Contract Developer"]},
    {name: "Ejimofor Hannah", photo: hannahs,  positions: ["Frontend Developer"]},
]

export const boardOfAdvisors:Array<ITeamMember> = [
    {name: "Sarah Idahosa", photo: sarahI,  positions: ["Founder, Women-in-Defi"]},
    {name: "Olubisi Idris", photo: olubisiI,  positions: ["Founder, Web3 Africa"]},
    {name: "Micheal Jerry", photo: michealJ,  positions: ["Founder, Freemerch"]},
]


