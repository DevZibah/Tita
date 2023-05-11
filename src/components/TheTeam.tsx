import React from "react";
import { teamMembers, ITeamMember } from "../utils/team-members";
import "../style/TheTeam.css"

const TheTeam = () => {
  return (
    <section className="d_team_wrapper">
      <h3 className="stellar_text">THE STELLAR TEAM</h3>
      <ul className="d_team_grid">
        {teamMembers.map((member: ITeamMember, idx) => (
          <li key={idx}>
            <img className="member_photo" src={member.photo} alt="photo" />
            <p className="member_name">{member.name}</p>
            <ul>
              {member.positions.map((position) => (
                <li className="member_position">{position}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TheTeam;
