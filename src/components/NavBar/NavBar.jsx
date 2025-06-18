import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Find Doctors", path: "/doctors" },
    { label: "Hospitals", path: "/search" },
    { label: "Medicines", path: "/medicines" },
    { label: "Surgeries", path: "/surgeries" },
    { label: "Software for Provider", path: "/software" },
    { label: "Facilities", path: "/facilities" },
  ];

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            spacing: 2,
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 27, background: "transparent" }}
            />
          </Link>

          <Stack direction="row" spacing={4} alignItems="center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: "none",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  color:
                    location.pathname === item.path ? "#2AA7FF" : "#102851",
                  borderBottom:
                    location.pathname === item.path
                      ? "4px solid #2AA7FF"
                      : "2px solid transparent",
                  paddingBottom: "4px",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </header>
  );
};

export default NavBar;
