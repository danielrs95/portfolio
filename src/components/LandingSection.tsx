import React from "react";
import stylesSections from "../styles/Sections.module.css";
import LandingParticles from "./LandingParticles";

const LandingSection = () => {
  return (
    <div className={`section ${stylesSections.about}`}>
      <div className={stylesSections.aboutContainer}>
        <h1 className={stylesSections.aboutTitle}>Daniel Ramirez Salazar</h1>
        <h2 className={stylesSections.aboutSubtitle}>Full Stack Developer</h2>
        <LandingParticles />
      </div>
    </div>
  );
};

export default LandingSection;
