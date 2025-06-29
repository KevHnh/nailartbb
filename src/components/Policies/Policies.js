import React from "react";
import "./Policies.css";
import blob from "../../assets/webAssets/webBlob.svg"

function Policies() {
  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">Policies</div>
        <div className="sub2">
          Thank you for choosing me as your nail technician! Here are my
          policies that will help your appointment run smoothly.
        </div>
        <div className="PoliciesContainer">
          <div className="PoliciesEntry">
            <div className="sub1">MANDATORY DEPOSIT POLICY</div>
            <div className="sub2">
            A $40 Zelle deposit is required to secure your appointment. I will email you details regarding the deposit after the appointment is made 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">LATENESS POLICY</div>
            <div className="sub2">
              Appointments are scheduled back-to-back and follow a time-sensitive structure. Late arrivals of 10 minutes or more may result in a rescheduling or a modification of your service 
            </div>
            <div className="sub2">
              If this is your first visit, please take time to familiarize yourself with the area and plan your route in advance. While I understand that delays can happen, it is at my discretion whether the service can still be completed if you arrive more than 10 minutes late 
            </div>
            <div className="sub2">
              Please note: I cannot guarantee your service if you arrive late. If you arrive more than 10 minutes late, you will have the option of forfeiting your appointment or getting a one color manicure 
            <br></br><br></br>
              If you anticipate being late, please notify me as early as possible by emailing: 
              <a
                className="sub2"
                href="mailto:bb.love.nails92@gmail.com"
                target="_blank"
              >
                bb.love.nails92@gmail.com
              </a>
              or by messaging me on Instagram
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">REFUND POLICY</div>
            <div className="sub2">
              I have a no refund policy on services completed in the salon. However, your satisfaction is very important to me! If you're unhappy with your service for any reason, please let me know right away—I'm more than happy to make it right 
              <br></br><br></br>
              Complimentary fixes are offered within 48 hours of your appointment 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">HOW TO BOOK AN APPOINTMENT</div>
            <div className="sub2">
              You can contact me via Instagram at {" "}
              <a
                className="sub2"
                href="https://www.instagram.com/eclatnailart_/"
                target="_blank"
              >
                @eclatnailart_
              </a>{" "}
              or through the website linked in my bio. Before reaching out, please review the Price List and Policy highlights. If you still have questions, feel free to send me a DM with your first name, last name, and your inquiry 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">DISCLAIMER</div>
            <div className="sub2">
              I reserve the right to refuse service for any reason, including but not limited to frequent cancellations, no-shows, or failure to comply with the policies I have established for my business. Your understanding and cooperation are sincerely appreciated 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">SALON ENTRY POLICY</div>
            <div className="sub2">
              My studio is located at 117 9th St, Suite 239, Brooklyn, NY 11215. You'll receive a unique entry code by email on the day of your appointment. 
            </div>
            <div className="sub2">
              I aim to make your visit as comfortable as possible. Whether you feel like chatting or prefer a quiet "silent appointment", I'm happy to match your vibe. 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">CHILDREN POLICY</div>
            <div className="sub2">
              For the safety of your child and the comfort of all clients, please make childcare arrangements ahead of time. Children are not permitted in the studio during appointments 
            </div>
            <div className="sub2">
              The studio contains chemicals, delicate tools, and small objects that are not safe for children. If you arrive with a child, your appointment will be canceled immediately, your deposit will be forfeited, and it will be considered a no-show 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">THIRD PARTY WORK</div>
            <div className="sub2">
              To ensure the best quality and long-lasting results, please note that I do not remove acrylic or dip powder. These must be fully removed prior to your appointment 
            </div>
          </div>
          <div className="PoliciesEntry">
            <div className="sub1">THANK YOU!</div>
              <div className="sub2">
              Thank you for your understanding and respect for these policies. I truly appreciate your cooperation and look forward to providing you with a great experience at my studio!
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;
