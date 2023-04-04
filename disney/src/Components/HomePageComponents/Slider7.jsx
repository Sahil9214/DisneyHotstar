import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import '../../CSS/Slider1.css'
export default function Slider7() {
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
          <Image className="combineHover"
            height={"300"}
            src="https://upload.wikimedia.org/wikipedia/en/0/0a/Saturday_Night_Malayalam_film_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide 
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/0/00/Babli_Bouncer.jpg"
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/3/36/KBS_%E2%80%93_Crazy_Love.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        > 
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/9/9e/Turning_Red_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        > 
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/How_I_Met_Your_Father_%28Hulu_logo%29.png"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image  className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/3/32/Housefull_Poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/f/fa/Housefull_2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Akshay_Kumar%27s_Housefull_3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/3/3c/Housefull_4_poster.jpg"/>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/b/b5/Hungama_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/9/98/Good_Luck_Jerry_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/9/9b/Hungama_2_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/e/e2/Laxmii_poster.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
