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
            <div className="sub1">Tier | Starting Price | Description</div>
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
              Hand painted designs, minimal 3D art, airbrush designs, minimal
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
              Any art that takes color mixing, linen patterns, paintings
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
        <div className="header">Additional Services</div>
        <div className="PricingTableContainer">
          <div className="PricingTableHeaderMobile">
            <div className="sub1">Service | Starting Price | Description</div>
          </div>
          <div className="PricingTableHeader">
            <div className="sub1 pName">Service</div>
            <div className="sub1 pPrice">Starting Price</div>
            <div className="sub1 pDesc">Description</div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Extensions</div>
            <div className="sub2 pPrice">$20+</div>
            <div className="sub2 pDesc">
              Add on service, please select while booking appointment
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Nail Fix</div>
            <div className="sub2 pPrice">$10</div>
            <div className="sub2 pDesc">
              I offer complimentary fixes within 48 hours of completion,
              anything past the 48 hours will cost $10
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Express Pedicures w/ Dazzle Dry</div>
            <div className="sub2 pPrice">$80+</div>
            <div className="sub2 pDesc">
              The signature pedicure is waterless to avoid fungus. It includes
              cleansing with an anti-bacterial spray, nail care, foot filing,
              and a gentle foot massage with moisturizing lotion. The final
              touch is Dazzle Dry, a non-toxic and cruelty-free nail polish that
              dries quickly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
