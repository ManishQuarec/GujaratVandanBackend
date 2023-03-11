import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlayCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Bottom() {
  return (
    <>
      <div className="IYMAIN">
        <a className="I86iuu"  href="/" ><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><br />વાંચો</a>
        <a className="I86iuu" href="/Coming"><FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon><br />જુઓ</a>
        <a className="I86iuu" href="/"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><br />શોધો</a>
      </div>
    </>
  );
}

export default Bottom;
