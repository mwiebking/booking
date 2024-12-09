import { rooms, timeSlots } from './roomsAndTimeSlots';


export function generateBookings(startDate = new Date(), monthsAhead = 1) {
    const bookings = [];
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + monthsAhead);
  
    const formatDate = (date) => {
      // Format the date to YYYY-MM-DD in local time
      return date.toLocaleDateString('en-CA'); // 'en-CA' gives the format "YYYY-MM-DD"
    };
  
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      rooms.forEach((room) => {
        timeSlots.forEach((timeSlot) => {
          bookings.push({
            roomId: room.id,
            roomName: room.name,
            capacity: room.capacity,
            features: room.features,
            date: formatDate(new Date(d)), // Use the normalized local date
            timeSlot,
          });
        });
      });
    }
  
    return bookings;
  }
  