import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HScrlB from "./HScrlB";

const SrchE = ({setExercises, bodyPart, setBodyPart}) => {
  const [srch, setSearch] = useState("");


  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fExcD = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fExcD();

    console.log(fExcD());
  }, []);

  const handleSearch = async () => {
    if (srch) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(srch) ||
          exercise.target.toLowerCase().includes(srch) ||
          exercise.equipment.toLowerCase().includes(srch) ||
          exercise.bodyPart.toLowerCase().includes(srch)
      );

      setSearch("");
      setExercises(searchedExercises);

      //console.log(exercisesData);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awsome Exercises You <br />
        Should Know
      </Typography>
      


      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "850px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={srch}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>


        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
            ml: "21px",
            borderRadius:'50px',
            border:'none',
            background: 'linear-gradient(45deg, #FF9800, #FF5722)'

          }}
          onClick={handleSearch}
        >
          {" "}
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          padding: "20px",
          border:'none'
        }}
      >
        <HScrlB data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SrchE;
