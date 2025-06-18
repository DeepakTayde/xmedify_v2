import { Box, Container } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";

const Search =()=>{
    return(
    <React.Fragment>


      <Box>
      <NavBar />
        <Container maxWidth="xl">
          <h1>Search hospital</h1>
        </Container>
        
      </Box>
    </React.Fragment>
    )
}

export default Search;