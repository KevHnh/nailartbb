import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import logo from "../../assets/webAssets/new_logo.svg"
import img1 from "../../assets/LandingImgs/nailart1.jpeg";
import img2 from "../../assets/LandingImgs/nailart2.jpeg";
import img3 from "../../assets/LandingImgs/nailart3.png";
import img4 from "../../assets/LandingImgs/nailart4.jpeg";
import img6 from "../../assets/LandingImgs/nailart6.jpeg";
import img7 from "../../assets/LandingImgs/nailart7.jpeg";
import img8 from "../../assets/LandingImgs/nailart8.jpeg";
import img9 from "../../assets/LandingImgs/nailart9.jpeg";
import img10 from "../../assets/LandingImgs/nailart10.jpeg";
import img11 from "../../assets/LandingImgs/nailart11.jpeg";

import blob from "../../assets/webAssets/webBlob.svg";

function LandingPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  function redirect(path) {
    navigate(path);
    window.scroll(0, 0);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="LandingPageContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="LandingPageWrapper">
        <div className="LPSection">
          <div className="LPInner">
            <img className="newLogo" src={logo} alt="logo"></img>
            <div className="hidden">ÉCLAT NAIL ART</div>
            <div className="sub1">Gel X and Japanese Gel</div>
            <a className="btn" href="https://squareup.com/appointments/book/5d1fhn5lw71nrf/L3P583V5QVNBW/start" rel="nofollow" target="_blank">
              Book an Appointment
              
              <FontAwesomeIcon className="btnArrow" icon={faArrowRight} />
            </a>
          </div>
          <div className="LPInner">
            <Marquee>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img1} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img2} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img3} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img4} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img6} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img7} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img8} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img9} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img10} alt="nailImg"></img>
              </div>
              <div className="marqueeImgContainer">
                <img className="nailImg" src={img11} alt="nailImg"></img>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
