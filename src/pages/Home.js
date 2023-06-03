import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SrchE from '../components/SrchE';
import Exercises from '../components/Exercises';


const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

  return (
    
    <Box>
        <HeroBanner/>
        <SrchE
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
        />
        <Exercises
        exercises = {exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
        />

    </Box>
  )
}

export default Home