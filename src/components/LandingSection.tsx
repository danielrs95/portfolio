import React from "react";
import stylesSections from "../styles/Sections.module.css";
import LandingParticles from "./LandingParticles";

const LandingSection = () => {
  return (
    <div className={`section ${stylesSections.landing}`}>
      <div className={stylesSections.landingContainer}>
        <h1 className={stylesSections.landingTitle}>Daniel Ramirez Salazar</h1>
        <h2 className={stylesSections.landingSubtitle}>Full Stack Developer</h2>
        <LandingParticles />
      </div>
    </div>
  );
};

export default LandingSection;
