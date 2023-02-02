import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe, faLink, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter,faTelegram, faWhatsapp,faInstagram, faInstagramSquare} from  "@fortawesome/free-brands-svg-icons"

function SocialMediaLeft() {
  return (
    <div className="social">
      <h4 id="news1">
        અમારા ન્યૂઝલેટર
        <br />
        પર સબ્સ્ક્રાઇબ કરો
      </h4>
      <p id="news">
        વર્તમાન રહો આજના ટ્રેન્ડિંગ
        <br />
        સમાચારોના રીકેપ સાથે
      </p>
      <p id="news1">
        ગુજરાત વંદન <span>તરફથી</span>
      </p>
      <input type="test" id="input" placeholder="તમારો ઈમેઈલ દાખલ કરો" />
      <button id="submit" type="submit">
        સબમિટ
      </button>
      <br />
      <button id="social-btn">
        <a href="#">
          <FontAwesomeIcon style={{color:" #0088cc"}} icon={faTelegram}>
            &nbsp;
          </FontAwesomeIcon>
        </a>
        ટેલિગ્રામ પર અમારી સાથે જોડાઓ
      </button>
      <button id="social-btn">
        <a href="#">
          <FontAwesomeIcon style={{color: "#25d366"}} icon={faWhatsapp}>
            &nbsp;
          </FontAwesomeIcon>
        </a>
        વોટ્સેપ પર અમારી સાથે જોડાઓ
      </button>
      <button id="social-btn">
        <a href="#">
          <FontAwesomeIcon style={{color: "#bc2a8d"}} icon={faInstagramSquare}>
            &nbsp;
          </FontAwesomeIcon>
        </a>
        ઇન્સ્ટાગ્રામ પર અમારી સાથે જોડાઓ
      </button>
      <br />
    </div>
  );
}

export default SocialMediaLeft;
