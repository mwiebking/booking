import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import Dropdown from '../components/Dropdown'
import { Space } from '@mantine/core'
import NavbarNested from '../components/NavbarNested'

export const Route = createLazyFileRoute('/oversigt')({
  component: Oversigt,
})

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
