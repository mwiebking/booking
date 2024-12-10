import BookingList from '../components/BookingList.jsx';
import FilterSearch from '../components/Filtrer';
import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router';
import { Divider } from '@mantine/core';
import NavbarNested from '../components/NavbarNested';
import RoomBar from '../components/FindRoomBar.jsx';
import BookingContext from '../components/BookingContext.jsx';

export const Route = createLazyFileRoute('/booklokale')({
  component: RouteComponent,
});

function RouteComponent() {
  const context = useRouteContext({ from: '/booklokale' });
  
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left side: Navbar */}
      <div
        style={{
          width: 300,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          backgroundColor: '#2c2e33',
        }}
      >
        <NavbarNested />
      </div>

      {/* Right side: Main content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        {/* RoomBar */}
        <RoomBar />

        {/* Content layout */}
        <div style={{ display: 'flex', gap: '1rem', paddingTop: '2rem' }}>
          {/* FilterSearch Component - 66% width */}
          <div style={{ flex: 2 }}>
            <FilterSearch />
          </div>

          {/* Vertical Divider */}
          <Divider orientation="vertical" style={{ height: 'auto' }} />

          {/* AvailableRooms Component - 33% width */}
          <div style={{ flex: 3 }}>
            <BookingList context={context}/>
          </div>
        </div>
      </div>
    </div>
  );
}
