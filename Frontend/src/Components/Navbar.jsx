import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import "../CSS/NavbarCSS.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      style={{ backgroundColor: " #141b29", justifyContent: "space-between" }}
    >
      <Box marginLeft={"20px"}>
        <Flex>
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt="disney"
          />
          <Box className={"navBarLinks"}>
            Tv
            <p className="dropdown" style={{ zIndex: 2 }}>
              <p className="ul_li">
                <p className="li_li">StarPlus</p>
                <br />
                <p className="li_li">Hotstar Special</p>
                <br />
                <p className="li_li">Star Bharat</p>
                <br />
                <p className="li_li">Star Vijay</p>
                <br />
                <p className="li_li">Star Maa</p>
                <br />
              </p>
            </p>
          </Box>
          <Box className={"navBarLinks"}>
            Movies
            <p className="dropdown" style={{ zIndex: 2 }}>
              <p className="ul_li">
                <p className="li_li">Hindi</p>
                <br />
                <p className="li_li">English</p>
                <br />
                <p className="li_li">Telgu</p>
                <br />
                <p className="li_li">Kanada</p>
                <br />
                <p className="li_li">Bengali</p>
                <br />
              </p>
            </p>
          </Box>
          <Box className={"navBarLinks"}>
            Sports{" "}
            <p className="dropdown" style={{ zIndex: 2 }}>
              <p className="ul_li">
                <p className="li_li">StarPlus</p>
                <br />
                <p className="li_li">Hotstar Special</p>
                <br />
                <p className="li_li">Star Bharat</p>
                <br />
                <p className="li_li">Star Vijay</p>
                <br />
                <p className="li_li">Star Maa</p>
                <br />
              </p>
            </p>
          </Box>
          <Box className={"navBarLinks"}>
            Disney+
            <p className="dropdown" style={{ zIndex: 2 }}>
              <p className="ul_li">
                <p className="li_li">StarPlus</p>
                <br />
                <p className="li_li">Hotstar Special</p>
                <br />
                <p className="li_li">Star Bharat</p>
                <br />
                <p className="li_li">Star Vijay</p>
                <br />
                <p className="li_li">Star Maa</p>
                <br />
              </p>
            </p>
          </Box>
          <Box className={"navBarLinks"}>
            <img
              width={"40px"}
              height="15px"
              src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
              alt="kids"
            />
          </Box>
        </Flex>
      </Box>
      <Box>
        <input className="navbar_input" placeholder="Search" />
        <button className="subscribe_btn">Subsribe</button>
        <Link to="/signup">
          {" "}
          <button className="login_btn">SignUp</button>
        </Link>
        <Link to="/Login">
          {" "}
          <button className="login_btn">Login</button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
