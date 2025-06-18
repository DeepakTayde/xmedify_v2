import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import HeroImg from '../../assets/home.png'
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <Stack direction={{xs:"column", md:"row"}} alignItems='center' justifyContent='space-between' spacing={6} pt={2}>
          <Box sx={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
            <Typography variant="h3" component='h1' sx={{color:"#102851", fontSize:"30px", fontWeight:500}}>Skip the travel! Find Online</Typography>
            <Typography variant="h1" component='h1' mb={1} sx={{fontSize:"56px", fontWeight:700}}>Medical <span style={{color:"#2AA7FF"}}>Centers</span></Typography>
            <Typography color="#5C6169" mb={2}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
            <Link to='/search'>
              <Button variant="contained" size="large" disableElevation >Find Centers</Button>
            </Link>
          </Box>
          <Box   sx={{maxWidth:400, width:{xs:'100%', md:'40%'}}} >
            <img src={HeroImg} alt="Medical Center Hero" style={{width:'100%', height:'auto', display:'block'}} />
          </Box>

        </Stack>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
