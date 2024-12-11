import {
  createLazyFileRoute,
  Link,
  useRouteContext,
} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const context = useRouteContext({ from: '/' })
  console.log(context)

  return (
    <div
      className="relative"
      style={{
        height: '100vh', 
        width: '100%', 
        margin: 0, 
        padding: 0, 
        boxSizing: 'border-box', 
      }}
    >
      <div>
        <Link to="/login">
          <button
            className="pulsate-button absolute"
            type="submit"
            style={{
              width: '50%',
              height: '50px',
              backgroundColor: '#1098AD',
              color: '#fff',
              padding: '10px 0',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
            }}
          >
            START PROTOTYPE
          </button>
        </Link>
      </div>
    </div>
  )
}
