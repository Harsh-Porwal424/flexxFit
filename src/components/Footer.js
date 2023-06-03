import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box
    mt="80px"
    sx={{
      background: 'linear-gradient(180deg, #11181F 0%, #061F3E 100%)',
      color: '#ffffff',
      paddingTop: '80px',
      paddingBottom: '40px',
    }}
  >
    <Stack
      direction="row"
      gap="40px"
      sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      flexWrap="wrap"
      px="40px"
    >
      <Box
        component={Link}
        href="https://bmi-calc-teamnull.netlify.app/"
        color="inherit"
        underline="none"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          pr: '30px',
          borderRadius: '50px',
          border: '2px solid #ffffff',
          padding: '10px 25px',
          animation: 'borderAnimation 2s infinite',
        }}
      >
        BMI Calculator
      </Box>
      <Box
        component={Link}
        href="/body-transformation"
        color="inherit"
        underline="none"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          pr: '30px',
          borderRadius: '50px',
          border: '2px solid #ffffff',
          padding: '10px 25px',
          animation: 'borderAnimation 2s infinite',
          marginRight: '340px',
        }}
      >
        Body Transformation
      </Box>
      <Stack direction="row" spacing={2}>
        <Link href="https://www.facebook.com" color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
          <Box
            sx={{
              pr: '30px',
              borderRadius: '50px',
              border: '2px solid #ffffff',
              padding: '10px 25px',
              animation: 'borderAnimation 2s infinite',
            }}
          >
            Facebook
          </Box>
        </Link>
        <Link href="https://www.twitter.com" color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
          <Box
            sx={{
              pr: '30px',
              borderRadius: '50px',
              border: '2px solid #ffffff',
              padding: '10px 25px',
              animation: 'borderAnimation 2s infinite',
            }}
          >
            Twitter
          </Box>
        </Link>
        <Link href="https://www.instagram.com" color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
          <Box
            sx={{
              pr: '30px',
              borderRadius: '50px',
              border: '2px solid #ffffff',
              padding: '10px 25px',
              animation: 'borderAnimation 2s infinite',
            }}
          >
            Instagram
          </Box>
        </Link>
      </Stack>
    </Stack>
    <Typography
      variant="h5"
      sx={{
        fontSize: { lg: '28px', xs: '20px' },
        mt: '41px',
        textAlign: 'center',
        fontFamily: 'Nightlife', // Specify the font family
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow
      }}
    >
      Made with ❤️ by Team NUll
    </Typography>

    {/* CSS Keyframes for the border animation */}
    <style>
      {`
      @keyframes borderAnimation {
        0% {
          border-color: #ffffff;
          background-color: #11181F;
        }
        50% {
          border-color: #4e6bff;
          background-color: #11181F;
        }
        100% {
          border-color: #ffffff;
          background-color: #11181F;
        }
      }
      `}
    </style>
  </Box>
);

export default Footer;
