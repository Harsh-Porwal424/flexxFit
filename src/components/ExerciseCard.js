import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExcCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      <Stack direction="row">
        <Button
          variant="contained"
          color="primary"
          fontSize="14px"
          sx={{
            borderRadius: "20px",
            backgroundColor: "Black",
            ml: "21px",
            textTransform: "capitalize",
            background: "linear-gradient(120deg, #2196F3, #4CAF50)",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          variant="contained"
          color="primary"
          fontSize="14px"
          sx={{
            borderRadius: "20px",
            ml: "21px",
            textTransform: "capitalize",
            background: "linear-gradient(45deg, #FF9800, #FF5722)",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExcCard;
