import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import AboutSection from "./AboutPage";
import HomePage from "./HomePage";
import WorkSection from "../components/WorkSection";

const AppPages = () => {
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
            <HomePage />
            <AboutSection />
            <WorkSection />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default AppPages;
