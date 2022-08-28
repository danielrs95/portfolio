import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import AboutSection from "./AboutSection";
import LandingSection from "./LandingSection";
import WorkSection from "./WorkSection";

const SectionsFullpage = () => {
  const anchors = ["Home", "About", "Work"];

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      menu="#myMenu"
      slidesNavigation
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <LandingSection />
            <AboutSection />
            <WorkSection />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default SectionsFullpage;
