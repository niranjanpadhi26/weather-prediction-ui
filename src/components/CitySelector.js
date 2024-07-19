import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, CircularProgress } from '@mui/material';
import axios from 'axios';

const CitySelector = ({ city, onCityChange }) => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchTerm}&type=city&limit=5&apiKey=e09618ee2c104b189471a55e16e0fe9f`);
        setCities(response.data.features.map((feature) => feature.properties.city));
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchCities();
    }
  }, [searchTerm]);

  return (
    <FormControl fullWidth>
      <TextField
        label="Search City"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <InputLabel>City</InputLabel>
          <Select value={city} onChange={onCityChange}>
            {cities.map((cityName, index) => (
              <MenuItem key={index} value={cityName}>
                {cityName}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </FormControl>
  );
};

export default CitySelector;
