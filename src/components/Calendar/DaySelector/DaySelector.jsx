import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./DaySelector.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { add, format, isEqual, startOfDay } from "date-fns";
import { SlideNextButton, SlidePrevButton } from "./SliderButtons";

const DaySelector = ({ selectedDate, setSelectedDate, totalSlots }) => {
  const date = startOfDay(new Date());
  const dateItems = [];

  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
  }

  const customDateFormat = (day) => {
    if (isEqual(date, day)) {
      return "Today";
    } else if (isEqual(date, add(day, { days: -1 }))) {
      return "Tomorrow";
    } else {
      return format(day, "E, d LLL");
    }
  };

  const handleClick = (day) => {
    setSelectedDate(day); 
  }

  return (
    <Stack position={"relative"} pt={3}>
      <Divider mb={3} />
      <Box pt={2} px={{ xs: 2, md: 0 }} className={styles.swiperContainer}>
        <Swiper
          slidesPerView={4}
          spaceBetween={11}
          className={styles.swiperStyles}
          loop={false}
          breakpoints={{
            786: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {dateItems.map((day, index) => (
            <SwiperSlide key={index} className={styles.swiperslide}>
              <Stack
                textAlign={"center"}
                sx={{ cursor: "pointer" }}
                onClick={()=>handleClick(day)}
                px={2}
                
              >
                <Typography
                  fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                  fontSize={{ xs: 12, md: 16 }}
                >
                  {customDateFormat(day)}
                </Typography>
                <Typography
                  sx={{ color: "#01A400", fontSize: { xs: 8, md: 12 } }}
                >
                  {`${totalSlots} Slots Available`}
                </Typography>
                <Box
                  sx={{
                    width: { xs: 1, md: "calc(100% - 50px)" },
                    height: { xs: "4px", md: "5px" },
                    position: "relative",
                    bottom: 0,
                    mt: "5px",
                    bgcolor: isEqual(day, selectedDate)
                      ? "primary.main"
                      : "rgba(0, 0, 0, 0)",
                  }}
                  left={0}
                  zIndex={999}
                  mx={"auto"}
                ></Box>
              </Stack>
            </SwiperSlide>
          ))}

          <span slot="container-start">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <SlidePrevButton />
            </Box>
          </span>

          <span slot="container-end">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <SlideNextButton />
            </Box>
          </span>
        </Swiper>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: { xs: "100%", md: "calc(100% - 150px)" },
          height: { xs: "4px", md: "5px" },
          translate: "-50% 0",
          mt: "5px",
          bgcolor: "#F0F0F5",
        }}
      ></Box>
    </Stack>
  );
};

export default DaySelector;
