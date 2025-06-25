import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import hospitalIcon from "../../assets/hospitalIcon.png";
import ThumbIcon from "../../assets/thumbsup.png";
import { format } from "date-fns";
import Calendar from "../Calendar/Calendar";

const HospitalCard = ({
  hospitalDetails,
  availableSlots,
  handleBooking,
  booking = false,
}) => {
  const [showCalendar, setShowCalendar] = React.useState(false);
  console.log("Fetched hospitals:", hospitalDetails);

  return (
    <Box
      sx={{ bgcolor: "#fff", p: { xs: 2, md: 4 } }}
      mb={3}
      borderRadius={"15px"}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        <Box
          component={"img"}
          src={hospitalIcon}
          alt="hospital icon"
          width={{ xs: "64px", md: "140px" }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            component="h3"
            lineHeight={1}
            mb={1}
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: { xs: 18, md: 20 },
              textTransform: "capitalize",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: "inherit",
                color: "inherit",
                textTransform: "capitalize",
              }}
            >
              {hospitalDetails["Hospital Name"]}
            </h3>
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={700}
            color="#414146"
            textTransform="capitalize"
          >{`${hospitalDetails["City"].toLowerCase()}, ${
            hospitalDetails["State"]
          }`}</Typography>
          <Typography fontSize={14} color="#414146" mb={1}>
            {hospitalDetails["Hospital Type"]}
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} spacing={"5px"} mb={2}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#02A401",
                textTransform: "uppercase",
              }}
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ mb: 2, borderStyle: "dashed" }} />
          <Stack
            direction={"row"}
            spacing={"4px"}
            alignItems={"center"}
            borderRadius={"4px"}
            width="fit-content"
            sx={{ bgcolor: "#00A500", py: "4px", px: 1 }}
          >
            <Box
              component={"img"}
              src={ThumbIcon}
              width={{ sx: 14, md: 16 }}
              height={{ sx: 14, md: 16 }}
            />
            <Typography
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
              fontWeight={700}
            >
              {hospitalDetails["Hospital overall rating"] === "Not Available"
                ? 0
                : hospitalDetails["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth={{ xs: "100%", md: "23%" }}
        >
          {!booking && (
            <>
              <Typography
                textAlign={"center"}
                fontWeight={500}
                color="#01A400"
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: "4px",
                  border: "1px solid #14BEF0",
                  bgcolor: "#2AA7FF",
                  fontWeight: 500,
                }}
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calender"}
              </Button>
            </>
          )}

          {booking && (
            <Stack spacing={1} direction={"row"} mt={{ xs: 2, md: 0 }}>
              <Chip
                variant={"outlined"}
                color="primary"
                borderRadius={1}
                fontSize={14}
                label={hospitalDetails.bookingTime}
              />
              <Chip
                variant={"outlined"}
                color="success"
                borderRadius={1}
                fontSize={14}
                label={format(
                  new Date(hospitalDetails.bookingDate),
                  "dd MMMM yyyy"
                )}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {showCalendar && (
        <Calendar
          hospitalDetails={hospitalDetails}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
};

export default HospitalCard;
