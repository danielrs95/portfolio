import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import LandingSection from "./LandingSection";

const SectionsFullpage = () => {
  const anchors = ["Home", "About", "Work"];

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      menu="#myMenu"
      slidesNavigation
      // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <LandingSection />
            <div className="section">
              <h3>Section 2</h3>
            </div>
            <div className="section">
              <h3>Section 3</h3>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default SectionsFullpage;
