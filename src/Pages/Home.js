import React from "react";
import LeftPanelHomeScreen from "../Components/Home/LeftPanelHomeScreen";
import RightPaneHomeScreen from "./../Components/Home/RightPanelHomeScreen";

function Home() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <LeftPanelHomeScreen />
      </div>
      <div>
        <RightPaneHomeScreen />
      </div>
    </div>
  );
}

export default Home;
