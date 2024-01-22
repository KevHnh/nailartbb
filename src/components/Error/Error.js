import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
import blob from "../../assets/webAssets/webBlob.svg"

function Error() {
  const navigate = useNavigate();

  function redirect(path) {
    navigate(path);
    window.scroll(0, 0);
  }

  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">Oops! Looks like you got lost</div>
        <div className="sub2">Let's get you back on track.</div>
        <div className="ErrorContainer">
          <div className="ErrorEntry">
            <div className="sub1">Here are some helpful links</div>
            <a className="sub2" onClick={() => redirect("/")}>
              Home
            </a>
            <a className="sub2" onClick={() => redirect("Gallery")}>
              Gallery
            </a>
            <a className="sub2" onClick={() => redirect("Pricing")}>
              Pricing
            </a>
            <a className="sub2" onClick={() => redirect("FAQ")}>
              FAQ
            </a>
            <a className="sub2" onClick={() => redirect("Policies")}>
              Policies
            </a>
            <a
              className="sub2"
              href="https://www.instagram.com/bb.love.nails92/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="sub2"
              href="https://www.tiktok.com/@bb.love.nails92"
              target="_blank"
            >
              Tiktok
            </a>
            <a
              className="sub2"
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

export default Error;
