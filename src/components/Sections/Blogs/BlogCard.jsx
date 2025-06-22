import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BlogThumbnail from "../../../assets/blog.jpg";
import Person from "../../../assets/person.png";

const BlogCard = () => {
  return (
    <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
      <Box component="img" src={BlogThumbnail} alt="Blog Thumbnail" sx={{width:'100%', maxWidth:350,  objectFit:'cover'}} borderRadius={2}  />
      <Box p={2} textAlign='left'>
        <Typography fontWeight={500} fontSize={{xs:12, md:16}} mb={1}  color="#77829D">Medical | March 31, 2022</Typography>
        <Typography component='h3' color="#1B3C74" fontWeight={500} maxWidth={300}fontSize={{xs:14, md:18}} mb={2} lineHeight='100%'>
          6 Tips To Protect Your Mental Health When You’re Sick
        </Typography>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Box component="img" src={Person} height={32} width={32}  />
          <Typography color="#1B3C74" fontSize={{xs:'12px', md:'17px'}}>Rebecca Lee </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default BlogCard;
