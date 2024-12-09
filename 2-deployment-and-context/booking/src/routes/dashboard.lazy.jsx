import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import RoomBar from '../components/FindRoomBar.jsx';
import NavbarNested from '../components/NavbarNested'; // Import the NavbarNested component
import { Divider } from '@mantine/core'; // Import Divider from Mantine
import AvailableRooms from '../components/AvaiableRooms';
import Filtrer from '../components/Filtrer';
import Mybookingslist from '../components/Mybookingslist.jsx';

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
        {/* RoomBar */}
        <RoomBar />

        {/* Content layout */}
        <div style={{ display: 'flex', gap: '1rem', paddingTop: '2rem' }}>
          {/* AvailableRooms Component - 66% width */}
          <div style={{ flex: 2 }}>
            {/* <AvailableRooms /> */}
          </div>

          {/* Vertical Divider */}
          <Divider orientation="vertical" style={{ height: 'auto' }} />

          {/* Filtrer Component - 33% width */}
          <div style={{ flex: 1 }}>
            <Mybookingslist />
          </div>
        </div>
      </div>
    </div>
  );
}
