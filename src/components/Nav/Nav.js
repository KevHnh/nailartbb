import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  function redirect(path) {
    navigate(path);
  }

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
          <a className="NavItem logo" onClick={() => redirect("/")}>
            BB
          </a>
        </div>
        <div className="NavSection">
          <a className="NavItem">Gallery</a>
          <a className="NavItem" onClick={() => redirect("Pricing")}>
            Pricing
          </a>
          <a className="NavItem" onClick={() => redirect("FAQ")}>
            FAQ
          </a>
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
