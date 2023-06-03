import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";

import Logo from "../assets/images/Screenshot_2023-06-02_at_3.54.26_PM-removebg-preview.png";

const Navbar = () => {

  const handleClick = () => {
    window.open('https://zingy-kitten-222b78.netlify.app/', '_blank');
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32 px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "60px", height: "60px", margin: "0 100px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
            marginLeft: "600px",
            marginRight: "40px",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>


      <Button
          variant="contained"
          color="primary"
          fontSize="19px"
          sx={{
            borderRadius: "20px",
            ml: "21px",
            textTransform: "capitalize",
            background: "linear-gradient(45deg, #002D64, #000B1A)",
          }}
          onClick={handleClick}
        >
          Connect Now
        </Button>

      </Stack>
    </Stack>
  );
};

export default Navbar;
