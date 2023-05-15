import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../Videos/Marvel.mp4";
import comedy from '../Videos/Bhool.mp4'
import { useSelector, useDispatch } from "react-redux";

import "../Styles/marvel.css";
import { Link } from "react-router-dom";
import { comedyMovie } from "../Redux/Comedy/action";

import bahubali from "../Videos/babhubali.mp4";
const ComedyPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.ComedyReducer);

  useEffect(() => {
    dispatch(comedyMovie());
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
              src={comedy}
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
            <Text className="marvel_text">
              India Most popular Drama Movie :Bahubali
            </Text>
            <Text className="marvel_desc">
              When Sanga and her husband, part of a tribe living around the
              province of Mahismathi, save a drowning infant, little do they
              know the background of the infant or what the future holds for
              him. The kid grows up to as Shivudu, a free-spirit wanting to
              explore the mountains and in the process learns of his roots and
              then realizes the whole purpose of his life and ends up
              confronting the mighty Bhallala Deva!
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
        {store?.comedy?.map((el) => {
          return (
            <Link to={`/comedy/${el.id}`}>
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

export default ComedyPage;
