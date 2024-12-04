// src/data/generateBookings.js
import { rooms, timeSlots } from "./roomsAndTimeSlots";

export function generateBookings(startDate = new Date(), monthsAhead = 3) {
  const bookings = [];
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + monthsAhead);

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    rooms.forEach((room) => {
      timeSlots.forEach((timeSlot) => {
        bookings.push({
          roomId: room.id,
          roomName: room.name,
          capacity: room.capacity,
          features: room.features,
          date: d.toISOString().split("T")[0], // Format YYYY-MM-DD
          timeSlot,
        });
      });
    });
  }

  return bookings;
}
