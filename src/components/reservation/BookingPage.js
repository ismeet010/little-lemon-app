import React, { useState } from 'react'
import "./reservation.css"
import BookingForm from './BookingForm';

const BookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState("")
  const availableTimes = ["12", "2", "4", "6", "8"];

  // Define a function to handle form data in BookingPage
  const handleReservation = (formData) => {
    // Perform actions with the form data in BookingPage
    console.log('Form data in BookingPage:', formData);
    // Add your logic here (e.g., make an API request, update state, etc.)
    setBookingDetails(`your booking for date ${formData.date} has been successful!!`)
  };


  return (
    <div className="reserDiv">
      <h2 className="white-bold">Table Reservation</h2>
      <BookingForm availableTimes={availableTimes} onReservation={handleReservation}  />

      <div>{bookingDetails}</div>
    </div>
  );
};

export default BookingPage;