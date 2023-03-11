import React, { useEffect, useState } from "react";
import "./ImageData.css";
import Most from "./IMG/Slider.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ImageData(name) {

  const [newsData, setNewsData] = useState([]);
  const [length, setLength] = useState();
  console.log(newsData);
  let navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/FullNews/" +`${e}`, { replace: true })
  }

  // console.log(typeof length);
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData",{"data":name.value.EngCategory})
      .then(async (response) => {
        console.log(response.data.response.length);
        await setNewsData(response.data.response);
        setLength(response.data.response.length);
        // console.log(response.data.response);
      });
  }, []);

  console.log(length - 2, length);
  return (
    <>
    <div className="Bind">
    
      {/* <div className="head">
        <h4>{name.value.GujCategory}</h4>
        <p>વધુ વાંચો...</p>
      </div> */}
      <div className="Main-Img">
      {/* <img className="Img-1" src={Most} alt="" />
      <p className="Aabohava">આબોહવા પરિવર્તન: આગથી વૈશ્વિક વૃક્ષોના નુકસાનનો આશ્ચર્યજનક દર</p>
      
      <img className="Img-1" src={Most} alt="" />
      <p className="Aabohava2">આબોહવા પરિવર્તન: આગથી વૈશ્વિક વૃક્ષોના નુકસાનનો આશ્ચર્યજનક દર</p>
 */}




        {/* <div  className="detialsdifr" style={{border:"1px solid red", width:"44%", height: "295px"}}> */}
        {newsData.slice(length-2, length).map((news, index) => {
          return (
            <>
            {/* <a href={`/FullNews/${news._id}`} > */}
              
              {/* <div    onClick={(e)=>{handleClick(news._id)}} > */}
              {/* <img
                key={index}
                className={index == 1 ? "Img-2" : "Img-1"}
                src={process.env.REACT_APP_API_URL + `${news.Path}`}
                alt=""
                onClick={(e)=>{handleClick(news._id)}} 
              />
              <p className={index == 1 ? "Text-bottem2" : "Text-bottem1"} onClick={(e)=>{handleClick(news._id)}}    >
                <b>{news.NewsTittle}</b>
              </p> */}
            </>
          );
        })}

        {/* {/* </div> */}
      </div>
      </div>
    </>
  );
}

export default ImageData;
