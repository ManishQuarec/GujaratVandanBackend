import logo from "./logo.svg";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import BreakingNews from "./Component/BreakingNews/BreakingNews";
import LeftMenuBar from "./Component/LeftMenuBar/LeftMenuBar";
import AppStore from "./Component/AppStore/AppStore";
import VideoSlider from "./Component/VideoSlider/VideoSlider";
import ImageData from "./Component/ImageData/ImageData";
import NewsBlock from "./Component/NewsBlock/NewsBlock";
import SocialMediaLeft from "./Component/SocialMediaLeft/SocialMediaLeft";
import RightPhotoImage from "./Component/RightPhotoImage/RightPhotoImage";
import ShortNews from "./Component/ShortNews/ShortNews";
import HomePage from "./Pages/HomePage/HomePage";
import Search from "./Component/SearchNews/Search";
import EPapers from "./Component/E-Papers/EPapers"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/VideoSlider" element={<VideoSlider/>} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/EPapers" element={<EPapers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
