import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import CTA from "../assets/cta.jpg";

const MyBookings = () => {
  const [bookings, setBookings] = React.useState([]);
  const [filteredBookings, setFilteredBookings] = React.useState([]);

  React.useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  React.useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);



  return (
    <React.Fragment>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241, 247, 255, 0.47) )",

          pl: 0,
        }}
        width="100%"
      >
        <Box
          sx={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            position: "relative",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
          mb={"50px"}
          pt={{ xs: 3, md: 1 }}
        >
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 0, md: 5 },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                pb={1}
                fontSize={{ xs: 36, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>
              <Box
                flexGrow={1}
                bgcolor={"#fff"}
                borderRadius={'15px'}
                sx={{
                  boxShadow: "0 0 10px rgba(0,0,0, 0.1)",
                  p: { xs: 3, md: 5 },
                  width: { xs: "100%", md: "auto" },
                  translate: '0 50px',
                }}
              >
                <SearchBar
                  bookingList={bookings}
                  filterList={setFilteredBookings}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack
            alignItems={{ xs: "center", md: "flex-start" }}
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"

          >
            <Stack
              sx={{
                width: { xs: "100%", md: "calc(100% - 360px)" },
                mb: { xs: 4, md: 0 },
                mr: { xs: 0, md: "24px" },
              }}
              spacing={3}
            >
              {filteredBookings.length > 0 &&
                filteredBookings.map((hospital, index) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    hospitalDetails={hospital}
                    booking={true}
                  />
                ))}

              {filteredBookings.length === 0 && (
                <Box textAlign="center" mt={5}>
                  <Typography
                    component="h2"
                    p={3}
                    borderRadius={2}
                    color="#fff"
                  >
                    No bookings found
                  </Typography>
                </Box>
              )}
            </Stack>

            <Box
              component={"img"}
              src={CTA}
              alt="cta-banner"
              width={{ xs: "100%", md: "360px" }}
              sx={{
                display: "block",
                margin: "0 auto",
                borderRadius: "15px",
              }}
            />
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default MyBookings;
