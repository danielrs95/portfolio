import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import AboutSection from "./AboutPage";
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";

const AppPages = () => {
  const anchors = ["Home", "About", "Work"];

  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      menu="#myMenu"
      slidesNavigation
      // autoScrolling={false}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <HomePage />
            <AboutSection />
            <WorkPage />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  // return (
  //   <>
  //     <HomePage />
  //     <AboutSection />
  //     <WorkPage />
  //   </>
  // );
};

export default AppPages;
