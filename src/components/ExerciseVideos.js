import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


const ExerciseVideos = ({exerciseVideos, name}) => {

  console.log(exerciseVideos);

  if(!exerciseVideos.length) return 'Loading..';

  return (
    // <Box sx={{marginTop : {lg: '200px', xs:'20px'}, fontWeight:'bold'}} px='20px'>

    // <Typography variant='h3' mb='50px'>

    // Tune in to <span style={{ textTransform: 'capitalize', color: 'blue' }}> {name}</span> Workout Videos....

    // </Typography>

    // <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">

    // {exerciseVideos?.slice(0,4).map((item, index) => (
    //   <a
    //   key={index}
    //   className='exercide-video'
    //   href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
    //   target='_blank'
    //   rel='noreferrer'

    //   >
    //   <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '400px', height: '200px', borderRadius:'20px', marginLeft:'150px' }
      


    //   }/>

    //   <Box>
    //     <Typography varient='h5' color='#000' style={{marginLeft:'160px'}}>
    //     Vedio Link

    //     </Typography>

    //   </Box>

    //   <Box>
    //     <Typography varient='h5' color='#000' style={{marginLeft:'160px'}}>
    //       {item.video.channelName}
    //     </Typography>
    //   </Box>

    //   </a>
    // ))}

    // </Stack>

    // </Box>

    <Box sx={{marginTop: {lg: '200px', xs: '20px'}, fontWeight: 'bold', textAlign: 'center', fontSize:'20px'}} px='20px'>

  <Typography variant='h3' mb='50px'>
    Tune in to <span style={{ textTransform: 'capitalize', color: 'blue' }}>{name}</span> 
    <br/>
    Workout Videos....
  </Typography>

  <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
    {exerciseVideos?.slice(0,6).map((item, index) => (
      <a
        key={index}
        className='exercise-video'
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target='_blank'
        rel='noreferrer'
      >
        <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '400px', height: '200px', borderRadius: '20px', marginLeft: '15px' }} />
        <Box>
          {/* <Typography variant='h5' color='#000' style={{ marginLeft: '16px' }}>
            Video Link
          </Typography> */}

          <Button
          variant="contained"
          color="primary"
          fontSize="14px"
          sx={{
            borderRadius: "20px",
            ml: "21px",
            textTransform: "capitalize",
            background: "linear-gradient(to right, #E91E63, #673AB7)"
          }}
        >
        Video Link
        </Button>

        </Box>
        <Box>
          <Typography variant='h5' color='#000' style={{ marginLeft: '16px' }}>
            {item.video.channelName}
          </Typography>
        </Box>
      </a>
    ))}
  </Stack>

</Box>


  )
}

export default ExerciseVideos