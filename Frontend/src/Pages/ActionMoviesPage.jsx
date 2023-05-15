import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../Videos/Marvel.mp4";
import { actionMoviesData } from "../Redux/ActionMoviesDataValue/action";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Components/Loader";
import fast8 from "../Videos/fast8.mp4";
import "../Styles/marvel.css";
import { Link } from "react-router-dom";
const ActionMoviesPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.ActionReducer);

  useEffect(() => {
    dispatch(actionMoviesData());
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
              src={fast8}
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
            <Text className="marvel_text">Fast and Furious Movie 8</Text>
            <Text className="marvel_desc">
              With Dom and Letty married, Brian and Mia retired and the rest of
              the crew exonerated, the globe-trotting team has found some
              semblance of a normal life. They soon face an unexpected challenge
              when a mysterious woman named Cipher forces Dom to betray them
              all. Now, they must unite to bring home the man who made them a
              family and stop Cipher from unleashing chaos.
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
        {store?.data.map((el) => {
          return (
            <Link to={`/action/${el.id}`}>
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

export default ActionMoviesPage;
