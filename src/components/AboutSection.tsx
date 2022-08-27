import React from "react";
import stylesSections from "../styles/Sections.module.css";

const AboutSection = () => {
  return (
    <div className={`section ${stylesSections.about}`}>
      <div className={stylesSections.aboutContainer}>
        <h1 className={stylesSections.aboutTitle}>Daniel Ramirez Salazar</h1>
        <h2 className={stylesSections.aboutSubtitle}>Full stack developer</h2>
        <div className={stylesSections.area}>
          <ul className={stylesSections.circles}>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
