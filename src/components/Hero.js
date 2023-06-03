import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import sample from "../assets/vdio.mp4";


const Hero = () => {
  return (
    <Box sx={{ flexDirection: "row" }}>
      <Box
        sx={{
          width: "50%",
          mt: { lg: "120px", xs: "70px" },
          ml: { lg: "115px", sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="62px">
          FitFlex
        </Typography>

        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="25px"
        >
          Unleash Your <span style={{ color: "#000099" }}>Inner Beast</span>{" "}
          <br />
          <TypeAnimation
            sequence={[
              "Ignite Your Fitness Potential", // Types 'One'
              1000, // Waits 1s
              "With FitFlex...", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "inline-block" }}
          />
        </Typography>
        <Typography
          fontSize="22px"
          lineHeight="35px"
          mb={4}
          sx={{ fontWeight: "bold", color: "#4a148c" }}
        >
          Push Past Your Limits & <br />
          Discover What You Are Truly Capable Off!
        </Typography>

        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{
            backgroundColor: "#ff2625",
            borderRadius: "20px",
            fontSize: "16px",
          }}
          padding="10px"
        >
          Explore Exercises
        </Button>

        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
          fontSize="200px"
        >
          Exercise
        </Typography>
      </Box>

      <Box>
        <video
          src={sample}
          autoPlay
          loop
          muted
          style={{
            width: "200%",
            maxWidth: "800px",
            marginTop: "20px",
            marginLeft: "350px",
            borderRadius: "50px",
          }}
        />{" "}
      </Box>
    </Box>
  );
};

export default Hero;


