import FilterSearch from '../components/Filtrer'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/booklokale')({
  component: RouteComponent,
})

function RouteComponent() {
  

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
          {/* FilterSearch on the right */}
      <div style={{ flex: 1 }}>
        <FilterSearch />
      </div>
    </div>
  )
}
