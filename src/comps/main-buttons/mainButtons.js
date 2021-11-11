import React from "react";
import { ReactComponent as BL } from "../../assets/BlueLine.svg";
import { ReactComponent as GL } from "../../assets/GreenLine.svg";
import { ReactComponent as OL } from "../../assets/OrangeLine.svg";
import { ReactComponent as RL } from "../../assets/RedLine.svg";

import "./mainButtons.css";

const MainButtons = ({ line, setLine }) => {
  return (
    <div className="main-buttons-wrapper">
      <div className="line-button-wrapper">
        <RL onClick={() => setLine("Red")}></RL>
      </div>
      <div className="line-button-wrapper">
        <BL onClick={() => setLine("Blue")}></BL>
      </div>
      <div className="line-button-wrapper">
        <GL onClick={() => setLine("Green")}></GL>
      </div>
      <div className="line-button-wrapper">
        <OL onClick={() => setLine("Orange")}></OL>
      </div>
    </div>
  );
};

export default MainButtons;
