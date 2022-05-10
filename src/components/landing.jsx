import React from "react";
import bunny from "../assets/images/bunny.png";
import logo from "../assets/images/logo.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingAll">
      <div className="landingContent">
        <div className="landingHeader logo-order">
          <img src={logo} alt="quizico logo" className="logo" />
        </div>
        <div className="landingText text-order">
          <h2 style={{ paddingBottom: "60px" }}>
            Train your brain with our trivia game!
          </h2>
          <Link to="/categories">
            <Button className="play-now-btn">PLAY NOW</Button>
          </Link>
        </div>
      </div>

      <div className="landingImage">
        <img src={bunny} alt="bunny" />
      </div>
    </div>
  );
};

export default Landing;
