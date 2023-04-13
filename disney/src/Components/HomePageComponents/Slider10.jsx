import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
// import required modules
import { Pagination } from "swiper";
import "../../CSS/Slider1.css";


export default function Slider10() {
  
  const [MoviesNotToMissData, setCrime] = useState([]);

  const Movies = async () => {
    try {
      let res = await axios.get(` http://localhost:8080/MoviesNotToMiss`);
      setCrime(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
Movies()
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {MoviesNotToMissData?.map((el) => {
          return (
            <SwiperSlide key={el.id}
              style={{
                backgroundColor: "#0c111b",

                margin: "auto",
              }}
            >
              <Image
                className="combineHover"
                height={"300"}
                src={el.image}
                alt={el.name}
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
            
        </SwiperSlide>
      </Swiper>
    </>
  );
}
//<SwiperSlide
// style={{
//     backgroundColor: "#0c111b",

//     margin: "auto",
//   }}
// >
//   <Image
//     className="combineHover"
//     height={"300"}
//     src="https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"
//   />
// </SwiperSlide>
