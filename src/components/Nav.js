import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Nav() {
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

  if (screenWidth <= 1000) {
    return (
      <div className="NavContainer">
        <div className="NavWrapper">
          <div className="NavSection">
            <a href="#Home" className="NavItem logo">
              BB
            </a>
          </div>
          <div className="NavSection">
            <a className="NavItem">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="NavItem">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="NavContainer">
      <div className="NavWrapper">
        <div className="NavSection">
          <a href="#Home" className="NavItem logo">
            BB
          </a>
        </div>
        <div className="NavSection">
          <a className="NavItem">Gallery</a>
          <a href="#Pricing" className="NavItem">
            Pricing
          </a>
          <a href="#FAQ" className="NavItem">FAQ</a>
          <a className="NavItem">Contact</a>
          <a className="NavItem">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="NavItem">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
