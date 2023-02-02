import React from 'react'
import "./SearchNews.css"

function SearchNews() {
  return (
    <>
        <div className='Searchbar'>
            <input type="text" placeholder='વિષય , શહેર કે રાજ્ય સર્ચ કરો' />
            <button className='Searchbarbtn'><i class="fa fa-search"></i></button>
        </div>
    </>
  )
}

export default SearchNews
