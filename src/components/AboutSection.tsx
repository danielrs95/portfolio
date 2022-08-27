import React from "react";
import stylesSections from "../styles/Sections.module.css";
import AboutParticles from "./AboutParticles";

const AboutSection = () => {
  return (
    <div className={`section ${stylesSections.about}`}>
      <div className={stylesSections.aboutContainer}>
        <h1 className={stylesSections.aboutTitle}>Daniel Ramirez Salazar</h1>
        <h2 className={stylesSections.aboutSubtitle}>Full Stack Developer</h2>
        <AboutParticles />
      </div>
    </div>
  );
};

export default AboutSection;
