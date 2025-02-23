import React from "react";
import "../styles/About.css";
import teamImage from "../assets/team.png";

// Import Unique Profile Images
import jivanPic from "../assets/jivan.png";
import soumyaPic from "../assets/soumya.png";
import subhashreePic from "../assets/subhashree.png";
import suhanaPic from "../assets/suhana.png";
import debasisPic from "../assets/debasis.png";
import harshPic from "../assets/harsh.png";
import shyamPic from "../assets/shyam.png";
import sumanPic from "../assets/suman.png";
import visionImg from "../assets/vision.png";
import missionImg from "../assets/mission.png";
import facebookIcon from "../assets/facebookicon.png";
import twitterIcon from "../assets/twittericon.png";
import linkedinIcon from "../assets/linkedinlogo.png";
import instagramIcon from "../assets/instagramicon.png";

const teamMembers = [
  { name: "Jivan Satapathy", role: "CO-FOUNDER", position: "CTO", img: jivanPic, linkedin: "https://www.linkedin.com/in/jivan-satapathy/" },
  { name: "Soumya Ranjan Mohanty", role: "FOUNDER", position: "CEO", img: soumyaPic, linkedin: "https://www.linkedin.com/in/soumya-ranjan-mohanty-401291213/" },
  { name: "Subhashree Swain", role: "COO", position: "", img: subhashreePic, linkedin: "https://www.linkedin.com/in/swain-subhashree/" },
  { name: "D Shyamsundar", role: "Digital Marketing Specialist", position: "", img: shyamPic, linkedin: "https://www.linkedin.com/in/d-shyamsundar-7aa19b226" },
  { name: "Suman Moharana", role: "Business Analyst", position: "", img: sumanPic, linkedin: "https://linkedin.com/in/suman" },
  { name: "Suhana Sahoo", role: "Social Media Manager", position: "", img: suhanaPic, linkedin: "https://www.linkedin.com/in/suhana-sahoo-767017313/" },
  { name: "Debasish Sadangi", role: "Backend Developer", position: "", img: debasisPic, linkedin: "https://www.linkedin.com/in/debasish-sadangi-801230237/" },
  { name: "Harsh Wardhan", role: "Frontend Developer", position: "", img: harshPic, linkedin: "https://www.linkedin.com/in/harsh-wardhan-8400202b1/" },
];

const About = () => {
  return (
    <>
      <section className="About-section">
        <div className="container">
          <h2 className="About">About Us</h2>
          <p className="Text">
            One Tale is a leading placement and recruitment service provider, specializing in
            connecting talented individuals with top hiring companies. We also offer expert
            website development, digital marketing, and social media marketing solutions.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="vision-mission-container">
          {/* Vision Card */}
          <div className="vision-card fade-in">
            <img src={visionImg} alt="Our Vision" className="vision-img" />
            <h3>Our Vision</h3>
            <p>
              Our vision is to bridge the gap between talent and opportunity, empowering
              individuals with the right skills and connections to excel in their careers.
            </p>
          </div>

          {/* Mission Card */}
          <div className="mission-card fade-in">
            <img src={missionImg} alt="Our Mission" className="mission-img" />
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide top-notch placement and recruitment services while
              delivering exceptional digital solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <h2><b>The Team</b></h2>
            <img src={teamImage} alt="Team" className="team-image" />
          </div>
          <p>
            Our leadership team at One Tale brings diverse expertise across multiple domains.
            The Founder has over four years of experience in business administration, while the
            Co-founder is a skilled full-stack developer with more than two years of experience
            in website design. Our COO has over a year of experience in the recruitment field.
            Additionally, our team members have more than a year of expertise in their
            respective specializations, ensuring quality and innovation in every project we
            undertake. 🚀
          </p>
        </div>

        {/* Team Cards */}
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} className="profile-pic" />
              <h3>{member.name}</h3>
              <p className="designation">{member.role}</p>
              {member.position && <p className="position">{member.position}</p>}

              {/* LinkedIn Button */}
              <div className="linkedin-btn">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        <p>© 2025 One Tale. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default About;