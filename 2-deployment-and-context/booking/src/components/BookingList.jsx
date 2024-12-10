import React, { useState, useEffect } from 'react';
import { generateBookings } from '../data/generateBookings';
import RoomCard from './RoomCard';
import { useBookingContext } from '../components/BookingContext';

function BookingList({context}) {
  const { filters } = useBookingContext();
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Generate bookings on component mount
  useEffect(() => {
    const generatedBookings = generateBookings(new Date(), 1); // Generate 3 months of bookings
    setBookings(generatedBookings);
    setFilteredBookings(generatedBookings);
  }, []);

  // Filter bookings when filters or bookings change
  useEffect(() => {
    const { selectedDate, selectedTimeSlots, selectedFeatures } = filters;

    const filtered = bookings.filter((booking) => {
      const dateMatch =
        !selectedDate ||
        booking.date === selectedDate.toLocaleDateString('en-CA'); // Normalize selectedDate to "YYYY-MM-DD"
      const timeSlotMatch =
        selectedTimeSlots.length === 0 || selectedTimeSlots.includes(booking.timeSlot);
      const featuresMatch =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => booking.features.includes(feature));

      return dateMatch && timeSlotMatch && featuresMatch;
    });

    setFilteredBookings(filtered);
  }, [filters, bookings]);

  return (
    <div style={{ display: 'grid', gap: '20px' }}>
      {filteredBookings.map((booking, index) => (
        <RoomCard context={context}
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
