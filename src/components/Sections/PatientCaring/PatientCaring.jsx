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
import PatientCaringBanner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

const PatientCaring = () => {
  return (
    <Box
      py={6}
      sx={{
        background:
          "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          minHeight: "100vh",
          alignContent:'center'
      }}
    >
      <Container >
        <Grid container spacing={6} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={PatientCaringBanner}
              alt="Medical Center Hero"
              sx={{width:'100%', maxWidth:500, display:'block', mx:'auto'}}
            />
          </Grid>
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
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography
              variant="h2"
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
              color="#77829D"
              mb={2}
              sx={{
                textAlign: "left",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "29px",
                maxWidth:600
              }}
            >
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>
            <List fontSize={{ xs: 14, md: 18 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Stay Updated About Your Health"
                  fontSize={{ xs: 14, md: 18 }}
                  fontWeight={500}
                  color="#1B3C74"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Check Your Results Online"
                  fontSize={{ xs: 14, md: 18 }}
                  fontWeight={500}
                  color="#1B3C74"
                />
              </ListItem>
                            <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Your Appointments"
                  fontSize={{ xs: 14, md: 18 }}
                  fontWeight={500}
                  color="#1B3C74"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientCaring;
