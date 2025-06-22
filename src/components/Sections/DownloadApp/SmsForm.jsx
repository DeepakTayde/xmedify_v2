import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SmsForm = () => {
  return (
    <Box mb={5}>
      <Typography
        sx={{ textAlign: "left", color: "#414146", fontWeight: 600 }}
        mb={1}
      >
        Get the link to download the app
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          placeholder="Enter phone number"
          sx={{ border: "1px solid #F0F0F0", flex: 1, borderRadius: "8px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        //   startAdornment={<InputAdornment position="start">+91</InputAdornment>}
        />
        <Button type="submit" variant="contained" size="large" disableElevation>
          Send SMS
        </Button>
      </Box>
    </Box>
  );
};

export default SmsForm;
