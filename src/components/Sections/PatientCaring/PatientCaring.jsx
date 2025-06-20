import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PatientCaringBanner from "../../../assets/patientcaring.png";
import { Link } from "react-router-dom";

const PatientCaring = () => {
  return (
    <Box
      py={6}
      sx={{
        background:
          "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
      }}
    >
      <Container maxWidth='xl'>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} >
            <Box
              component="img"
              src={PatientCaringBanner}
              alt="Medical Center Hero"
              sx={{ width:{xs:1, md:'40%'}}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "#2AA7FF",
                fontSize: "16px",
                fontWeight: 600,
                textAlign: "left",
                lineHeight: "27px",
              }}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              mb={1}
              sx={{
                fontSize: "48px",
                fontWeight: 600,
                textAlign: "left",
                lineHeight: "67px",
              }}
            >
              Patient <span style={{ color: "#2AA7FF" }}>Caring</span>
            </Typography>
            <Typography
              color="#5C6169"
              mb={2}
              sx={{
                textAlign: "left",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "29px",
              }}
            >
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientCaring;
