import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactContent.css";

const ContactContent = () => {
  return (
    <div>
      <div className="faicon">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>

      <div className="footerlist">
        <div>FAQ</div>
        <div>Confidentials</div>
        <div>Corprate Information</div>
        <div>Help Center</div>
      </div>

      <div className="secondfooterlist">
        <div>Account</div>
        <div>Terms of Use</div>
        <div>Privacy</div>
      </div>

      <div className="thirdfooterlist">
        <div>Report</div>
        <div>Media Center</div>
        <div>Legal Notices</div>
      </div>

      <div className="fourthfooterlist">
        <div>Gift Cards</div>
        <div>Cookie Preferences</div>
      </div>

      <div className="footercopyright">
        <p>&copy;1997-2024 Movies, Inc.</p>
      </div>
    </div>
  );
};

export default ContactContent;
