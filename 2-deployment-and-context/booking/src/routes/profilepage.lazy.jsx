import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { ProfileInfo } from '../components/ProfilePage' // Import the ProfileInfo component
import NavbarNested from '../components/NavbarNested' // Import the Navbar component

export const Route = createLazyFileRoute('/profilepage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left side: Navbar - no styling, as it is handled in NavbarNested */}
      <div
        style={{
          width: 300, // Fixed width for the navbar container
          height: '100%', // Full height of the viewport
        }}
      >
        <NavbarNested /> {/* Navbar is rendered here without additional styling */}
      </div>

      {/* Right side: Main content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        {/* ProfileInfo Component */}
        <ProfileInfo />
      </div>
    </div>
  )
}
