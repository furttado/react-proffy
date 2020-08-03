import React from "react";

import logoImg from "../../assets/images/logo.svg";
import ladingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Your online study platform</h2>
        </div>

        <img
          src={ladingImg}
          alt="Online study platform"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="" className="learn">
            <img src={studyIcon} alt="learn" />
            Learn
          </a>

          <a href="" className="teach">
            <img src={giveClassesIcon} alt="teach" />
            Teach
          </a>
        </div>

        <span className="total-connections">
          Total of connections
          <img src={purpleHeartIcon} alt="purple heart" />
        </span>
      </div>
    </div>
  );
}
