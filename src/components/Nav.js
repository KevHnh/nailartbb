import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <div className="NavContainer">
      <div className="NavWrapper">
        <div className="NavSection">
          <div className="NavItem logo">BB</div>
        </div>
        <div className="NavSection">
          <div className="NavItem">Gallery</div>
          <div className="NavItem">Pricing</div>
          <div className="NavItem">FAQ</div>
          <div className="NavItem">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="NavItem">
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
