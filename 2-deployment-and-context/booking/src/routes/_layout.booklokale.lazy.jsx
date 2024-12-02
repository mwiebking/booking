import FilterSearch from '../components/Filtrer'
import { createLazyFileRoute } from '@tanstack/react-router'
import RoomBar from '../components/FindRoomBar.jsx'

export const Route = createLazyFileRoute('/_layout/booklokale')({
  component: RouteComponent,
})

function RouteComponent() {
  

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
          {/* FilterSearch on the left */}
      <div style={{ flex: 1 }}>
        <RoomBar />
        <FilterSearch />
      </div>
    </div>
  )
}
