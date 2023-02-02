import React, { useEffect, useState } from "react";
import "./VideoSlider.css";
import axios from "axios";

function VideoSlider() {
  const Background = " http://localhost:5000/Media/2023/1/16/jpg.jpg";
  const [newsData, setNewsData] = useState([]);
  console.log();
  useEffect(() => {
    axios.post(process.env.REACT_APP_API_BASE_URL+"/allNews").then(async (response) => {
      // console.log(response.data.response);
      await setNewsData(response.data.response);
      // console.log(response.data.response);
    });
  }, []);

  return (
    <div className="trending-news">
      <div className="head">
        <h4>ટ્રેન્ડિંગ ન્યૂઝ</h4>
        <p>વધુ વાંચો...</p>
      </div>
      <br />

      <div id="slideshow">
        <div className="slide-wrapper">
          {newsData.map((news, index) => (
            <>
              {console.log(news.Path)}
              <a href="/index.html" key={index}>
                {/* <img
                  style={{ height: "20.938rem", width: "50rem" }}
                  src={"http://localhost:5000" + `/${news.Path}`}
                  // src={"http://localhost:5000/Media/2023/1/13/jpg.jpg"}
                  alt=""
                /> */}

                <div
                key={index}
                  style={{
                    backgroundImage: `url(http://localhost:5000/${news.Path})`,
                    height: "20.938rem",
                    width: "50rem",
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    display: "inline-flex",
                    
                    
                  }}
                >
                <div
                  key={index}
                  className="bottom-left"
                  style={{
                    backgroundColor: "white",
                    width: "50rem",
                    left: "0",
                    bottom: "0",
                    opacity: "70%",
                    display: "inline-flex",
                  }}
                >
                  {news.NewsTittle}
                </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSlider;
