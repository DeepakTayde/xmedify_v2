import { Box, Button, InputAdornment, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const SearchHospital = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate()

  useEffect(() => {
    const getStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        //   console.log("States>>", response.data);

        setStates(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getStates();
  }, []);

  useEffect(() => {
    const getCities = async () => {
        setCities([]);
        setFormData((prev)=> ({...prev, city:""}))
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    formData.state !== "" && getCities();
  }, [formData.state]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(formData.state && formData.city){
        navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        textAlign:"start",
        alignItems:"flex-end"
      }}
    >
      <Select
        displayEmpty
        name="state"
        id="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ width: "100%", minWidth: "200px"  }}

      >
        <MenuItem  value="" disabled sx={{justifyContent:'flex-start'}}>
          state
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      <Select
        displayEmpty
        name="city"
        id="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ width: "100%", minWidth: 200 }}
      >
        <MenuItem value="" disabled sx={{justifyContent:'flex-start'}}>
          city
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city} sx={{justifyContent:'flex-start'}}>
            {city}
          </MenuItem>
        ))}
      </Select>
      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py:"15px", flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchHospital;
