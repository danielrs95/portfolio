import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

function App() {
  const anchors = ["firstPage", "secondPage", "thirdPage"];
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h3>Section 1</h3>
            </div>
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
}

export default App;
