import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import FAQData from "../data/FAQ.json";

function LandingPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeIndex, setActiveIndex] = useState(null);

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

  function toggleAnswer(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="LandingPageContainer">
      <div className="LandingPageWrapper">
        <div id="Home" className="LPSection">
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
                <Marquee direction="down" pauseOnClick="true">
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
        <div id="Pricing" className="LPSection">
          <div className="LPSectionBorder">
            <div className="header">Pricing</div>
            <table>
              <tbody>
                <tr>
                  <th>Service</th>
                  <th>Time</th>
                  <th>Price</th>
                  <th className="lastRow">Action</th>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>1 Hr</td>
                  <td>$150</td>
                  <td className="lastRow">
                    <div className="tableBtn">Book Now</div>
                  </td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>2 Hr</td>
                  <td>$200</td>
                  <td className="lastRow">
                    <div className="tableBtn">Book Now</div>
                  </td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>2 Hr</td>
                  <td>$200</td>
                  <td className="lastRow">
                    <div className="tableBtn">Book Now</div>
                  </td>
                </tr>
                <tr>
                  <td>#4</td>
                  <td>2 Hr</td>
                  <td>$200</td>
                  <td className="lastRow">
                    <div className="tableBtn">Book Now</div>
                  </td>
                </tr>
                <tr>
                  <td>#5</td>
                  <td>2 Hr</td>
                  <td>$200</td>
                  <td className="lastRow">
                    <div className="tableBtn">Book Now</div>
                  </td>
                </tr>
                <tr>
                  <td>#6</td>
                  <td>2 Hr</td>
                  <td>$200</td>
                  <td className="lastRow">
                    <div className="tableBtn">Book Now</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="FAQ" className="LPSection">
          <div className="LPSectionBorder">
            <div className="header">FAQ</div>
            <div className="FAQTable">
              {FAQData.map((item, index) => (
                <div
                  key={index}
                  className="FAQItem"
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="FAQQuestion">
                    <div className="sub1">{item.Q}</div>
                    <div className="sub1">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div
                    className={`FAQAnswer sub2 ${
                      activeIndex === index ? "displayBlock" : "displayNone"
                    }`}
                  >
                    {item.A}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
