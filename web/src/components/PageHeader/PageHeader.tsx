import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={"/"}>
          <img src={backIcon} alt="go back" />
        </Link>
        <img src={logoImg} alt="Proffy logo" />
      </div>
      <div className="header-content">
        <strong>These are the available proffys</strong>
      </div>
    </header>
  );
};

export default PageHeader;
