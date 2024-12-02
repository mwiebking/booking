import AvailableRooms from '../components/AvaiableRooms'
import FilterSearch from '../components/Filtrer'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '@mantine/core'

export const Route = createLazyFileRoute('/_layout/booklokale')({
  component: RouteComponent,
})

function RouteComponent() {
  

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
          {/* FilterSearch on the right */}
      <div style={{ flex: 2 }}>
        <FilterSearch />
      </div>
      {/* Vertical Divider */}
      <Divider orientation="vertical" style={{ height: '100%' }} />
      <div style={{ flex: 3 }}>
        <AvailableRooms />
      </div>
    </div>
  )
}
