import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from '../../assets/logo.png'
import FB from '../../assets/fb.png'
import Twitter from '../../assets/twitter.png'
import YT from '../../assets/yt.png'
import Pinterest from '../../assets/pinterest.png'
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.secondary',
        paddingBottom:5,
        paddingTop: 6,
        
      }}
      mt={0}
    >
      <Container >
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} md={4.5}>
            <Stack alignItems='flex-start' justifyContent='space-between' height='100%'>
                <Box component='img' src={Logo} height={36} alt="Medify logo" mb={2}/>
                <Stack direction='row' spacing={1.5}>
                <Box component='img' src={FB} alt="fb logo" height={36} mb={2}/>
                <Box component='img' src={Twitter} alt="twitter logo" height={36} mb={2}/>
                <Box component='img' src={YT} alt="yt logo" height={36} mb={2}/>
                <Box component='img' src={Pinterest} alt="pinterest logo" height={36} mb={2}/>
                </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Pricing</FooterLink>
            <FooterLink>Our Gallery</FooterLink>
            <FooterLink>Appointment</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
                      <Stack spacing={2}>
            <FooterLink>Orthology</FooterLink>
            <FooterLink>Neurology</FooterLink>
            <FooterLink>Dental Care</FooterLink>
            <FooterLink>Opthalmology</FooterLink>
            <FooterLink>Cardiology</FooterLink>
            </Stack></Grid>
          <Grid item xs={12} md={2.5}>
                      <Stack spacing={2}>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Pricing</FooterLink>
            <FooterLink>Our Gallery</FooterLink>
            <FooterLink>Appointment</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            </Stack></Grid>
        </Grid>
        <Typography textAlign='left' color="#fff" fontSize={16} pt={3} mt={5} fontWeight={400} lineHeight='28px' borderTop='1px solid rgba(255, 255, 255, 0.1)'>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
