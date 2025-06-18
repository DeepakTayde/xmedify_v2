import { Box, Button, MenuItem, Select } from "@mui/material";
import React from "react";

const SearchHospital = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        name="state"
        id="state"
        sx={{ width: "100%", minWidth: 200 }}
      >
        <MenuItem value="" disabled>
          state
        </MenuItem>
      </Select>
      <Select
        displayEmpty
        name="city"
        id="city"
        sx={{ width: "100%", minWidth: 200 }}
      >
        <MenuItem value="" disabled>
          city
        </MenuItem>
      </Select>
      <Button type="submit" variant="contained" size="large" sx={{  flexShrink:0}} disableElevation>Search</Button>
    </Box>
  );
};

export default SearchHospital;
