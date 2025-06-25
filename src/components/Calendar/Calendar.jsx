import { startOfDay } from 'date-fns';
import React from 'react'
import DaySelector from './DaySelector/DaySelector';
import TimeSlotPicker from './TimeSlotPicker/TimeSlotPicker';
import { Box } from '@mui/material';

const Calendar = ({hospitalDetails,availableSlots,handleBooking}) => {
    const [selectedDate, setSelectedDate] = React.useState(startOfDay(new Date()));

    const totalSlots = availableSlots.morning.length + availableSlots.afternoon.length + availableSlots.evening.length;
  return (
    <Box py={2}> 
        <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
        />
        <TimeSlotPicker
        hospitalDetails={hospitalDetails}
        availableSlots={availableSlots}
        handleBooking={handleBooking}
        selectedDate={selectedDate}
        />
    </Box>
  )
}

export default Calendar