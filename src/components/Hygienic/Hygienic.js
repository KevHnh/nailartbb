import React from "react";
import "./Hygienic.css";
import blob from "../../assets/webAssets/webBlob.svg";

function Hygienic() {
  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">Hygienic Services</div>
        <div className="PoliciesContainer">
          <div className="PoliciesEntry">
            <div className="sub2">
              It is important for me, as a responsible beauty professional, to
              take pride in keeping a clean sanitized work environment by using
              hospital-grade disinfectant Barbicide products for proper
              sanitization of all implements and surfaces after each and every
              client.
            </div>
            <div className="sub2">
              All Metal Instruments used (nail clippers, cuticle pushers,
              cuticle bits, etc) are guaranteed to be thoroughly cleaned and
              disinfected after each service by hospital grade disinfectants,
              which contain AHP (Accelerate Hydrogen Peroxide), to eliminate
              bacteria, germs, and viruses such as Hepatitis B.
            </div>
            <div className="sub2">
              All Non-Metal Tools : Every nail service includes your own
              individual nail file which is used at your appointment. It will be
              disposed of after each service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hygienic;
