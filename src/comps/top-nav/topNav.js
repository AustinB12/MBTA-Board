import React from "react";
import RefreshButton from "../refresh-button/refreshButton";
import InsurifyLogo from "../../assets/Insurify_Logo.png";

import "./topNav.css";

const TopNav = (props) => {
  return (
    <div className="topnav-wrapper">
      <RefreshButton
        setGetData={props.setGetData}
        getData={props.getData}
      ></RefreshButton>
      <div className="title-holder">
        <h1>MBTA Departure Board</h1>
      </div>
      <div className="logo-holder">
        <a href="https://insurify.com/">
          <img src={InsurifyLogo} alt="The Insurify Logo"></img>
        </a>
      </div>
    </div>
  );
};

export default TopNav;
