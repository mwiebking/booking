import { createLazyFileRoute } from '@tanstack/react-router'
import SignUpForm from '../components/SignUpForm'

export const Route = createLazyFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <SignUpForm />
    </div>
  )
}
