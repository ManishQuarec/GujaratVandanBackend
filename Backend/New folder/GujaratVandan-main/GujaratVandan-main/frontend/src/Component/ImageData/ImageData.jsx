import React, { useEffect, useState } from "react";
import "./ImageData.css";
import axios from "axios";

function ImageData(name) {

  const [newsData, setNewsData] = useState([]);
  const [length, setLength] = useState();
  console.log(newsData);

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
      <div className="head">
        <h4>{name.value.GujCategory}</h4>
        <p>વધુ વાંચો...</p>
      </div>
      <div className="Main-Img">
        {/* <div  className="detialsdifr" style={{border:"1px solid red", width:"44%", height: "295px"}}> */}
        {newsData.slice(length-2, length).map((news, index) => {
          return (
            <>
              {console.log(index)}
              <img
                key={index}
                className={index == 1 ? "Img-2" : "Img-1"}
                src={"http://localhost:5000" + `/${news.Path}`}
                alt=""
              />
              <p className={index == 1 ? "Text-bottem2" : "Text-bottem1"}>
                <b>{news.NewsTittle}</b>
              </p>

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
