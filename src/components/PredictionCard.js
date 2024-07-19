import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const PredictionCard = ({ prediction }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Date: {prediction.date}
      </Typography>
      <Grid container spacing={2}>
        {prediction.alertList.map((alert, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://openweathermap.org/img/wn/${alert.icon}@4x.png`}
                alt={alert.description}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Time: {alert.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Temp: {alert.temp}°C
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  High: {alert.highTemp}°C, Low: {alert.lowTemp}°C
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {alert.description}
                </Typography>
                {alert.alertMsg && (
                  <Typography variant="body2" color="error">
                    Alert: {alert.alertMsg}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PredictionCard;
