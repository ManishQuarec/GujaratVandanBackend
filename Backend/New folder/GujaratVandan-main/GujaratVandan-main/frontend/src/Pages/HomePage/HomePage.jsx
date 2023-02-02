import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Nav from "../../Component/Nav/Nav";
import BreakingNews from "../../Component/BreakingNews/BreakingNews";
import LeftMenuBar from "../../Component/LeftMenuBar/LeftMenuBar";
import AppStore from "../../Component/AppStore/AppStore";
import VideoSlider from "../../Component/VideoSlider/VideoSlider";
import NewsBlock from "../../Component/NewsBlock/NewsBlock";
import ImageData from "../../Component/ImageData/ImageData";
import ShortNews from "../../Component/ShortNews/ShortNews";
import RightPhotoImage from "../../Component/RightPhotoImage/RightPhotoImage";
import SocialMediaLeft from "../../Component/SocialMediaLeft/SocialMediaLeft";
import axios from "axios";



function HomePage() {

  console.log(process.env.REACT_APP_YOURVARIABLE);
  console.warn(process.env.REACT_APP_API_BASE_URL+"/allnews");

  // axios.get("http://localhost:5000/call/allNews/allBreakingNews").then(async (response) => {
  //   console.log(response);
    // await setNewsData(response.data.response);
    // console.log(response.data.response);
  // });
  return (
    <div className="HomePage">
      <Nav />
      <BreakingNews />
      <div className="boundry">
        <div className="LeftSection">
          <LeftMenuBar />
          <AppStore />
        </div>
        <div className="MiddleSection">
      <VideoSlider/>
        <ImageData  value={{GujCategory:"રાજકારણ", EngCategory: "politics"}}/>
        {/* <ImageData  value={{GujCategory:"વ્યાપાર", EngCategory: "Business"}}/> */}
          <NewsBlock  />
        </div>
        <div className="RightSection">
        <SocialMediaLeft/>
        <RightPhotoImage/>
        <ShortNews/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
