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
        <FontAwesomeIcon icon={faFacebook} className="icon1" />
        <FontAwesomeIcon icon={faInstagram} className="icon2" />
        <FontAwesomeIcon icon={faTwitter} className="icon3" />
        <FontAwesomeIcon icon={faYoutube} className="icon4" />
      </div>

      <div className="footerlist">
        <ul style={{ listStyle: "none" }} className="ul1">
          <li>FAQ</li>
          <li>Confidentials</li>
          <li>Corprate Information</li>
          <li>Help Center</li>
        </ul>
      </div>

      <div className="secondfooterlist">
        <ul style={{ listStyle: "none" }} className="ul2">
          <li>Account</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className="thirdfooterlist">
        <ul style={{ listStyle: "none" }} className="ul3">
          <li>Report</li>
          <li>Media Center</li>
          <li>Legal Notices</li>
        </ul>
      </div>

      <div className="fourthfooterlist">
        <ul ul style={{ listStyle: "none" }} className="ul4">
          <li>Gift Cards</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>

      <div className="footercopyright">
        <p>&copy;1997-2024 Movies, Inc.</p>
      </div>
    </div>
  );
};

export default ContactContent;
