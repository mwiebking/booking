import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dashboard-student')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Welcome to the Student Dashboard</h1>
      {/* Add other components or features specific to the student dashboard here */}
    </div>
  )
}
