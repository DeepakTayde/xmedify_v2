import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <Box py={6}>
      <Container>
        <Typography
          sx={{
            fontSize: "16",
            color: "primary.main",
            fontWeight: 600,
          }}
          lineHeight={1.2}
          textAlign="center"
        >
          {" "}
          Blog & News
        </Typography>
        <Typography
          variant="h2"
          fontSize="48px"
          color="#1B3C74"
          fontWeight={600}
          mb={2}
          textAlign="center"
          lineHeight={1.2}
        >
          Read Our Latest News
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
