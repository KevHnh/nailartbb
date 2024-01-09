import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import Nav from "./Nav";

function LandingPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(screenWidth);
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
      <Nav />
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
              <Marquee direction={screenWidth <= 1000 ? "right" : "up"}>
                <img
                  className="marqueeImg"
                  src={
                    "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                  }
                />
                <img
                  className="marqueeImg"
                  src={
                    "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                  }
                />
                <img
                  className="marqueeImg"
                  src={
                    "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                  }
                />
                <img
                  className="marqueeImg"
                  src={
                    "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                  }
                />
              </Marquee>
            </div>
            {screenWidth >= 1000 ? (
              <div className="MarqueeContainer">
                <Marquee direction="down">
                  <img
                    className="marqueeImg"
                    src={
                      "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                    }
                  />
                  <img
                    className="marqueeImg"
                    src={
                      "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                    }
                  />
                  <img
                    className="marqueeImg"
                    src={
                      "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                    }
                  />
                  <img
                    className="marqueeImg"
                    src={
                      "https://www.roadsideamerica.com/attract/images/ny/NYONE911mem_erwin1.jpg"
                    }
                  />
                </Marquee>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="LPSection LPSectionBorder">
          <div className="header">Pricing</div>
          <table>
            <tr>
              <th>Package</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>#1</td>
              <td>1 Hr</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>#2</td>
              <td>2 Hr</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>#3</td>
              <td>2 Hr</td>
              <td>$200</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
