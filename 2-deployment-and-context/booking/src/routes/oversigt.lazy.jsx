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
  component: Oversigt, // Replace with the correct component for the page
});

function Oversigt() {
  const context = useRouteContext({ from: '/oversigt' })
  console.log(context)


  return (
    <>
  <div className="layout">
      <div className="navbar">
        <NavbarNested />
      </div>
      <div className="main-content">
        <Dropdown number={1} image={'public/1sal.png'} />
        <Space h="md" />
        <Dropdown number={2} image={'public/1sal.png'} />
        <Space h="md" />
        <Dropdown number={3} image={'public/1sal.png'} />
        <Space h="md" />
        <Dropdown number={4} image={'public/1sal.png'} />
      </div>
  </div>    
    </>
  )
}
