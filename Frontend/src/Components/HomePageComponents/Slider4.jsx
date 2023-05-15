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
export default function Slider4() {
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
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Mann_ki_Awaaz_Pratigya_2.JPEG/375px-Mann_ki_Awaaz_Pratigya_2.JPEG"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Meri_Saas_Bhoot_Hai.jpg/375px-Meri_Saas_Bhoot_Hai.jpg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/c/c7/Dheere_Dheere_Se.jpeg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Akbarkabalbirbal.jpg/375px-Akbarkabalbirbal.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Bohot_Pyaar_Karte_Hai.jpg/375px-Bohot_Pyaar_Karte_Hai.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/a/a3/Channa_Mereya.jpeg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Sasural_Genda_Phool_show.jpg/375px-Sasural_Genda_Phool_show.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Lakshmi_ghar_Aayi.JPEG/375px-Lakshmi_ghar_Aayi.JPEG"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Savdhaan_India-serial.jpg/375px-Savdhaan_India-serial.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Laout_Aao_Trisha.webp/375px-Laout_Aao_Trisha.webp.png"
            />
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
           <Link to='/starbharat'></Link>
          <Image className="combineHover"
            height={"300"}
            style={{ borderRadius: "5px" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Meri_Ladli.jpg/375px-Meri_Ladli.jpghttps://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Gudsemeethaishq.jpeg/375px-Gudsemeethaishq.jpeg"
          />
            </Link>
        </SwiperSlide> */}

        <SwiperSlide
          style={{
            backgroundColor: "#0c111b",

            margin: "auto",
          }}
        >
          <Link to="/starbharat">
            <Image
              className="combineHover"
              height={"300"}
              style={{ borderRadius: "5px" }}
              src="https://upload.wikimedia.org/wikipedia/en/7/7d/Kaal_bhairav_Rahasya.JPEG"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
