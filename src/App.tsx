import React from "react";
import FixedHeader from "./components/FixedHeader";
import AppPages from "./pages/AppPages";

function App() {
  // const anchors = ["firstPage", "secondPage", "thirdPage"];
  return (
    <>
      <FixedHeader />
      <AppPages />
    </>
  );
}

export default App;
