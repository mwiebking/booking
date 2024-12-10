import React, { createContext, useContext, useState } from 'react';

// Create the context
const BookingContext = createContext();

// Provider component
export function BookingProvider({ children }) {
  const [filters, setFilters] = useState({
    selectedDate: null,
    selectedTimeSlots: [],
    selectedFeatures: [],
    selectedCapacity: [],
  });

  return (
    <BookingContext.Provider value={{ filters, setFilters }}>
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook to use the context
export function useBookingContext() {
  return useContext(BookingContext);
}

export default BookingContext