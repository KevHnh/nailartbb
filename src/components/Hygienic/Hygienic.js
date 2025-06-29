import React from "react";
import "./Hygienic.css";
import blob from "../../assets/webAssets/webBlob.svg";

function Hygienic() {
  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">Sanitary Protocols</div>
        <div className="PoliciesContainer">
          <div className="PoliciesEntry">
            <div className="sub2">
              As a responsible beauty professional, I take great pride in maintaining a clean, sanitized work environment. I use hospital-grade disinfectants such as Barbicide to properly sanitize all implements and surfaces after each client 
            </div>
            <div className="sub2">
              All metal instruments (nail clippers, cuticle pushers, cuticle bits, etc.) are thoroughly cleaned and disinfected using hospital-grade disinfectants containing AHP (Accelerated Hydrogen Peroxide) to eliminate bacteria, germs, and viruses, including Hepatitis B 
            </div>
            <div className="sub2">
              For non-metal tools, each client receives a new, individual nail file that is used exclusively during your appointment and then disposed of after the service 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hygienic;
