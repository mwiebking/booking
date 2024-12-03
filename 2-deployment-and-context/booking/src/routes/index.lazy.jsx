import { createLazyFileRoute, Link, useRouteContext } from '@tanstack/react-router'
import SearchBar from '../components/SearchBar' // Adjust path accordingly

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const context = useRouteContext({ from: '/' })
  console.log(context)

  return (
    <div>
      <Link to="/login"><button className='pulsate-button'
          type="submit"
          style={{
            display: "block",
            margin: "300px 300px 300px 350px",
            width: "50%",
            backgroundColor: "#1098AD",
            color: "#fff",
            padding: "10px 0",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            centered: "center"
          }}
        >
          START PROTOTYPE
        </button></Link>
    </div>
  )
}
