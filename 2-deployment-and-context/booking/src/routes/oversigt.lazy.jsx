import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import Dropdown from '../components/Dropdown'
import { Space } from '@mantine/core'
import NavbarNested from '../components/NavbarNested'
import { createRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/oversigt')({
  component: Oversigt,
})

export const oversigtRoute = createRoute({
  path: 'oversigt',
  component: Oversigt,
});

function Oversigt() {
  const context = useRouteContext({ from: '/oversigt' })
  console.log(context)

  return (
    <>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        {/* Navbar - Styling removed */}
        <div style={{ width: 300, height: '100%' }}>
          <NavbarNested />
        </div>

        {/* Main content - Takes the remaining space */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '10px 30px',
          }}
        >
          {/* Title */}
          <h1 className='start' style={{ marginBottom: '20px' }}>Kort</h1>

          {/* Dropdowns */}
          <Dropdown number={1} image={'public/1sal.png'} />
          <Space h="md" />
          <Dropdown number={2} image={'public/Sal2.png'} />
          <Space h="md" />
          <Dropdown number={3} image={'public/sal3.png'} />
          <Space h="md" />
          <Dropdown number={4} image={'public/sal4.png'} />
        </div>
      </div>    
    </>
  )
}
