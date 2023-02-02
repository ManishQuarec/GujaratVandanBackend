import React from "react";
import Nav from "../../Component/Nav/Nav";
import BreakingNews from "../../Component/BreakingNews/BreakingNews";
import Papers from "./Papers";
import ShortNews from "../../Component/ShortNews/ShortNews";
import RightPhotoImage from "../../Component/RightPhotoImage/RightPhotoImage";
import SocialMediaLeft from "../../Component/SocialMediaLeft/SocialMediaLeft";

function EPapers() {
  return (
    <>
      <div className="HomePage">
        <Nav />
        <BreakingNews />
        <div className="boundry">
          <div className="MiddleSection">
            <Papers />
          </div>
          <div className="RightSection">
            <SocialMediaLeft />
            <RightPhotoImage />
            <ShortNews />
          </div>
        </div>
      </div>
    </>
  );
}

export default EPapers;
