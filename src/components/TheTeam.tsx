import React from "react";
import { teamMembers, ITeamMember } from "../utils/team-members";
import "../style/TheTeam.css";

const TheTeam = () => {
  return (
    <section className="d_team_wrapper">
      <h3 className="stellar_text">MEET THE TEAM</h3>
      <ul className="d_team_grid">
        {teamMembers.map((member: ITeamMember, idx) => (
          <li key={idx}>
            <img className="member_photo" src={member.photo} alt="photo" />
            <div>
              <p className="member_name">{member.name}</p>
              <ul>
                {member.positions.map((position) => (
                  <li className="member_position">{position}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TheTeam;
