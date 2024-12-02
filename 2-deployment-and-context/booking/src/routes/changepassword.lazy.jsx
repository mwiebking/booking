import { createLazyFileRoute } from '@tanstack/react-router'
import ChangePassword from '../components/ChangePassword'

export const Route = createLazyFileRoute('/changepassword')({
  component: ChangePasswordNow,
})

function ChangePasswordNow() {
  return (
    <div>
      <ChangePassword />
    </div>
  )
}

export default ChangePasswordNow
