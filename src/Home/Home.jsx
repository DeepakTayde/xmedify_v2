import React from "react";
import {  Box, Container, Stack } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import HeroSlider from '../components/HeroSlider/HeroSlider'
import SearchHospital from "../components/SearchHospital/SearchHospital";

const Home = () => {
  return (
    <Box>


      <Box
        sx={{
          background: "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          boxShadow: "none",
          height:"100vh"
        }}
        mb={4}
      >
      <NavBar />
        <Container maxWidth="xl">
          <HeroSlider/>
          <Stack bgcolor='#fff' borderRadius='15px' p={{xs:2.5, md:8}} position='relative' zIndex={99} boxShadow='0 0 12px rgba(0, 0, 0, 0.1)'>
            <SearchHospital/>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
