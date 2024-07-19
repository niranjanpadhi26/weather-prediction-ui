import React from 'react';
import { Tabs, Tab } from '@mui/material';

const DateTabs = ({ dates, selectedDateIndex, onDateChange }) => {
  return (
    <Tabs
      value={selectedDateIndex}
      onChange={onDateChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {dates.map((date, index) => (
        <Tab key={index} label={date} />
      ))}
    </Tabs>
  );
};

export default DateTabs;
