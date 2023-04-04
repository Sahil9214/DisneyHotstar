import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MoviesData } from "../../Redux/Sliders/action";
// import required modules
import { Pagination } from "swiper";
import "../../CSS/Slider1.css";
import { useSelector, useDispatch } from "react-redux";

export default function Slider10() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.Movienottomiss);


  useEffect(() => {
    dispatch(MoviesData());
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
        {store?.MoviesNotToMissData?.map((el) => {
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
