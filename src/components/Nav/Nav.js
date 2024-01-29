import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function redirect(path) {
    navigate(path);
    setMenu(false);
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

  if (screenWidth <= 1000) {
    return (
      <div className="NavContainer">
        <div className="NavWrapper">
          <div className="NavSection">
            <a className="NavItem logo MobileLogo" onClick={() => redirect("/")}>
              ÉCLAT NAIL ART
            </a>
          </div>
          <div className="NavSection">
            <a className="NavItem MobileButton" onClick={() => setMenu(!menu)}>
              {!menu ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faXmark} />
              )}
            </a>
          </div>
        </div>
        {menu ? (
          <div className="MobileNavContainer">
            <div className="NavWrapper">
              <div className="NavSection">
                {/* <a className="NavItem" onClick={() => redirect("Gallery")}>
                  Gallery
                </a> */}
                <a className="NavItem" onClick={() => redirect("Pricing")}>
                  Pricing
                </a>
                <a className="NavItem" onClick={() => redirect("FAQ")}>
                  FAQ
                </a>
                <a className="NavItem" onClick={() => redirect("Policies")}>
                  Policies
                </a>
                <a className="NavItem" onClick={() => redirect("Hygienic")}>
                  Hygienic
                </a>
                <div className="SMRow">
                  <a
                    className="NavItem SMIcon"
                    href="https://www.instagram.com/bb.love.nails92/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="NavItem SMIcon"
                    href="https://www.tiktok.com/@bb.love.nails92"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }

  return (
    <div className="NavContainer">
      <div className="NavWrapper">
        <div className="NavSection">
          <a className="NavItem logo" onClick={() => redirect("/")}>
            ÉCLAT NAIL ART
          </a>
        </div>
        <div className="NavSection">
          {/* <a className="NavItem" onClick={() => redirect("Gallery")}>
            Gallery
          </a> */}
          <a className="NavItem" onClick={() => redirect("Pricing")}>
            Pricing
          </a>
          <a className="NavItem" onClick={() => redirect("FAQ")}>
            FAQ
          </a>
          <a className="NavItem" onClick={() => redirect("Policies")}>
            Policies
          </a>
          <a className="NavItem" onClick={() => redirect("Hygienic")}>
            Hygienic
          </a>
          <a
            className="NavItem SMIcon"
            href="https://www.instagram.com/bb.love.nails92/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="NavItem SMIcon"
            href="https://www.tiktok.com/@bb.love.nails92"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
