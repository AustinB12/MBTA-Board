import React from "react";
import { ReactComponent as BL } from "../../assets/BlueLine.svg";
import { ReactComponent as GL } from "../../assets/GreenLine.svg";
import { ReactComponent as OL } from "../../assets/OrangeLine.svg";
import { ReactComponent as RL } from "../../assets/RedLine.svg";

import "./mainButtons.css";

const MainButtons = () => {
  return (
    <div className="main-buttons-wrapper">
      <div className="line-button-wrapper">
        <RL></RL>
      </div>
      <div className="line-button-wrapper">
        <BL></BL>
      </div>
      <div className="line-button-wrapper">
        <GL></GL>
      </div>
      <div className="line-button-wrapper">
        <OL></OL>
      </div>
    </div>
  );
};

export default MainButtons;
