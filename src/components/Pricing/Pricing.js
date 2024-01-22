import React from "react";
import "./Pricing.css";
import basic1 from "../../assets/PricingImgs/basic (1).jpeg";
import basic2 from "../../assets/PricingImgs/basic (2).jpeg";
import basic3 from "../../assets/PricingImgs/basic (3).jpeg";
import intermediate1 from "../../assets/PricingImgs/intermediate (1).jpeg";
import intermediate2 from "../../assets/PricingImgs/intermediate (2).jpeg";
import intermediate3 from "../../assets/PricingImgs/intermediate (3).jpeg";
import advanced1 from "../../assets/PricingImgs/advanced (1).jpeg";
import advanced2 from "../../assets/PricingImgs/advanced (2).jpeg";
import advanced3 from "../../assets/PricingImgs/advanced (3).jpeg";
import intricate1 from "../../assets/PricingImgs/intricate (1).jpeg";
import intricate2 from "../../assets/PricingImgs/intricate (2).jpeg";
import intricate3 from "../../assets/PricingImgs/intricate (3).jpeg";
import extravagant1 from "../../assets/PricingImgs/extravagant (1).jpeg";
import extravagant2 from "../../assets/PricingImgs/extravagant (2).jpeg";
import extravagant3 from "../../assets/PricingImgs/extravagant (3).jpeg";

function Pricing() {
  return (
    <div className="GlobalContainer">
      <div id="Pricing" className="GlobalWrapper">
        <div className="header">Gel Manicures</div>
        <div className="sub2">
          The gel manicures are performed on your natural nail with a waterless
          manicure. It includes nail shaping and Russian Cuticle Care. If your
          preference is to just push back the cuticle, please let me know.
          Products used are from{" "}
          <a
            href="https://kokoistusa.com/pages/what-is-japanese-gel"
            target="_blank"
            className="sub2"
          >
            Kokoist
          </a>
          , a japanese brand that is vegan and 9-free non toxic. Extensions are
          an add on option for $20.
        </div>
        <div className="PricingTableContainer">
          <div className="PricingTableHeaderMobile">
            <div className="sub1">TIER | STARTING PRICE | DESCRIPTION</div>
          </div>
          <div className="PricingTableHeader">
            <div className="sub1 pName">TIER</div>
            <div className="sub1 pPrice">STARTING PRICE</div>
            <div className="sub1 pDesc">DESCRIPTION</div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Basic Nail Art</div>
            <div className="sub2 pPrice">$80+</div>
            {/* <div className="sub2 pDesc">
              One to two lines per nail, dots, two simple hearts per nail, on
              color chrome, on color cat eye, etc. (please note, I don't do
              simple french only)
            </div> */}
            <div className="pDesc">
              <img className="pNailImg" src={basic1} alt="pNailImg"></img>
              <img className="pNailImg" src={basic2} alt="pNailImg"></img>
              <img className="pNailImg" src={basic3} alt="pNailImg"></img>
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Intermediate Nail Art</div>
            <div className="sub2 pPrice">$100+</div>
            <div className="sub2 pDesc">
              <img
                className="pNailImg"
                src={intermediate1}
                alt="pNailImg"
              ></img>
              <img
                className="pNailImg"
                src={intermediate2}
                alt="pNailImg"
              ></img>
              <img
                className="pNailImg"
                src={intermediate3}
                alt="pNailImg"
              ></img>
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Advanced Nail Art</div>
            <div className="sub2 pPrice">$120+</div>
            <div className="sub2 pDesc">
              <img className="pNailImg" src={advanced1} alt="pNailImg"></img>
              <img className="pNailImg" src={advanced2} alt="pNailImg"></img>
              <img className="pNailImg" src={advanced3} alt="pNailImg"></img>
            </div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Intricate Nail Art</div>
            <div className="sub2 pPrice">$140+</div>
            <div className="sub2 pDesc">
              <img className="pNailImg" src={intricate1} alt="pNailImg"></img>
              <img className="pNailImg" src={intricate2} alt="pNailImg"></img>
              <img className="pNailImg" src={intricate3} alt="pNailImg"></img>
            </div>
          </div>

          <div className="PricingTableEntry">
            <div className="sub2 pName">Extravagant Nail Art</div>
            <div className="sub2 pPrice">$160+</div>
            <div className="sub2 pDesc">
              <img className="pNailImg" src={extravagant1} alt="pNailImg"></img>
              <img className="pNailImg" src={extravagant2} alt="pNailImg"></img>
              <img className="pNailImg" src={extravagant3} alt="pNailImg"></img>
            </div>
          </div>
        </div>
        <div className="sub2">
          If you are unsure as to what kind of tier your design is, please email{" "}
          <a
            className="sub2"
            href="mailto:bb.love.nails92@gmail.com"
            target="_blank"
          >
            bb.love.nails92@gmail.com
          </a>{" "}
          and I will gladly help.
        </div>
        <div className="header">Pedicures</div>
        <div className="PricingTableContainer">
          <div className="PricingTableHeaderMobile">
            <div className="sub1">SERVICE | STARTING PRICE | DESCRIPTION</div>
          </div>
          <div className="PricingTableHeader">
            <div className="sub1 pName">SERVICE</div>
            <div className="sub1 pPrice">STARTING PRICE</div>
            <div className="sub1 pDesc">DESCRIPTION</div>
          </div>
          <div className="PricingTableEntry">
            <div className="sub2 pName">Express Pedicures w/ Dazzle Dry</div>
            <div className="sub2 pPrice">$45</div>
            <div className="sub2 pDesc">
              My signature pedicure is waterless to avoid fungus. It includes
              cleansing with an anti-bacterial spray, nail care, foot filing,
              and a gentle foot massage with moisturizing lotion. The final
              touch is Dazzle Dry, a non-toxic and cruelty-free nail polish that
              dries quickly.
            </div>
          </div>
        </div>
        <div className="header">Extras</div>
        <div className="PricingTableContainer">
          <div className="PricingTableHeaderMobile">
            <div className="sub1">EXTRA | STARTING PRICE | DESCRIPTION</div>
          </div>
          <div className="PricingTableHeader">
            <div className="sub1 pName">EXTRA</div>
            <div className="sub1 pPrice">STARTING PRICE</div>
            <div className="sub1 pDesc">DESCRIPTION</div>
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
              There will be an additional charge for any broken nails.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
