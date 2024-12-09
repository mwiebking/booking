import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import RoomBar from '../components/FindRoomBar.jsx';
import NavbarNested from '../components/NavbarNested'; // Import the NavbarNested component
import { Divider } from '@mantine/core'; // Import Divider from Mantine
import AvailableRooms from '../components/AvaiableRooms';
import Filtrer from '../components/Filtrer';
import Mybookingslist from '../components/Mybookingslist.jsx';
import Bookingslist from '../components/BookingList.jsx';
import { BookingProvider } from '../components/BookingContext.jsx';

export const Route = createLazyFileRoute('/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left side: Navbar */}
      <div>
        <NavbarNested />
      </div>

      {/* Right side: Main content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        {/* Wrap RoomBar and Bookingslist in BookingProvider */}
        <BookingProvider>
          <RoomBar />
          
          {/* Content layout */}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '2rem' }}>
            {/* Bookingslist - 66% width */}
            <div style={{ flex: 2 }}>
              <Bookingslist />
            </div>

            {/* Vertical Divider */}
            <Divider orientation="vertical" style={{ height: 'auto' }} />

            {/* Mybookingslist - 33% width */}
            <div style={{ flex: 1 }}>
              <Mybookingslist />
            </div>
          </div>
        </BookingProvider>
      </div>
    </div>
  );
}
