import React, { useEffect, useState } from "react";
import "./BreakingNew.css";
// import Marquee from "react-fast-marquee";
import axios from "axios";


import Marquee from "react-fast-marquee";



function BreakingNews() {
  const [newsData, setNewsData] = useState([]);



  useEffect(() => {
    console.count("breaking news");

    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/allBreakingNews")
      .then(async (response) => {
        // console.log(response.data.response);
        await setNewsData(response.data.response);
        // console.log(response.data.response);
      });
  }, []);
  return (
    <div className="breakingnews-line">
      <div className="breaking-news">BREAKING NEWS</div>
      <div className="news">

        <Marquee pauseOnHover={true} text="swetha" style={{ width: "100%" }} speed={60} >



          {newsData.map((news, index) => (
            <>
              {" "}
              &nbsp; &nbsp; <b key={index}>{news.Title}:&nbsp;</b>
              {news.News}
            </>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
