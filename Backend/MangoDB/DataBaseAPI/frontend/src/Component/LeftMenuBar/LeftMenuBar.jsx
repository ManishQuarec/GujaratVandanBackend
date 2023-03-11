import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import "./LeftMenuBar.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import Trending from "./ICO/trending.png";
import City from "./ICO/City.png";
import Gujarat from "./ICO/Gujarat.png";
import Original from "./ICO/Original.png";
import Astrology from "./ICO/Astrology.png";
import Cricket from "./ICO/Cricket.png";
import Entertaiment from "./ICO/Entertaiment.png";
import India from "./ICO/India.png";
import Book from "./ICO/Book.png";
import World from "./ICO/World.png";
import Utilities from "./ICO/Utilities.png";
import Sports from "./ICO/Sports.png";
import Business from "./ICO/Business.png";
import Magazine from "./ICO/Magazine.png";

import { Link } from "react-router-dom";

function LeftMenuBar() {
  const [resData, setResData] = useState([]);
  const [cookies, setCookies] = useCookies("GujCategory");

  let cookiesdata = cookies.GujCategory;
  console.log(cookiesdata);

  // useEffect(() => {

  //   axios.get("http://localhost:5000/call/GetCategory").then((response) => {
  //     setResData(response.data);
  //     console.log(response.data);
  //     setCookies('GujCategory', JSON.stringify(response.data))
  //   });

  //   return () => {};
  // }, []);

  // useEffect(() => {
  //   if (!cookies.GujCategory) {
  //     axios
  //       .get(process.env.REACT_APP_API_BASE_URL + "/GetCategory")
  //       .then((response) => {
  //         setResData(response.data);
  //         console.log(response.data);
  //         setCookies("GujCategory", JSON.stringify(response.data));
  //       });
  //   }
  // }, []);

  console.log(resData);

  return (
    <div className="category-section">

      {/* {(!cookies.GujCategory ? resData : cookiesdata).map((news, index) => {
        return ( */}
      <>
        <a
          style={{ textDecoration: "none", color: "#000" }}

          // href={`/category/${news.Category.EngCategory}`}
          href={"/category/Top news"}
        >
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Trending} alt="" />
              &nbsp;
              <p className="ntres">ટૉપ ન્યૂઝ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/my city"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={City} alt="" />
              &nbsp;
              <p className="ntres">મારું શહેર</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href="/category/My Gujarat">
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Gujarat} alt="" />
              &nbsp;
              <p className="ntres">મારું ગુજરાત</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href="/category/Original">
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Original} alt="" />
              &nbsp;
              <p className="ntres">ઓરિજિનલ</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Cricket"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Cricket} alt="" />
              &nbsp;
              <p className="ntres">ક્રિકેટ</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Entertainment"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Entertaiment} alt="" />
              &nbsp;
              <p className="ntres">એન્ટરટેઇનમેન્ટ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/India"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={India} alt="" />
              &nbsp;
              <p className="ntres">ઈન્ડિયા</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href="category/">

          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Entertaiment} alt="" />
              &nbsp;
              <p className="ntres">એન્ટરટેઇનમેન્ટ</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Dharma-Darshan"}>

          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Book} alt="" />
              &nbsp;
              <p className="ntres">ધર્મ-રાશિ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href="/category/World">
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={World} alt="" />
              &nbsp;
              <p className="ntres">વર્લ્ડ</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href={"/category/utility"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Utilities} alt="" />
              &nbsp;
              <p className="ntres">યુટિલિટી</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Sports"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Sports} alt="" />
              &nbsp;
              <p className="ntres">સ્પોર્ટ્સ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Business"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Business} alt="" />
              &nbsp;
              <p className="ntres">બિઝનેસ</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Horoscope"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Astrology} alt="" />
              &nbsp;
              <p className="ntres">રાશિફળ</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/magazine"}>
          <div className="category">
            <div className="DATA">
              <img className="IOCINC" src={Magazine} alt="" />
              &nbsp;
              <p className="ntres">મેગેઝિન</p>
            </div>
          </div>
        </a>
      </>
      {/* );
      })} */}

    </div>
  );
}

// export default LeftMenuBar;

export default React.memo(LeftMenuBar);
