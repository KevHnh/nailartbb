import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import FAQData from "../../data/FAQ.json";
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
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
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
