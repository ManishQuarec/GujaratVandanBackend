import React, {useEffect, useState} from 'react'
import './BreakingNew.css'
import axios from "axios";

function BreakingNews() {
  const [newsData, setNewsData] =useState([]);

  useEffect(() => {


          
    axios.get(process.env.REACT_APP_API_BASE_URL+"/allBreakingNews").then(async(response)=> {
      // console.log(response.data.response);
      await setNewsData(response.data.response);
       // console.log(response.data.response);
     })

  
   
  }, [])
  


  return (
    <div className="breakingnews-line">
            <div className="breaking-news">BREAKING NEWS</div>
            <div className="news">
            <marquee  style={{width:"1000%"}}>
            {newsData.map((news,index)=> (<>  &nbsp; &nbsp; <b key={index} >{news.Title}:</b>{news.News}</>))}
            </marquee>
                
            </div>
        </div>
  )
}

export default BreakingNews