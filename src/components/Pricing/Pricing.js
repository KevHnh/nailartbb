import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="GlobalContainer">
      <div id="Pricing" className="GlobalWrapper">
        <div className="header">Gel Manicures</div>
        <div className="sub2">
          The gel manicures are performed on your natural nail with a waterless
          manicure. It includes nail shaping and Russian Cuticle Care. If you're
          preference is to just push back the cuticle, please let me know.
          Products used are from{" "}
          <a
            href="https://kokoistusa.com/pages/what-is-japanese-gel"
            target="_blank"
            className="sub2"
          >
            Kokoist
          </a>
          , a japanese brand that is vegan, and 9-free non toxic. Extensions are
          an add on option for $20.
        </div>
        <div className="PricingTableContainer">
          <div className="PricingTableHeaderMobile">
            <div className="sub1">Tier / Starting Price / Description</div>
          </div>
          <div className="PricingTableHeader">
            <div className="sub1 pName">Tiers</div>
            <div className="sub1 pPrice">Starting Price</div>
            <div className="sub1 pDesc">Description</div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Basic Nail Art</div>
            <div className="sub2 pPrice">$80+</div>
            <div className="sub2 pDesc">
              One to two lines per nail, dots, two simple hearts per nail, on
              color chrome, on color cat eye, etc. (please note, I don't do
              simple french only)
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Intermediate Nail Art</div>
            <div className="sub2 pPrice">$100+</div>
            <div className="sub2 pDesc">
              hand painted designs, minimal 3D art, airbrush designs, minimal
              mixed media, etc
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Advanced Nail Art</div>
            <div className="sub2 pPrice">$120+</div>
            <div className="sub2 pDesc">
              3D fruits, some hand painted designs, multiple charms, etc
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Intricate Nail Art</div>
            <div className="sub2 pPrice">$140+</div>
            <div className="sub2 pDesc">
              Flowers, ink, chrome designs, encapsulations, etc
            </div>
          </div>

          <div className="PricingTableEntry">
            <div className="sub2 pName">Advanced Nail Art</div>
            <div className="sub2 pPrice">$160+</div>
            <div className="sub2 pDesc">
              any art that takes color mixing, linen patterns, paintings
              inspired nails, ultimate encapsulations, ultimate 3D handmade
              charms, etc{" "}
            </div>
          </div>
        </div>
        <div className="sub2">
          If unsure as to what kind of tier your design is, please email{" "}
          <a
            className="sub2"
            href="mailto:bb.love.nails92@gmail.com"
            target="_blank"
          >
            bb.love.nails92@gmail.com
          </a>{" "}
          and I will gladly help.
        </div>
      </div>
    </div>
  );
}

export default Pricing;
