import React, { useState } from "react";
import TopNav from "./comps/top-nav/topNav";
import MainButtons from "./comps/main-buttons/mainButtons";
import Board from "./comps/board/board";

const AppWrapper = () => {
  const [getData, setGetData] = useState(false);

  return (
    <div className="app-wrapper">
      <TopNav setGetData={setGetData} getData={getData}></TopNav>
      <Board line={"Red"} getData={getData}></Board>
      <MainButtons></MainButtons>
    </div>
  );
};

export default AppWrapper;
