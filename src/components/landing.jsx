import React from "react";
import bunny from "../assets/images/bunny.png";
import logo from "../assets/images/logo.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingAll">
      <div className="landingImage">
        <img src={bunny} alt="bunny" id="bunny-pic"/>
      </div>

      <div className="landingContent">
        <div className="landingHeader">
          <img src={logo} alt="quizico logo" id="logo" />
        </div>

        <div className="landingText">
          <h2>Train your brain with our trivia game!</h2>
        </div>

        <div className="button">
          <Link to="/categories">
            <button id="play-now-btn">PLAY NOW</button>
          </Link>
        </div>
    </div>
    </div>
  );
};

export default Landing;
