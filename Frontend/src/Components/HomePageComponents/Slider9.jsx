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
export default function Slider9() {
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
            src="https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/8/80/The_Good_Dinosaur_poster.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/f/f9/Lightyear_%28film%29_poster.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg"
          />
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
            src="https://upload.wikimedia.org/wikipedia/en/9/91/Dumbo_%282019_film%29.pngg"
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
            src="https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
