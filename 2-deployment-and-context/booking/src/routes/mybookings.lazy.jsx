import { createLazyFileRoute } from '@tanstack/react-router'
import NavbarNested from '../components/NavbarNested'
import FindRoomBar from '../components/FindRoomBar'
import Mybookingslist from '../components/RemoveBookingslist'
import { useBookingContext } from '../components/BookingContext'

export const Route = createLazyFileRoute('/mybookings')({
  component: mybookings,
})

function mybookings() {
  
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
        <FindRoomBar />

        {/* Content layout */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Medialab Info Component - 66% width */}
          <div style={{ flex: 2, paddingTop: '5rem' }}>
            <Mybookingslist />
          </div>
        </div>
      </div>
    </div>
  )
}

export default mybookings
