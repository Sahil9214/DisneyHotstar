import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import "../../CSS/Slider1.css";
import { Link } from "react-router-dom";
export default function Slider5() {
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
          <Link to="/action">
            {" "}
            <Image
              className="combineHover"
              height={"300"}
              src="https://upload.wikimedia.org/wikipedia/en/8/83/Special_OPS_Poster.jpeg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/action">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/action">
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
          <Link to="/action">
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
          <Link to="/action">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/16/National_Treasure_-_Edge_of_History_logo.jpg/375px-National_Treasure_-_Edge_of_History_logo.jpg"
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
            src="https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/f/fd/Marc_Spector_39.jpg"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Agents_of_S.H.I.E.L.D._logo.jpg/375px-Agents_of_S.H.I.E.L.D._logo.jpg"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/4/42/Bhuj-_The_Pride_of_India_film_poster.jpg"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Iron_Fist_%28TV_series%29_logo.png"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Loki_%28TV_series%29_logo.png/375px-Loki_%28TV_series%29_logo.png"
          />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to='/action'>
          <Image
            className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg"
          />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
