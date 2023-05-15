import React, { useEffect, useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Marvel from "../Videos/Marvel.mp4";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../Styles/marvel.css";
import Dc from "../Videos/Dc.mp4";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const SuperHero = () => {
  const [arr, setArr] = useState([]);



  const getSuperhero = async () => {
    try {
      let res = await axios
        .get("http://localhost:8080/SuperHero")
        .then((res) => setArr(res.data));
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getSuperhero();
  }, []);



  return (
    <div className="superHeroMainDIv">
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
              src={Marvel}
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
            <Text className="marvel_text">Disney+Marvel Studio</Text>
            <Text className="marvel_desc">
              Marvel Studios, LLC is an American film and television production
              company that is a subsidiary of Walt Disney Studios, a division of
              Disney Entertainment, which is owned by the Walt Disney Company
            </Text>
            <br />
            <Text className="marvel_desc">
              Total (32 films): Marvel Studios releases its films in groups
              called "Phases". Its first film is Iron Man (2008), which was
              distributed by Paramount Pictures
            </Text>
            <Box></Box>
          </Box>
        </div>
        <br />

        <div style={{ margin: "auto", width: "90%" }} className="MarvelComics">
          <Box className="dc_box">
            <video
              className="dc_video"
              style={{
                margin: "auto",
                borderRadius: "12px 20px",
              }}
              src={Dc}
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

            <Text className="marvel_text">Disney+DC Studio</Text>
            <Text className="marvel_desc">
              Superheroes such as Superman, Batman, Wonder Woman, Robin, Martian
              Manhunter, Flash, Green Lantern, Aquaman, Green Arrow, and Shazam
              are from this universe, as well as teams such as the Justice
              League, Teen Titans and the Suicide Squad.
            </Text>
            <br />
            <Text className="marvel_desc">
              Total (14 films): DC Studios releases its films in groups called
              "Phases". Its first film is Dark Knight Rise(2012), which was
              distributed by Paramount Pictures
            </Text>
            <Box></Box>
          </Box>
        </div>
      </Box>
      <br />
      <br />
      <Box className="marvel_grid">
        {arr?.map((el) => {
          return (
            <Box key={el.id} className="box_superhero_grid">
              <Link to={`/superhero/${el.id}`}>
                <Image className="superhero_img" src={el.image} />
                {/* <Text style={{color:"#fff"}}>{el.id}</Text> */}
              </Link>
            </Box>
          );
        })}
      </Box> 
    </div>
  );
};

export default SuperHero;
