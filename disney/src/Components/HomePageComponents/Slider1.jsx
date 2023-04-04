import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../CSS/Slider1.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider1() {
  return (
    <>
      <Box>
        <Swiper
          style={{ margin: "auto", width: "96%" }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Anupama
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  StarPlus Hindi Drama
                </Text>
                <Text className="description">
                  Despite the many challenges thrown her way,
                  <br /> Anupama begins a new chapter of her life post-divorce.
                  <br /> Head held always high, what's waiting for her next?
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4"
                  alt="anupama"
                />
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  GasLight
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Hindi Thriller Movie
                </Text>
                <Text className="description">
                  A paraplegic woman returns home to find her estranged father
                  dead,
                  <br /> her family disbelieving her and questioning her sanity.
                  <br />
                  Which version of the truth is real?
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://m.media-amazon.com/images/M/MV5BYTg5OWI1MGEtZjgzMC00ZTgwLWI2MDMtYWY2ZTI4NDk5YzQ3XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg"
                  alt="gasLight"
                />
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Vikram Vedha
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Hindi Thriller Movie
                </Text>
                <Text className="description">
                  As their life stories hit a dead-end, six misfits find <br />
                  themselves embroiled in a web of scandals and mysteries.
                  <br /> Will they be able to escape this nightmare?
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://m.media-amazon.com/images/M/MV5BYTEyYjgzNmUtM2QyYi00MWMwLWExMDctZmY1NmZhNGY5MWNiXkEyXkFqcGdeQXVyOTcwMTQxMTM@._V1_.jpg"
                  alt="vikram"
                />
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Drishyam
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Hindi Thriller Movie 2015
                </Text>
                <Text className="description">
                  As their life stories hit a dead-end, six misfits find <br />
                  themselves embroiled in a web of scandals and mysteries.
                  <br /> Will they be able to escape this nightmare?
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://i.ytimg.com/vi/cxA2y9Tgl7o/maxresdefault.jpg"
                  alt="drishyam"
                />
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  AntMan and Wasp
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Hollywood SuperHero Movie 2015
                </Text>
                <Text className="description">
                  Ant-Man and the Wasp find themselves exploring the Quantum{" "}
                  <br />
                  Realm, interacting with strange new creatures and embarking on{" "}
                  <br />
                  an adventure that pushes them beyond the limits of what they
                  thought was possibl
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg"
                  alt="AntMan"
                />
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Pop Kaun
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Bollywood Movie Movie 2023
                </Text>
                <Text className="description">
                  Pop Kaun? is a 2023 Indian Hindi-language comedy-drama <br />
                  television series directed by Farhad Samji
                  <br />, produced by Yam Productions and distributed by Disney+
                  Hotstar.
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://images.news18.com/ibnlive/uploads/2023/03/pop-kaun-1-16789890383x2.jpg?im=FitAndFill,width=1200,height=900"
                  alt="PopKaun"
                />
              </Box>
            </Flex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0c111b",

              margin: "auto",
            }}
          >
            <Flex style={{ justifyContent: "space-evenly", height: "420px" }}>
              <Box style={{ width: "40%", margin: "auto" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    justifyContent: "left",
                    textAlign: "left",

                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Night Manager
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: "500",
                    fontSize: "16px",
                    justifyContent: "left",
                    textAlign: "left",
                    fontFamily: "Roboto HelveticaNeue-Light sans-serif",
                  }}
                >
                  Bollywood Thriller Series Movie 2023
                </Text>
                <Text className="description">
                  Pine, an ex-British soldier, is hired by an intelligence
                  officer as a covert operative.
                  <br /> He is tasked with infiltrating the inner circle of
                  Roper,
                  <br /> a secret arms dealer and also his lover's killer.
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Image
                  style={{ borderRadius: "12px" }}
                  width="720px"
                  height={"400px"}
                  src="https://m.media-amazon.com/images/M/MV5BYjU2NDY0ZTktYTM2Zi00NzhlLWIzZGUtMWE0N2MzNGI2YTkxXkEyXkFqcGdeQXVyMTA3MTI2ODc5._V1_FMjpg_UX1000_.jpg"
                  alt="NightManager"
                />
              </Box>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
//linear-gradient(to bottom, #141b29, #0c111b 300px)
