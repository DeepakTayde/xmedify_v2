import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Mobile from "../../../assets/mobile.jpg";
import Arrow from '../../../assets/arrow.png'
import PlayStoreLogo from '../../../assets/playstore.png'
import AppleStoreLogo from '../../../assets/apple-logo.png'
import SmsForm from "./SmsForm";

const DownloadApp = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",

        alignContent: "center",
        paddingTop: 5,
      }}
      mb={0}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5.5}>
            <Box
              component="img"
              src={Mobile}
              alt="Medical Center Hero"
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6.5}>
            <Box position="relative"
            pl={{xs:'36px', md: '50px'}} mb={{xs:4, md:0}}>
            
              <Typography
              variant="h2"
                              sx={{
                  color: "#1B3C74",
                  fontSize: "48px",
                  fontWeight: 600,
                  textAlign: "left",
                  lineHeight: "56px",
                }}
                mb={2}
              >
                Download the 
                <br/>
                <Box component='span' color='primary.main' >
                    Medify
                </Box>
                App
              </Typography>
              <Box component='img' src={Arrow} position='absolute' left={0} top={50} width={{xs:24, md:40}}/>
              <SmsForm/>
              <Stack direction={{sx:"column", md:"row"}} spacing={{sx:1, md:2}}>
                <Button variant="contained" startIcon={<img src={PlayStoreLogo} height={24} alt="play store"/>}  disableElevation size="large" sx={{bgcolor:'#333', color:'#fff', py:1.5, borderRadius:1.5}}>Google Play</Button>
                <Button variant="contained"  disableElevation size="large" startIcon={<img src={AppleStoreLogo} alt="apple store" height={24}/>} sx={{bgcolor:'#333', color:'#fff', py:1.5, borderRadius:1.5}}>Apple Store</Button>
              </Stack>
              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
