import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import DentistryIcon from '../../../assets/Drugstore.png'
import PrimaryCareIcon from '../../../assets/Stethoscope.png'
import CardiologyIcon from '../../../assets/Heart Rate.png'
import MriResonanceIcon from '../../../assets/Heart Rate Monitor.png'
import BloodTestIcon from '../../../assets/Blood Sample.png'
import PiscologistIcon from '../../../assets/Immune.png'
import LaboratoryIcon from '../../../assets/Drugstore.png'
import XrayIcon from '../../../assets/X-Ray.png'
import IconCard from "../../IconCard/IconCard";

const Specialization = () => {
      const services = [
    { icon: DentistryIcon, title: "Dentistry" },
    { icon: PrimaryCareIcon, title: "Primary Care" },
    { icon: CardiologyIcon, title: "Cardiology" },
    { icon: MriResonanceIcon, title: "MRI Resonance" },
    { icon: BloodTestIcon, title: "Blood Test" },
    { icon: PiscologistIcon, title: "Piscologist" },
    { icon: LaboratoryIcon, title: "Laboratory" },
    { icon: XrayIcon, title: "X-Ray" },
  ];


  return (
    <Box
      py={4}
      sx={{
        background:
          "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
      }}
      height='100vh'

    >
      <Container sx={{textAlign:"center"}}>
        <Typography
          variant="h2"
          fontSize="48px"
          color="#1B3C74"
          fontWeight={600}
          mb={4}
          lineHeight={1.2}
        >
          Find By Specialisation
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 6 }}
          justifyContent='center'
          mb={5}
        >
          {services.map((service) => (
            <Grid item key={service.title} xs={4} md={3}>
              <IconCard
                icon={service.icon}
                title={service.title}
                bgColor="#fff"
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" size="large" disableElevation>View All</Button>
      </Container>
    </Box>
  );
};

export default Specialization;
