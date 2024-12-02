import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '@mantine/core'
import SendRequestForm from '../components/SendRequestForm'
import MedialabInfo from '../components/MedialabInfo'
import RoomBar from '../components/FindRoomBar.jsx'

export const Route = createLazyFileRoute('/_layout/medialab')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      paddingTop: '2rem',
    }}
    >
          <div style={{ flex: 1 }}>
            <RoomBar />
          </div>
      {/* Left side */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >

        {/* Medialab Info Component - 66% width */}
        <div style={{ paddingTop: '5rem' }}>
          <MedialabInfo />
        </div>

        {/* Vertical Divider */}
        <Divider orientation="vertical" style={{ height: 'auto' , marginTop: '6rem' }} />

        {/* Send Request Form Component - 33% width */}
        <div style={{ flex: 3, paddingTop: '5rem' }}>
          <SendRequestForm />
        </div>
      </div>
    </div>
  )
}
