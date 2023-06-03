import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box
    mt="80px"
    sx={{
      background: 'linear-gradient(180deg, #102A4E 0%, #061F3E 100%)',
      color: '#ffffff',
      paddingTop: '80px',
      paddingBottom: '40px',
    }}
  >
    <Stack
      direction="row" // Modified
      gap="40px"
      sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      flexWrap="wrap"
      px="40px"
    >
      <Link href="/bmi-calculator" color="inherit" underline="none" sx={{ pr: '20px' }}>
        BMI Calculator
      </Link>
      <Link href="/body-transformation" color="inherit" underline="none" sx={{ pr: '20px' }}>
        Body Transformation
      </Link>
      <Stack direction="row" spacing={2}>
        <Link href="https://www.facebook.com" color="inherit" underline="none" sx={{ pr: '20px' }}>
          Facebook
        </Link>
        <Link href="https://www.twitter.com" color="inherit" underline="none" sx={{ pr: '20px' }}>
          Twitter
        </Link>
        <Link href="https://www.instagram.com" color="inherit" underline="none" sx={{ pr: '20px' }}>
          Instagram
        </Link>
      </Stack>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center">
      Made with ❤️ by Team NUll
    </Typography>
  </Box>
);

export default Footer;
