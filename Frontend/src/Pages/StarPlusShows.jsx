import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../Videos/Marvel.mp4";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../Components/Loader";
import fast8 from "../Videos/fast8.mp4";
import "../Styles/marvel.css";
import { Link } from "react-router-dom";
import {StarPlusDataAction } from "../Redux/StarPlus/action";
import anupama from "../Videos/anupama.mp4";

const SingleStarPlus = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.StarReduce);
  console.log("hello",store);


  useEffect(() => {
    dispatch(StarPlusDataAction());
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(20,27,41)" }}>
      <Box backgroundColor={"rgb(20,27,41)"}>
        <br />
        <br />
        <div style={{ margin: "auto", width: "90%" }} className="MarvelComics">
          <Box className="marvel_box">
            <video
              className="marvel_video"
              style={{
                margin: "auto",
                borderRadius: "12px 20px",
              }}
              src={anupama}
              controls
              loop
            />
          </Box>
          <Box className="marvel_box_text">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Text className="marvel_text">Most Watch Show Anupama</Text>
            <Text className="marvel_desc">
              Anuj to divorce Anupama, their love story comes to an end. In the
              upcoming episode, Anuj will send divorce papers to Anupama as he
              would want to end the marriage. Anupama will be shocked to receive
              them. MUMBAI:Anupamaa is presently ruling our television screens.
            </Text>
            <br />

            <Box></Box>
          </Box>
        </div>
        <br />
      </Box>
      <br />
      <br />
      <Box className="marvel_grid">
        {store?.starData?.map((el) => {
          return (
            <Link to={`/starplusshow/${el.id}`}>
              <Box key={el.id} className="box_superhero_grid">
                <Image className="superhero_img" src={el.image} alt={el.id} />
              </Box>
            </Link>
          );
        })}
      </Box>
    </div>
  );
};

export default SingleStarPlus;
