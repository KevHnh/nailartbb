import React from "react";
import "./FAQ.css";
import blob from "../../assets/webAssets/webBlob.svg"

function FAQ() {
  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">FAQ</div>
        <div className="sub2">
          I get a lot of questions. If you have a question please check to see
          if it is answered here first. If not, I would be happy to answer any
          other questions you may have.
        </div>
        <div className="FAQContainer">
          <div className="FAQEntry">
            <div className="sub1">WHAT KIND OF EXTENSIONS DO YOU DO?</div>
            <div className="sub2">I do gel X and Japanese gel.</div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">WHAT IS JAPANESE GEL?</div>
            <div className="sub2">100% Gel, None of the Other Stuff</div>
            <div className="sub2">
              100% Gel, None of the other stuff.<br></br>Japanese gels are true gels (not gel polish), meaning they aren't diluted with nail polish. This makes them highly pigmented and incredibly durable. Unlike gel polish, which must be soaked off with acetone after each service, Japanese gel can be soaked off or filled in, depending on your preference. Japanese gels are versatile, perfect for both nail art and full applications 
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">HOW LONG WILL THEY LAST?</div>
            <div className="sub2">
              They last 2 to 6 weeks, depending on your lifestyle. Please remember, nails are not tools 
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">WHEN SHOULD I DO MY REFILLS?</div>
            <div className="sub2">
              It is recommended that you return every two to four weeks. 
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">
              SHOULD I TAKE A BREAK FROM MY GEL POLISH SO MY NAILS CAN BREATHE?
            </div>
            <div className="sub2">
            Your nails are made of keratin, the same protein found in your hair, and are essentially dead skin cells. As such, they do not need oxygen to "breathe." Do not peel or rip off your enhancements, as this can cause significant damage to your nails. I highly recommend having your enhancements removed by a professional 
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">
              WHAT'S THE DIFFERENCE BETWEEN GEL POLISH AND SHELLAC?
            </div>
            <div className="sub2">
              Shellac is a type of gel polish, but its simply the brand name of a specific gel polish line. Think of it like Coke vs. Pepsi -both are similar, just different brands. Currently, I do not offer Shellac products, but I do use a variety of high-quality gel polish brands
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">HOW LONG DOES THE APPOINTMENT TAKE?</div>
            <div className="sub2">
              The time required for your appointment depends on the shape, length, and design of your nails. I typically book two and a half hours for a full set, depending on the complexity of the art. For a gel fill with nail art, the appointment generally lasts around 2 hours, depending on the intricacy of the design. Fills take less time since theres already product on the nails from your previous appointment. <br></br> Good nails take time and attention to detail, and I take pride in the work I create. Please be sure to allow enough time in your schedule for your appointment 
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">WHY DO GEL NAILS TAKE SO LONG?</div>
            <div className="sub2">
              I want you to be completely satisfied with your nails, so I take extra care and pay close attention to every detail to ensure you leave happy. I provide a Russian-style manicure to the eponychium, and depending on the design, the process may take some time 
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">
              WHY DOES THE GEL FEEL HOT WHILE IT'S CURING?
            </div>
            <div className="sub2">
              The heat you may feel while the gel is curing under the LED light occurs because the gel is changing state from a liquid to a solid. As the molecules react and harden, they release heat. If you experience a heat spike, it typically lasts only 1-3 seconds. I always advise my clients to remove their hand from the light as soon as it feels even slightly warm. There's no need to tough it out—we can simply cure it again, and it won't heat up a second time. The heat only occurs during the initial hardening process 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
