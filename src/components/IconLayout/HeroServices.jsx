import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DoctorIcon from "../../assets/Doctor.png";
import DrugStoreIcon from "../../assets/Drugstore.png";
import HospitalIcon from "../../assets/Hospital.png";
import CapsuleIcon from "../../assets/Capsule.png";
import AmbulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";

const HeroServices = () => {
  const services = [
    { icon: DoctorIcon, title: "Doctors" },
    { icon: DrugStoreIcon, title: "Labs" },
    { icon: HospitalIcon, title: "Hospitals", active: true },
    { icon: CapsuleIcon, title: "Medical Store" },
    { icon: AmbulanceIcon, title: "Ambulance" },
  ];
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        mb={2}
        textAlign="center"
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 3 }}
        justifyContent="center"
      >
        {services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.5}>
            <IconCard
              icon={service.icon}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroServices;
