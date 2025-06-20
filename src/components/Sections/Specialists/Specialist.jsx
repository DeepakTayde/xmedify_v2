import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Ankur from "../../../assets/ankur.jpg";
import Ahmad from "../../../assets/ahmad.jpg";
import Stevens from "../../../assets/ahmad-stevens.jpg";
import Heena from "../../../assets/heena.jpg";
import Lesley from "../../../assets/lesley.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SpecialistCard from "./SpecialistCard";

const Specialist = () => {
  const specialists = [
    { img: Lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: Ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: Heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: Ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: Stevens, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: Lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: Ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: Heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: Ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: Stevens, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];
  return (
    <Box py={4}>
      <Typography
        variant="h2"
        fontSize="48px"
        color="#1B3C74"
        fontWeight={600}
        mb={4}
        lineHeight={1.2}
      >
        Our Medical Specialist
      </Typography>
      <Container maxWidth="xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            767: { slidesPerView: 4},

          }}
          style={{ width: "100%", paddingBottom: 40 }}
        >
          {specialists.map((specialist, index) => (
            <SwiperSlide key={index}>
                <SpecialistCard
                    img={specialist.img}
                    title={specialist.title}
                    designation={specialist.designation}

                />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Specialist;
