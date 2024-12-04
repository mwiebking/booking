// src/components/BookingList.jsx
import React, { useState, useEffect } from "react";
import { generateBookings } from "../data/generateBookings";
import RoomCard from "./RoomCard";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const generatedBookings = generateBookings(new Date(), 3); // Generate 3 months of bookings
    setBookings(generatedBookings);
  }, []);

  return (
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
      {bookings.map((booking, index) => (
        <RoomCard
          key={index}
          roomName={booking.roomName}
          capacity={booking.capacity}
          features={booking.features}
          timeSlot={booking.timeSlot}
          date={booking.date}
        />
      ))}
    </div>
  );
}

export default BookingList;
