import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ bookingList, filterList }) => {
    const [inputText, setInputText] = React.useState("");

    const filteredList = useMemo(() => {
        if (!inputText.trim()) return bookingList;
        const lowerCaseInput = inputText.toLowerCase();
        return bookingList.filter((booking) =>
            booking['Hospital Name'].toLowerCase().includes(lowerCaseInput)
        );

    }, [ inputText, bookingList]);



  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        filterList(filteredList)
    }}
    >
      <Stack direction={'row'} spacing={2} >
        <TextField
            type='text'
            label="Search by Hospital"
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    border: "1px solid #F0F0F0",
                    color: "#ABB6C7",
                    fontSize: "14px",
                    fontWeight: 400,


                    
                },
            }}
            // inputProps={{maxLength: 110}}
        />

        <Button
          type="submit"
          variant="contained"
          id="searchBtn"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
