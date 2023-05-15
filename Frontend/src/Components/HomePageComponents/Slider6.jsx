import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import required modules
import { Pagination } from "swiper";
import "../../CSS/Slider1.css";
export default function Slider6() {
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
        <Link to="/superhero">
          {" "}
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Link to="/superhero">
              {" "}
              <Image
                className="combineHover"
                height={"300"}
                src="https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Link to="/superhero">
              {" "}
              <Image
                className="combineHover"
                height={"300"}
                style={{ borderRadius: "5px" }}
                src="https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Link to="/superhero">
              {" "}
              <Image
                className="combineHover"
                height={"300"}
                style={{ borderRadius: "5px" }}
                src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Link to="/superhero">
              {" "}
              <Image
                className="combineHover"
                height={"300"}
                style={{ borderRadius: "5px" }}
                src="https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Link to="/superhero">
              {" "}
              <Image
                className="combineHover"
                height={"300"}
                style={{ borderRadius: "5px" }}
                src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
              />
            </Link>
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
              src="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Agents_of_S.H.I.E.L.D._logo.jpg/375px-Agents_of_S.H.I.E.L.D._logo.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png"
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
              src="https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg"
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
              src="https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_movie.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Loki_%28TV_series%29_logo.png/375px-Loki_%28TV_series%29_logo.png"
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
              src="https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg"
            />
          </SwiperSlide>
        </Link>
      </Swiper>
    </>
  );
}
