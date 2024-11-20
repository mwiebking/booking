import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { NavbarNested } from '../components/NavbarNested'

export const Route = createLazyFileRoute('/dashboard-student')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Welcome to the Student Dashboard</h1>
    </div>
  )
}
