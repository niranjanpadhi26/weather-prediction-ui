import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import CitySelector from './components/CitySelector';
import PredictionCard from './components/PredictionCard';

const App = () => {
  const [city, setCity] = useState('London');
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetchPredictions(city);
  }, [city]);

  const fetchPredictions = async (city) => {
    try {
      const response = await axios.get(`http://localhost:8080/getPredictions?city=${city}`);
      setPredictions(response.data.predictionList);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Weather Predictions
      </Typography>
      <CitySelector city={city} onCityChange={handleCityChange} />
      <Grid container spacing={3}>
        {predictions.map((prediction, index) => (
          <Grid item xs={12} key={index}>
            <PredictionCard prediction={prediction} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
