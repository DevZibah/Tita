import React from "react";
import { teamMembers, ITeamMember } from "../utils/team-members";
import "../style/TheTeam.css";

const TheTeam = () => {
  return (
    <section className="d_team_wrapper">
      <h3 className="stellar_text">MEET THE TEAM</h3>
      <ul className="d_team_grid">
        {teamMembers.map((member: ITeamMember, idx) => (
          <li key={idx} className="member_info">
            <div className="member_photo_wrapper">
            <img className="member_photo" src={member.photo} alt="photo" />
            </div>
            <div className="member_content_wrapper">
              <p className="member_name">{member.name}</p>
                {member.positions.map((position) => (
                  <p className="member_position">{position}</p>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TheTeam;
