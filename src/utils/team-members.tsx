import motuns from "../assets/members/motunrayo.png"
// import hannahs from "../assets/members/hannah.jpg"
import frame61 from "../assets/members/Frame61.png"
import frame62 from "../assets/members/Frame62.png"
import frame64 from "../assets/members/Frame64.png"

export interface ITeamMember {
    photo: string,
    name: string,
    positions: Array<string>
}


export const teamMembers:Array<ITeamMember> = [
    {name: "Kareem Motunrayo", photo: motuns,  positions: ["Cofounder & Innovation Strategist", "Program Manager - The Morpheus Academy", "Lead Admin - Digital Dominance Academy"]},
    {name: "", photo: frame61,  positions: ["COO & Project Manager", "Associate, Broad Capital Advisory"]},
    {name: "", photo: frame62,  positions: ["Quality Assurance Analyst"]},
    // {name: "", photo: "",  positions: [""]},
    {name: "", photo: frame64,  positions: ["Product Designer"]},
    // {name: "Chukwuma Chisom", photo: "",  positions: ["Frontend Engineer"]},
    // {name: "Ejimofor, Hannah", photo: "",  positions: ["Frontend Developer"]},
]


