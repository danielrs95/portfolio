import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import AboutSection from "./AboutSection";

const SectionsFullpage = () => {
  const anchors = ["", "about", "work"];

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <AboutSection />
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
