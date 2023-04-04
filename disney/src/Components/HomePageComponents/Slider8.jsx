import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../../CSS/Slider1.css'
// import required modules
import { Pagination } from "swiper";

export default function Slider8() {
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
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            src="https://upload.wikimedia.org/wikipedia/en/1/12/2_States_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/4/46/Arjun_Reddy.jpg"
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/e/e5/Atrangi_Re_film_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/6/68/Hridayam.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/6/6f/Khuda_Haafiz_film_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/d/d6/Beauty_and_the_Beast_2017_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/3/32/Dil_Bechara_film_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/9/9f/Sanam_Re_movie_poster.jpgZ"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/6/62/Humkodeewanakargaye.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/5/5e/Shiddat_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Malefica.jpg/330px-Malefica.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
