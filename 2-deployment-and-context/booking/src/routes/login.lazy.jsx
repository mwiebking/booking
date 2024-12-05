import { createLazyFileRoute } from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'
import LoginFormMathias from '../components/LoginFormMathias'

export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <LoginFormMathias />
    </div>
  )
}
