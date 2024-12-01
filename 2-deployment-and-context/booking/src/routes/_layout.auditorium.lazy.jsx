import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '@mantine/core'
import SendRequestForm from '../components/SendRequestForm'
import AuditoriumInfo from '../components/AuditoriumInfo'

export const Route = createLazyFileRoute('/_layout/auditorium')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
      }}
    >
      {/* Left side */}
      <div
        style={{
          display: 'flex',
          gap: '0rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Medialab Info Component - 66% width */}
        <div style={{ flex: 3 }}>
          <AuditoriumInfo />
        </div>

        {/* Vertical Divider */}
        <Divider orientation="vertical" style={{ height: '100%' }} />
      </div>

      {/* Send Request Form Component - 33% width */}
      <div style={{ flex: 2 }}>
        <SendRequestForm />
      </div>
    </div>
  )
}
