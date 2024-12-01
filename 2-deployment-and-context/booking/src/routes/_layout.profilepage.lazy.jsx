import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { ProfileInfo } from '../components/ProfilePage' // Import the ProfileInfo component

export const Route = createLazyFileRoute('/_layout/profilepage')({
  component: RouteComponent,
})

function RouteComponent() {

  const parentpage = {
    display: 'flex',
 }

  return (
  <div style={parentpage}>
    <ProfileInfo />
    </div>

) // Render the ProfileInfo component
}
