import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import "../../CSS/Slider1.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Slider11() {
  const [crime, setCrime] = useState([]);

  const crimeData = async () => {
    try {
      let res = await axios.get(` http://localhost:8080/CrimeMovies`);
      setCrime(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    crimeData();
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
        {crime?.map((el) => {
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
