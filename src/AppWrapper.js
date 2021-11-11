import React, { useState } from "react";
import TopNav from "./comps/top-nav/topNav";
import MainButtons from "./comps/main-buttons/mainButtons";
import Board from "./comps/board/board";

const AppWrapper = () => {
  const [getData, setGetData] = useState(false);
  const [line, setLine] = useState("");

  return (
    <div className="app-wrapper">
      <TopNav setGetData={setGetData} getData={getData}></TopNav>
      <Board line={line} getData={getData}></Board>
      <MainButtons line={line} setLine={setLine}></MainButtons>
    </div>
  );
};

export default AppWrapper;
