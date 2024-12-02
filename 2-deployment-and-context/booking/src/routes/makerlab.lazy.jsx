import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '@mantine/core'
import SendRequestForm from '../components/SendRequestForm'
import MakerlabInfo from '../components/MakerlabInfo'
import RoomBar from '../components/FindRoomBar.jsx'
import NavbarNested from '../components/NavbarNested'

export const Route = createLazyFileRoute('/makerlab')({
  component: RouteComponent,
})

function RouteComponent() {
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
        <RoomBar />

        {/* Content layout */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Makerlab Info Component - 66% width */}
          <div style={{ flex: 2, paddingTop: '5rem' }}>
            <MakerlabInfo />
          </div>

          {/* Vertical Divider */}
          <Divider
            orientation="vertical"
            style={{ height: 'auto', marginTop: '6rem' }}
          />

          {/* Send Request Form Component - 33% width */}
          <div style={{ flex: 1, paddingTop: '5rem' }}>
            <SendRequestForm />
          </div>
        </div>
      </div>
    </div>
  )
}
