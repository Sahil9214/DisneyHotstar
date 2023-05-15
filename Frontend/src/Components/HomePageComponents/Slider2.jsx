import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../CSS/Slider1.css";
// import required modules
import { Link } from "react-router-dom";
import { Pagination } from "swiper";

export default function Slider2() {
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
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              src="https://qph.cf2.quoracdn.net/main-qimg-038a5c066eadf488a79a618fd26ba1a1-lq"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://images.news18.com/ibnkhabar/uploads/2023/01/yeh-rishta-kya-kehlata-hai.jpg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Kabhi_Kabhie_Ittefaq_Sey_Title_screen.jpg/375px-Kabhi_Kabhie_Ittefaq_Sey_Title_screen.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://images.news18.com/ibnkhabar/uploads/2023/01/yeh-rishta-kya-kehlata-hai.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Saath_Nibhaana_Saathiya_titleboard_2.png/375px-Saath_Nibhaana_Saathiya_titleboard_2.png"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Yehh_Jadu_Hai_Jinn_Ka_Season_2%21.jpg/375px-Yehh_Jadu_Hai_Jinn_Ka_Season_2%21.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Kavach_Mahashivratri.png/375px-Kavach_Mahashivratri.png"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="data:image/jpeg;base64,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"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="data:image/jpeg;base64,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"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4252/1364252-h-e470328888ed"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4258/1364258-h-33316428e498"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Divya_Drishti.png/375px-Divya_Drishti.png"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starplusshow">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Nazar_%28TV_series%29_poster.jpg/375px-Nazar_%28TV_series%29_poster.jpg"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
