import React from "react";
import {  Box, Container, Stack } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import HeroSlider from '../components/HeroSlider/HeroSlider'
import SearchHospital from "../components/SearchHospital/SearchHospital";
import HeroServices from '../components/IconLayout/HeroServices'
import Offers from "../components/Sections/Offers/Offers";
import Specialization from "../components/Sections/Specialization/Specialization";
import Specialist from "../components/Sections/Specialists/Specialist";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";

const Home = () => {
  return (
    <Box >
      <Box
        sx={{
          background: "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
      <NavBar />
        <Container maxWidth="xl">
          <HeroSlider/>
          <Stack bgcolor='#fff' borderRadius='15px' p={{xs:2.5, md:8}} mt={{xs:-2, md:0, lg:-6, xl:-10}} position='relative' zIndex={99} boxShadow='0 0 12px rgba(0, 0, 0, 0.1)' spacing={5}>
            <SearchHospital/>
            <HeroServices/>
          </Stack>
        </Container>
      </Box>
      <Offers/>
      <Specialization/>
      <Specialist/>
      <PatientCaring/>
    </Box>
  );
};

export default Home;
