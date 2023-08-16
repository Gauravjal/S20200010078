import React from "react";
import LeftSideBar from "../components/LeftSideBar/LeftSidebar";
import MainBar from "../components/MainSideBar/MainSideBar";
function Home() {
  return (
    <div className="home-main-container">
      <LeftSideBar />
      <div className="home-sub-container">
        <MainBar />
      </div>
    </div>
  );
}

export default Home;
