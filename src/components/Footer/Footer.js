import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/webAssets/new_logo.svg"

function Footer() {
  const navigate = useNavigate();

  function redirect(path) {
    navigate(path);
    window.scroll(0, 0);
  }

  return (
    <div className="FooterContainer">
      <div className="FooterWrapper">
        <div className="FooterLeft">
          <div className="FooterCol">
          <img className="footerLogo" src={logo} alt="logo" onClick={() => redirect("/")}></img>
            {/* <a className="footerLogo" onClick={() => redirect("/")}>
              ÉCLAT NAIL ART
            </a> */}
            <a
              className="footerSub"
              href="https://www.google.com/maps/place/Gowanus+Creative+Studios/@40.6727986,-73.9959817,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b630f1104c3:0xc89630c60092af3f!8m2!3d40.6727946!4d-73.9934068!16s%2Fg%2F11gxxnr8nz?entry=ttu"
              target="_blank"
            >
              117 9th St, Suite 239, Brooklyn, NY 11215
            </a>
            <a className="footerCopyright">
              ©2024 ÉCLAT NAIL ART. All Rights Reserved.
            </a>
          </div>
        </div>
        <div className="FooterRight">
          <div className="FooterCol">
            <a className="footerHeader">Appointments</a>
            <a className="footerSub">Book Now</a>
            <a className="footerSub" onClick={() => redirect("Policies")}>
              My Policies
            </a>
            <a className="footerSub" onClick={() => redirect("Hygienic")}>
              Hygienic Policies
            </a>
          </div>
          <div className="FooterCol">
            <a className="footerHeader">Resources</a>
            <a className="footerSub" onClick={() => redirect("Pricing")}>
              Pricing
            </a>
            <a className="footerSub" onClick={() => redirect("FAQ")}>
              FAQ
            </a>
            <a className="footerSub" onClick={() => redirect("Privacy")}>
              Privacy Policy
            </a>
          </div>
          <div className="FooterCol">
            <a className="footerHeader">Contact</a>
            <a
              className="footerSub"
              href="https://www.instagram.com/eclatnailart_/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="footerSub"
              href="https://www.tiktok.com/@eclatnailart_"
              target="_blank"
            >
              TikTok
            </a>
            <a
              className="footerSub"
              href="mailto:bb.love.nails92@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
