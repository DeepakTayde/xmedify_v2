import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import OurFamiliesBanner from '../../../assets/our-families-banner.png'

const OurFamilies = () => {
  return (
    <Box
      py={6}
      sx={{
        background:
          "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        minHeight: "100vh",
        alignContent: "center",
      }}
    >
      <Container >
        <Grid container spacing={6}  alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#2AA7FF",
                fontSize: "16px",
                fontWeight: 600,
                textAlign: "left",
                lineHeight: "27px",
              }}
            >
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography
              variant="h2"
              mb={1}
              sx={{
                fontSize: "48px",
                fontWeight: 600,
                textAlign: "left",
                lineHeight: "67px",
                color:'#1B3C74'
              }}
            >
              Our Families
            </Typography>
            <Typography
              color="#77829D"
              mb={2}
              sx={{
                textAlign: "left",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "29px",
                maxWidth: 600,
              }}
            >
              We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
            </Typography>

          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={OurFamiliesBanner}
              alt="Medical Center Hero"
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                mx: "auto",
                height:'auto'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamilies;
