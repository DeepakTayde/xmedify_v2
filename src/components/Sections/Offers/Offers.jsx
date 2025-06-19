
import React from "react";
import { Box, Container } from "@mui/material";
import Offer1 from "../../../assets/offer1.png";
import Offer2 from "../../../assets/offer2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import './Offers.css';


// import 'swiper/css/scrollbar';

const Offers = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            600: { slidesPerView: 2, centeredSlides: true },
            900: { slidesPerView: 3, centeredSlides: true },
          }}
          style={{width:"100%", paddingBottom:40}}
        >
          <SwiperSlide>
            <Box component={'img'} src={Offer1} style={{width:"100%", height:"100%", objectFit:"cover"}} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={Offer2} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={Offer1} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={Offer2} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Offers;
