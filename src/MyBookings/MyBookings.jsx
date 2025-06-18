import { Box, Container } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";

const MyBookings =()=>{
    return(
    <React.Fragment>


      <Box>
      <NavBar />
        <Container maxWidth="xl">
          <h1>My Bookings</h1>
        </Container>
        
      </Box>
    </React.Fragment>
    )
}

export default MyBookings;