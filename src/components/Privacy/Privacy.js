import React from "react";
import "./Privacy.css";
import blob from "../../assets/webAssets/webBlob.svg";

export default function Privacy() {
  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">Privacy Policy</div>
        <div className="sub2">
          At Éclat Nail Art, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard the personal
          information you provide when using our website to make appointments.
        </div>
        <div className="FAQContainer">
          <div className="FAQEntry">
            <div className="sub1">Information We Collect:</div>
            <div className="sub2">
              When you use our website to schedule appointments, we may collect
              the following personal information:
            </div>
            <div className="sub2">- Name</div>
            <div className="sub2">- Email address</div>
            <div className="sub2">- Phone number</div>
            <div className="sub2">
              - Appointment preferences (date, time, services)
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">How We Use Your Information:</div>
            <div className="sub2">
              We use the personal information collected solely for the purpose
              of scheduling and managing appointments at our nail salon. This
              includes:
            </div>
            <div className="sub2">- Confirming your appointments</div>
            <div className="sub2">- Sending appointment reminders</div>
            <div className="sub2">
              - Notifying you of any changes or updates to your appointments
            </div>
            <div className="sub2">
              - Contacting you regarding any issues or concerns related to your
              appointments
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">Information Sharing:</div>
            <div className="sub2">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties. Your information is strictly used
              for appointment scheduling purposes within our salon.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">Data Security:</div>
            <div className="sub2">
              We are committed to ensuring the security of your personal
              information. We implement a variety of security measures to
              maintain the safety of your personal information when you submit
              an appointment request.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">Third-Party Links:</div>
            <div className="sub2">
              Our website may contain links to third-party websites. These
              websites have their own privacy policies, and we are not
              responsible for the privacy practices or content of such websites.
              We encourage you to review the privacy policies of any third-party
              websites you visit.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">Consent:</div>
            <div className="sub2">
              By using our website to schedule appointments, you consent to the
              collection and use of your personal information as outlined in
              this Privacy Policy.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">Changes to This Privacy Policy:</div>
            <div className="sub2">
              We reserve the right to update or change this Privacy Policy at
              any time. Any changes will be posted on this page, and the revised
              Privacy Policy will indicate the date it was last updated.
            </div>
          </div>
          <div className="FAQEntry">
            <div className="sub1">Contact Us:</div>
            <div className="sub2">
              If you have any questions or concerns about this Privacy Policy or
              our practices regarding your personal information, please contact
              us at{" "}
              <a
                className="sub2"
                href="mailto:bb.love.nails92@gmail.com"
                target="_blank"
              >
                bb.love.nails92@gmail.com
              </a>
              .
            </div>
            <div className="sub2">
              By using our website to schedule appointments, you acknowledge
              that you have read and understood this Privacy Policy and agree to
              its terms and conditions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
