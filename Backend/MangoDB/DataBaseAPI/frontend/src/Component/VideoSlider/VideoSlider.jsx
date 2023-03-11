import React, { useEffect, useState } from "react";
import "./VideoSlider.css";
import axios from "axios";
// import img from "../../Image/HomePageIMage/"

function VideoSlider() {
  const [newsData, setNewsData] = useState([]);
  console.log();
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
        data: "Trending News",
      })
      .then(async (response) => {
        // console.log(response.data.response);
        await setNewsData(response.data.response);
        // console.log(response.data.response);
      });
  }, []);
  document.title = "Gujarat Vandan ";

  console.warn(newsData);

  return (
    <div className="trending-news">
      {/* <div className="head">
        <h4>ટ્રેન્ડિંગ ન્યૂઝ</h4>
        <p>વધુ વાંચો...</p>
      </div> */}
      <br />

      {/* <div id="slideshow">
        <div className="slide-wrapper">
          {newsData.map((news, index) => (
            <>
              {console.log(news.Path)}
              <a href="/index.html" key={index}>


            
                <img
                  className="SliderIMG"
                  src={process.env.REACT_APP_API_URL + `${news.Path}`}

                  alt=""
                />
                <div key={index} className="bottom-left">
                  {news.NewsTittle}
                </div>
              </a>
            </>
          ))}
        </div>
      </div> */}

      {/* New Slider Start */}
      <div className="containerSlider">
        <div className="content">
          <div className="slideshow">
            {/* <button className="slide-btn slide-btn-1"></button>
            <button className="slide-btn slide-btn-2"></button>
            <button className="slide-btn slide-btn-3"></button>
            <button className="slide-btn slide-btn-4"></button> */}
           
            <div className="slideshow-wrapper">
         
              <div className="slide">
              {/* {newsData.map((news, index) => (
            <> */}
                <img
                  className="slide-img"
                  src=""
                  alt=""
                />

                <p className="Textdata">જેની સાથે લગ્ન કર્યા એ 5000 કાર ચોરનારની પત્ની અને સહ આરોપી, નોનવેજ અને બિયર પીવાની છે શોખીન</p>
                {/* </>
          ))} */}
              </div>  
            

              <div className="slide">
                <img
                  className="slide-img"
                  alt=""
                  src=""
                />
                <p className="Textdata"></p>
              </div>
              <div className="slide">
                <img
                  className="slide-img"
                  alt=""
                  src=""
                />
                <p className="Textdata"></p>
              </div>
              <div className="slide">
                <img
                  className="slide-img"
                  alt=""
                  src=""
                />
                <p className="Textdata"></p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      {/* New Slider END */}
    </div>
  );
}

export default React.memo(VideoSlider);
