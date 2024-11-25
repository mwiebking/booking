import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { ProfileInfo } from '../components/ProfilePage' // Import the ProfileInfo component

export const Route = createLazyFileRoute('/profilepage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProfileInfo /> // Render the ProfileInfo component
}
