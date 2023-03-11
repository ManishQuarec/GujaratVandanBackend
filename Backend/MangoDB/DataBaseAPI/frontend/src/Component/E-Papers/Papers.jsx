import React, {useEffect, useState} from "react";
import "./Papers.css";
import PapersIMG from "./IMG/Papers.png";
import axios from "axios";
import fileDownload from 'js-file-download'
import { saveAs } from 'file-saver';

function Papers() {
  document.title = "Gujarat Vandan - E-pepers";

  const [newsData, setNewsData] = useState([]);



 const download = (e) => {

  const data={url:e}
  console.log(data);
  axios({
    url:process.env.REACT_APP_API_BASE_URL+"/downloads",
    method:"POST",
    responseType:"blob",
    data
  }).then((res)=>{
    console.log(res);
    fileDownload(res.data, "download.pdf")
  })
 }


console.log("newsData", newsData);


  useEffect(() => {
    
    axios.get(process.env.REACT_APP_API_BASE_URL+"/newsPaper").then(async (response) => {
      // console.log(response.data.response);
      await setNewsData(response.data.response);
      // console.log(response.data.response);
    });
  
    
  },[])
  
  return (
    <>
      <div className="E-Papers">
        <h1>ઈ-ન્યુઝ પેપર્સ</h1>
      </div>
      <div className="Collection">
      {newsData.slice(0)
        .reverse().map((news, index) => (

<div className="upload">
          <button onClick={(e)=>download(news.Path)}>
          <img  src={PapersIMG} alt="" />
          <p>
            તારીખ:-{news.NewsPaperDate}<br />
            શનિવાર
          </p>
          </button>
        </div>
        
      ))}
     
        
        {/* <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
      </div>
      <div className="Collection">
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div>
        <div className="upload">
          <img src={PapersIMG} alt="" />
          <p>
            તારીખ:-20/08/2022 <br />
            શનિવાર
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Papers;
