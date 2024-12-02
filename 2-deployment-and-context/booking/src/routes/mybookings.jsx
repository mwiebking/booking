import { createFileRoute } from '@tanstack/react-router'
import NavbarNested from '../components/NavbarNested'

export const Route = createFileRoute('/mybookings')({
  component: mybookings,
})

function mybookings() {
  return (
  <>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        {/* Navbar - Styling removed */}
        <div style={{ width: 300, height: '100%' }}>
          <NavbarNested />
        </div>

        {/* Main content - Takes the remaining space */}
        
      </div>    
    </>
)}


export default mybookings