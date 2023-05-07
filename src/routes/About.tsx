import React from "react";
import "../style/About.css"
import believeIllustration from "../assets/svg/believe_img.svg"
import challengesIllustration from "../assets/svg/challenges_img.svg"
import solutionIllustration from "../assets/svg/solution_img.svg"

const About = () => {
  return (
    <section>
      <header></header>
      <main className="about_main-section">
        <h3 >
          Welcome to TITA, a decentralized micro-lending platform that connects
          startups, investors, and entrepreneurs in an ecosystem that fosters
          growth and success.
        </h3>
        <div>
          <article className="about_grid">
            <div>
              <h5>WHAT WE BELIEVE</h5>
              <p>
                At TITA, we believe in providing equal opportunities to all
                individuals, regardless of their background, gender, or
                financial status. Our mission is to empower entrepreneurs and
                small business owners access capital, resources, and mentorship
                to help them achieve their goals.
              </p>
            </div>
            <img src={believeIllustration} alt="" />
          </article>
          <article className="about_grid">
            <img src={challengesIllustration} alt="" />
            <div>
              <h5>WHAT WE BELIEVE</h5>
              <p>
                At TITA, we believe in providing equal opportunities to all
                individuals, regardless of their background, gender, or
                financial status. Our mission is to empower entrepreneurs and
                small business owners access capital, resources, and mentorship
                to help them achieve their goals.
              </p>
            </div>
          </article>
          <article className="about_grid">
            <div>
              <h5>WHAT WE BELIEVE</h5>
              <p>
                At TITA, we believe in providing equal opportunities to all
                individuals, regardless of their background, gender, or
                financial status. Our mission is to empower entrepreneurs and
                small business owners access capital, resources, and mentorship
                to help them achieve their goals.
              </p>
            </div>
            <img src={solutionIllustration} alt="" />
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
