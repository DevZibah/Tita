import React from "react";
import "../style/About.css";
import believeIllustration from "../assets/svg/believe_img.svg";
import challengesIllustration from "../assets/svg/challenges_img.svg";
import solutionIllustration from "../assets/svg/solution_img.svg";
import hero from "../assets/svg/about-hero.svg";
import ElipsesBg from "../components/ElipsesBg";

const About = () => {
  return (
    <section>
      <header>
        <div>
          {/* <img src={hero} alt="hero-img" /> */}
        </div>
      </header>
      <ElipsesBg>
        <main className="about_main-section">
          <h3>
            Welcome to TITA, a decentralized micro-lending platform that
            connects startups, investors, and entrepreneurs in an ecosystem that
            fosters growth and success.
          </h3>
          <div>
            <article className="about_grid">
              <div>
                <h5>WHAT WE BELIEVE</h5>
                <p>
                  At TITA, we believe in providing equal opportunities to all
                  individuals, regardless of their background, gender, or
                  financial status. Our mission is to empower entrepreneurs and
                  small business owners access capital, resources, and
                  mentorship to help them achieve their goals.
                </p>
              </div>
              <img src={believeIllustration} alt="" />
            </article>
            <article className="about_grid">
              <img src={challengesIllustration} alt="" />
              <div>
                <h5>THE CHALLENGES</h5>
                <p>
                  We understand the challenges that entrepreneurs face when
                  trying to secure funding for their projects.
                  <br />
                  <br /> Traditional lending institutions often require
                  collateral or credit scores that many startups and female
                  entrepreneurs may not have. That's why we've created a
                  platform that leverages the power of blockchain technology to
                  provide fair and accessible loans.
                </p>
              </div>
            </article>
            <article className="about_grid">
              <div>
                <h5>OUR SOLUTION</h5>
                <p>
                  Our platform is built on the Celo blockchain, which enables us
                  to offer secure and transparent transactions. With smart
                  contracts, we can automate the lending process, reduce the
                  need for intermediaries and enabling faster transactions.
                </p>
              </div>
              <img src={solutionIllustration} alt="" />
            </article>
          </div>
          <article className="">
            <div>
              <h5>THE VISION</h5>
              <p>
                We're proud to say that TITA is not just a lending platform, but
                a community of like-minded individuals who share the same vision
                of creating a world where everyone has an equal chance to
                succeed. By connecting startups and female entrepreneurs with
                investors, we're building a network that drives innovation and
                growth.
                <br />
                <br />
                Join us on this journey to revolutionize the world of lending
                and finance. Together, we can make a difference and create a
                brighter future for all.
              </p>
            </div>
          </article>
        </main>
      </ElipsesBg>
    </section>
  );
};

export default About;
