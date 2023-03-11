import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlay, faApple, faTwitter, faInstagram, faYoutube, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import './AppStore.css'

function AppStore() {
  return (
    <div className="download-app">
    <p>Download App From</p>
    <div className="google-play box">
        <FontAwesomeIcon icon={faGooglePlay} className="play-store"></FontAwesomeIcon>
        <div>
            <h6>GET IT ON</h6>
            <h3>Google Play</h3>
        </div>
    </div>
    <div className="app-store box">
        <FontAwesomeIcon icon={faApple} className="appstore"></FontAwesomeIcon>
        <div>
            <h6>Download on the</h6>
            <h3>App Store</h3>
        </div>
    </div>
    <p className="p-primary">follow us on</p>
    <div className="social-link">
        <ul>
            <li><a href="https://www.facebook.com/vandangujarat?mibextid=LQQJ4d"><FontAwesomeIcon url="https://www.facebook.com/vandangujarat?mibextid=LQQJ4d" icon={faFacebook} ></FontAwesomeIcon></a></li>
            <li><a href="https://twitter.com/GujaratVandan"><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></a></li>
            <li><a href="https://www.instagram.com/gujarat_vandan/reels/?hl=en"><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></a></li>
            <li><a href="https://www.youtube.com/@gujaratvandan"><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></a></li>
        </ul>
    </div>
</div>
  )
}

export default AppStore