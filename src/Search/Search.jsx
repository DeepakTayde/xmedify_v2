import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import Tick from "../assets/tick.png";
import CTA from "../assets/cta.jpg";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import BookingModal from "../components/BookingModal/BookingModal";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = React.useState(searchParams.get("state") || "");
  const [city, setCity] = React.useState(searchParams.get("city") || "");
  const [hospitals, setHospitals] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [bookingDetails, setBookingDetails] = React.useState({});
  const [showBookingSuccess, setShowBookingSuccess] = React.useState(false);

  const Slots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  React.useEffect(() => {
    const fetchHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setIsLoading(false);
      }
    };
    if (state && city) {
      fetchHospitals();
    }
  }, [state, city]);

  React.useEffect(() => {
    const newState = searchParams.get("state") || "";
    const newCity = searchParams.get("city") || "";
    setState(newState);
    setCity(newCity);
  }, [searchParams]);

  const handleBookingModal = (hospitalDetails) => {
    setBookingDetails(hospitalDetails);
    setIsModalOpen(true);
  };

  return (
    <React.Fragment>
      <NavBar />
      <Box
        sx={{
          background:
            "linear-gradient(#EFF5FE, rgba(241, 247, 255, 0.47) )",
          
            pl:0
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
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              mb: "50px",
              transform: "translatey(50px)",
              p: 3,
              boxShadow: "0 0 10px rgba(0,0,0, 0.1)",
            }}
          >
            <SearchHospital />
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {hospitals.length > 0 && (
            <Box textAlign="left" mb={2}>
              <Typography
                component="h1"
                fontSize={24}
                mb={2}
                fontWeight={500}
                lineHeight={1.1}
              >
                {`${hospitals.length} medical centers available in`}{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLowerCase()}
                </span>
              </Typography>
              <Stack spacing={2} direction="row">
                <Box
                  component="img"
                  src={Tick}
                  height={24}
                  width={24}
                  alt="tick-icon"
                />
                <Typography lineHeight={1.4} color="#787887">
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack
            alignItems={"flex-start"}
            direction={{ xs: "column", md: "row" }}
            spacing={2}
          >
            <Stack
              sx={{
                width: { xs: "100%", md: "calc(100% - 360px)" },
                mb: { xs: 4, md: 0 },
                mr: { xs: 0, md: '24px' },
              }}
              spacing={3}
            >
              {hospitals.length > 0 &&
                hospitals.map((hospital, index) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    hospitalDetails={hospital}
                    availableSlots={Slots}
                    handleBooking={handleBookingModal}
                  />
                ))}

              {hospitals.length === 0 && !isLoading && (
                <Box textAlign="center" mt={5}>
                  <Typography
                    component="h3"
                    p={3}
                    borderRadius={2}
                    color="#fff"
                  >
                    Loading....
                  </Typography>
                </Box>
              )}

              {!state && !city && (
                <Box textAlign="center" mt={5}>
                  <Typography
                    component="h3"
                    p={3}
                    borderRadius={2}
                    color="#fff"
                  >
                    Please select a state and city
                  </Typography>
                </Box>
              )}
            </Stack>

            <Box
              component={"img"}
              src={CTA}
              alt="cta-banner"
              width={{xs: "100%", md: "360px"}}
              height="auto"
              sx={{
                display: "block",
                margin: "0 auto",
                borderRadius: "15px",
              }}
            />
          </Stack>
        </Container>
        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />
      </Box>
    </React.Fragment>
  );
};

export default Search;
