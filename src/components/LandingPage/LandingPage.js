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
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

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
            <div className="title">ÉCLAT NAIL ART</div>
            <div className="sub1">Gel X and Japanese Gel</div>
            <div className="btn">
              Book an Appointment
              <FontAwesomeIcon className="btnArrow" icon={faArrowRight} />
            </div>
          </div>
          <div className="LPInner">
            <Marquee>
              <img className="nailImg" src={img1}></img>
              <img className="nailImg" src={img2}></img>
              <img className="nailImg" src={img3}></img>
              <img className="nailImg" src={img4}></img>
              <img className="nailImg" src={img5}></img>
              <img className="nailImg" src={img6}></img>
              <img className="nailImg" src={img7}></img>
              <img className="nailImg" src={img8}></img>
              <img className="nailImg" src={img9}></img>
              <img className="nailImg" src={img10}></img>
              <img className="nailImg" src={img11}></img>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
