import * as React from 'react'
import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import { ForgotPassword } from '../components/ForgotPassword'

export const Route = createLazyFileRoute('/forgotpassword')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <ForgotPassword />
    </div>
  )
}
