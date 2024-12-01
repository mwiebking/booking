import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import Dropdown from '../components/Dropdown'
import { Space } from '@mantine/core'

export const Route = createLazyFileRoute('/_layout/oversigt')({
  component: Oversigt,
})

function Oversigt() {
  const context = useRouteContext({ from: '/oversigt' })
  console.log(context)

  return (
    <>
      <Dropdown number={1} image={'public/1sal.png'} />
      <Space h="md" />
      <Dropdown number={2} image={'public/1sal.png'} />
      <Space h="md" />
      <Dropdown number={3} image={'public/1sal.png'} />
      <Space h="md" />
      <Dropdown number={4} image={'public/1sal.png'} />
    </>
  )
}
