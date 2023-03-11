import React from 'react'
// import "./HomePage.css";
import Nav from "../../Component/Nav/Nav";
import BreakingNews from "../../Component/BreakingNews/BreakingNews";
import LeftMenuBar from "../../Component/LeftMenuBar/LeftMenuBar";
import AppStore from "../../Component/AppStore/AppStore";
import SearchNews from "./SearchNews"
import ShortNews from "../../Component/ShortNews/ShortNews";
import RightPhotoImage from "../../Component/RightPhotoImage/RightPhotoImage";
import SocialMediaLeft from "../../Component/SocialMediaLeft/SocialMediaLeft";
function Search() {
  return (
    <>
    <div className="HomePage">
      <Nav />
      <BreakingNews />
      <div className="boundry">
        <div className="LeftSection">
          <LeftMenuBar />
          <AppStore />
        </div>
        <div className="MiddleSection">
            <SearchNews/>
        </div>
        <div className="RightSection">
        <SocialMediaLeft/>
        <RightPhotoImage/>
        <ShortNews/>
        </div>
      </div>
    </div>
    </>
  )
}

// export default Search

export default React.memo(Search)

