import { Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const TimeSlotPicker = ({
  hospitalDetails,
  availableSlots,
  handleBooking,
  selectedDate,
}) => {
  const CustomChip = (props) => (
    <Chip
      variant="outlined"
      color="primary"
      label={props.label}
      mr={{ xs: 1, md: 3 }}
      mt={{ xs: 1, md: 0 }}
      onClick={props.handleClick}
      sx={{
        fontSize: { xs: 12, md: 14 },
        borderRadius: "5px",
        cursor: "pointer",
        ml: { xs: 0, md: 1 },
        "&:nth-of-type(1)": {
          ml: "0",
        },
      }}
    />
  );

  const handleClick = (slot) => {
    handleBooking({
      ...hospitalDetails,
      bookingDate: selectedDate,
      bookingTime: slot,
    });
  };

  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
      pt={3}
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems={"center"}
          px={{ xs: 0, md: 6 }}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          {availableSlots.morning.map((slot, index) => (
            <CustomChip
              key={`${slot}-${index}`}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems={"center"}
          px={{ xs: 0, md: 6 }}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          {availableSlots.afternoon.map((slot, index) => (
            <CustomChip
              key={`${slot}-${index}`}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems={"center"}
          px={{ xs: 0, md: 6 }}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          {availableSlots.evening.map((slot, index) => (
            <CustomChip
              key={`${slot}-${index}`}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default TimeSlotPicker;
