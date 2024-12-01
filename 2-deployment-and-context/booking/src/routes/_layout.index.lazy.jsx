import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import SearchBar from '../components/SearchBar' // Adjust path accordingly

export const Route = createLazyFileRoute('/_layout/')({
  component: Index,
})

function Index() {
  const context = useRouteContext({ from: '/' })
  console.log(context)

  return (
    <div>
      <div>{context.userInfo?.name ?? 'No name'}</div>
      <h3>Welcome Home!</h3>

      {/* Add the SearchBar component */}
      <SearchBar />
    </div>
  )
}
