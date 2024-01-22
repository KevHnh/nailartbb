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
              Japanese gels are true gels (as opposed to gel polish) because
              they are not being diluted by nail polish which makes them
              highly-pigmented and durable. Gel polish must be soaked off with
              acetone after every service, while Japanese gel can be soaked off
              OR filled in depending on your service. Japanese gels are great
              because they have the dual use of being used for nail art and full
              applications.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">HOW LONG WILL THEY LAST?</div>
            <div className="sub2">
              They last 2-6 weeks, depending on your life style. Remember, nails
              are not tools.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">WHEN SHOULD I DO MY REFILLS?</div>
            <div className="sub2">
              Every two weeks is recommended, if you take longer than 2 weeks, a
              $10 fee will be added to cover the cost of product. More space to
              fill, more product to use, and more time it will take.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">
              SHOULD I TAKE A BREAK FROM MY GEL POLISH SO MY NAILS CAN BREATHE?
            </div>
            <div className="sub2">
              Your nails are dead material (keratin) which is the same protein
              as your hair, they are dead skin cells. Therefore they do not need
              oxygen to breathe. Whatever you do, DO NOT peel or rip off your
              enhancements, this is extremely damaging to your nails. I
              recommend getting your enhacements removed by a professional.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">
              WHATS THE DIFFERENCE BETWEEN GEL POLISH AND SHELLAC?
            </div>
            <div className="sub2">
              Shellac IS a gel polish. Shellac is just the brand of a Gel polish
              line. Think of it like Coke vs Pepsi, they are basically the same
              thing but just different brand names. Shellac is just a well known
              BRAND of GEL POLISH. I currently do not offer shellac nail
              products, I have a variety of different Gel Polish brands.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">HOW LONG DOES THE APPOINTMENT TAKE?</div>
            <div className="sub2">
              It depends on shape, length, and nail design. I book two and a
              half hours for a full set of nails depending on the art.
              Generally, a gel fill with nail art is about 2 hours or plus
              depending on the intricacy of the design. Fills take less time because
              there is already product on the nail from your previous
              appointment. Good nails take time and attention to detail, and I
              take pride in the nails that I create. PLEASE ALLOT ENOUGH TIME
              FOR YOUR APPOINTMENT IN YOUR SCHEDULE.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">WHY DO GEL NAILS TAKE SO LONG?</div>
            <div className="sub2">
              I want you to be satisfied with your nails, so I take extra care
              and attention to details so you will leave happy. I provide a russian
              style manicure to the eponychium and depending on the art it will
              take some time.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">
              WHY DOES THE GEL GET HOT WHEN ITS CURING?
            </div>
            <div className="sub2">
              The reason SOME people may feel a heat spike when the gel is under
              the LED light is because that is the moment the gel is changing
              state, from a liquid to a solid. The molecules are changing, and
              as they change, they heat up. If you feel a heat spike, it only
              lasts for 1-3 seconds, after that it is done. I tell all my
              clients to REMOVE your hand from the light as soon as you feel it
              getting even a little warm, You do not need to bear thru it, we
              can just cure it again (it wont heat up again, only the first time as
              it hardens).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
