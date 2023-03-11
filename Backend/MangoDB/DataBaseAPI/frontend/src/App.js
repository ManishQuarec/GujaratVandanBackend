import logo from "./logo.svg";
import React, { useEffect, useCallback } from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import BreakingNews from "./Component/BreakingNews/BreakingNews";
import LeftMenuBar from "./Component/LeftMenuBar/LeftMenuBar";
import AppStore from "./Component/AppStore/AppStore";
import VideoSlider from "./Component/VideoSlider/VideoSlider";
import ImageData from "./Component/ImageData/ImageData";
import NewsBlock from "./Component/NewsBlock/NewsBlock";
import SearchNews from "./Component/SearchNews/SearchNews";
import SocialMediaLeft from "./Component/SocialMediaLeft/SocialMediaLeft";
import RightPhotoImage from "./Component/RightPhotoImage/RightPhotoImage";
import Comimg from "./Component/RightPhotoImage/Comimg";
import ShortNews from "./Component/ShortNews/ShortNews";
import HomePage from "./Pages/HomePage/HomePage";
import Search from "./Component/SearchNews/Search";
import EPapers from "./Component/E-Papers/Papers.jsx";
import { FullNews } from "./Component/FullNews/FullNews";
import FullNewsPost from "./Component/FullNews/FullNewsPost";
import Comming from "./Component/ComingSoon/Coming";
import Bottom from "./Component/BottomNAV/Bottom";
import News from "./Component/news/News";

import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";

function App() {
  let { userId, cat } = useParams();
  console.log(process.env.REACT_APP_API_BASE_URL);
  const Layout = ({ children }) => {
    return (
      <>
        <Nav />
        <div className="viewed">
        <div className="datars">
          
          <LeftMenuBar />
          </div>
        </div>

        <div className="HomePage">
          <div className="boundry">
            <div className="LeftSection">
              <LeftMenuBar />
            </div>
            <div className="MiddleSection">{children}</div>
            <div className="RightSection">
              {/* <RightPhotoImage /> */}
              <Comimg />
            </div>
          </div>
        </div>
        <Bottom />
      </>
    );
  };

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/Coming" element={<Comming />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/VideoSlider" element={<VideoSlider />} />
            <Route path="/Search" element={<SearchNews />} />
            <Route path="/EPapers" element={<EPapers />} />
            <Route path="/fullnews/:userId" element={<FullNews />} />
            <Route path="/news" element={<News />} />
            <Route
              path="category/:cat"
              element={<NewsBlock value={{ unique: false }} />}
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

// export default App;

export default React.memo(App);
