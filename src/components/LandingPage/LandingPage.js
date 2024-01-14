import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/nailart1.jpeg";
import img2 from "../../assets/nailart2.jpeg";
import img3 from "../../assets/nailart3.png";
import img4 from "../../assets/nailart4.jpeg";
import img5 from "../../assets/nailart5.jpeg";
import img6 from "../../assets/nailart6.jpeg";
import img7 from "../../assets/nailart7.jpeg";
import img8 from "../../assets/nailart8.jpeg";
import img9 from "../../assets/nailart9.jpeg";
import img10 from "../../assets/nailart10.jpeg";
import img11 from "../../assets/nailart11.jpeg";

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
      <div className="LandingPageWrapper">
        <div className="LPSection">
          <div className="LPInner">
            <div className="title">BB Nails</div>
            <div className="btn">
              Book an Appointment
              <FontAwesomeIcon className="btnArrow" icon={faArrowRight} />
            </div>
          </div>
          <div className="LPInner">
            <div className="MarqueeContainer marquee1">
              <Marquee
                direction={screenWidth <= 1000 ? "right" : "up"}
                pauseOnClick="true"
              >
                <img className="marqueeImg" src={img1} />
                <img className="marqueeImg" src={img2} />
                <img className="marqueeImg" src={img3} />
                <img className="marqueeImg" src={img4} />
                <img className="marqueeImg" src={img5} />
              </Marquee>
            </div>
            {screenWidth >= 1000 ? (
              <div className="MarqueeContainer">
                <Marquee direction="down" pauseOnClick="true">
                  <img className="marqueeImg" src={img6} />
                  <img className="marqueeImg" src={img7} />
                  <img className="marqueeImg" src={img8} />
                  <img className="marqueeImg" src={img9} />
                  <img className="marqueeImg" src={img10} />
                  <img className="marqueeImg" src={img11} />
                </Marquee>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="LPSectionBorder">
        <div className="header">Looking for your next set?</div>
        <div className="LPBorderInner">
          <div className="LPInnerItem" onClick={() => redirect("Gallery")}>
            <div className="InnerItem1"></div>
            <div className="header">Browse Sets</div>
          </div>
          <div className="LPInnerItem" onClick={() => redirect("Pricing")}>
            <div className="InnerItem2"></div>
            <div className="header">Services</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
