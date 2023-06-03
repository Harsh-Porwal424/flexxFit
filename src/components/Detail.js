import React from 'react';
import { Typography, Stack, Button, colors } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '10px', alignItems: 'center' }}>
<img src={gifUrl} alt={name} loading="lazy" className="detail-image" style={{ border: '10px solid #000', borderRadius: '50px', height:'550px', marginTop:'30px' }} />
      <Stack sx={{ gap: { lg: '15px', xs: '20px' } }}>


        <Typography sx={{ fontSize: { lg: '54px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>


        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Engaging in physical activities helps maintain your strength.{' '}
          <span style={{ textTransform: 'capitalize', color: 'blue' }}>{name}</span> is an exceptional workout to specifically focus on your exercises to target your           <span style={{ textTransform: 'capitalize', color: 'red' }}>{target}</span>. It will help you improve your{' '}
          <br /> mood and enhancing vitality.
        </Typography>


        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
