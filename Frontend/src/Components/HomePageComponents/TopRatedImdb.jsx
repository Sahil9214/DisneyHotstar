import React from 'react'
import Slider3 from './Slider3'
const TopRatedImdb = () => {
  return (
    <div
      style={{
        width: "96%",
        margin: "auto",
        
        justifyContent: "left",
        textAlign:"left"
      }}
    >
      <h2
        className="starPlush2"
        style={{
          textAlign: "left",
          justifyContent: "left",
       
         
        }}
      >
       Top Rated On IMDB
      </h2>
      <Slider3 />
    </div>
  )
}

export default TopRatedImdb