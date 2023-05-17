import React from "react";
import {
  teamMembers,
  ITeamMember,
  boardOfAdvisors,
} from "../utils/team-members";
import "../style/TheTeam.css";

const TheTeam = () => {
  return (
    <section className="d_team_wrapper">
      <div className="team_section">
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
      </div>

      <div className="advisor_section">
        <h3 className="stellar_text">Our Board of Advisors</h3>
        <ul className="d_advisor_grid">
          {boardOfAdvisors.map((advisor: ITeamMember, idx) => (
            <li key={idx} className="member_info">
              <div className="member_photo_wrapper">
                <img className="member_photo" src={advisor.photo} alt="photo" />
              </div>
              <div className="member_content_wrapper">
                <p className="member_name">{advisor.name}</p>
                {advisor.positions.map((position) => (
                  <p className="member_position">{position}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TheTeam;
