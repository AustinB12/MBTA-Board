import React from "react";
import { ReactComponent as Refresh } from "../../assets/Refresh-Button.svg";

import "./refresh-button.css";

const RefreshButton = () => {
  return (
    <div className="refresh-button-wrapper">
      <Refresh></Refresh>
    </div>
  );
};

export default RefreshButton;
