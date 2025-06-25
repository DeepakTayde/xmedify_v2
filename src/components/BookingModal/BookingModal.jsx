import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";

const BookingModal = ({
  open,
  setOpen,
  bookingDetails,
  showSuccessMessage,
}) => {
  const [email, setEmail] = React.useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();
    const prevBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...prevBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );
    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];

    function triggerFirstVisitEvent() {
      window.dataLayer.push({
        event: "firstVisit",
        eventDate: new Date().toISOString(),
      });
    }

    triggerFirstVisitEvent();
  };

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);

      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        width={{ xs: "90%", sm: "90%", md: "95%" }}
        maxWidth={{ xs: "400px", sm: "500px", md: "600px" }}
        bgcolor="#fff"
        borderRadius={2}
        boxShadow={24}
        p={{ xs: 3, md: 4 }}
        position={"absolute"}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        outline="none"
      >
        <Typography variant="h3" component="h3">
          Confirm Booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please Enter Your Email to Confirm Booking for
          </Box>
          <Box component="span" fontWeight={600}>
            {` ${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>

        <form onSubmit={handleBooking}>
          <Stack spacing={2} alignItems={"flex-start"}>
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <Stack spacing={1} direction={"row"}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
