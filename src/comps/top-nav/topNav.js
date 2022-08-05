import React from "react";
import RefreshButton from "../refresh-button/refreshButton";
import { ReactComponent as GitHubIcon} from "../../assets/github.svg";

import "./topNav.css";

const TopNav = (props) => {
  return (
    <div className="topnav-wrapper">
      <RefreshButton
        setGetData={props.setGetData}
        getData={props.getData}
      ></RefreshButton>
      <div className="title-holder">
        <h1 className="title">MBTA Departure Board</h1>
      </div>
      <div className="logo-holder">
        <a href="https://github.com/Austinb12" alt="Click to view the source code.">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default TopNav;
