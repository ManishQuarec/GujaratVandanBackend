import React from "react";
import "./SearchNews.css";

import NewsBlock from "../NewsBlock/NewsBlock";
import { useCookies  } from 'react-cookie'
import { useNavigate } from "react-router-dom";



function SearchNews() {
  const [cookies, setCookies] = useCookies("GujCategory");
  // const [data, setData]= useState()
  // console.log(cookies.GujCategory);
  let cookiesdata = cookies.GujCategory;
  console.log(cookiesdata);

  
  let navigate = useNavigate();

  const functionalData = (props) =>{
    console.log( props);
    navigate("/category/" +`${props}`)
    // navigate("/category/"+ `${props}`);
  }
  document.title = "Gujarat Vandan - Search";

  return (
    <>
      <div className="Searchbar">
        <input type="text" placeholder="વિષય , શહેર કે રાજ્ય સર્ચ કરો" />
        <button className="Searchbarbtn">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="controlBox">

      {cookiesdata.map((news, index)=>{
        return (
          <>
        <div className="Searchitem" key={index}>
        <button className="BtnItems" onClick={(e) =>{functionalData(news.Category.EngCategory)}}>
          <i class="fa fa-globe"></i> {news.Category.GujCategory}
        </button>
        </div>
        
        
        </>
       )

     })}


        </div>
      
        {/* <NewsBlock value={{"unique":false} }/>  */}

    </>
  );
}

export default SearchNews;
