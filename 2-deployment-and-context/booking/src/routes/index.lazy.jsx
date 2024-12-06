import { createLazyFileRoute, Link, useRouteContext } from '@tanstack/react-router'
import SearchBar from '../components/SearchBar' // Adjust path accordingly


export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const context = useRouteContext({ from: '/' })
  console.log(context)

  return (
    <div className='relative' style={{
      height: "100vh", // Full viewport height
      width: "100%",   // Full width
      margin: 0,       // Remove default margins
      padding: 0,      // Remove default padding
      boxSizing: "border-box", // Include padding in width/height calculations
    }}>
    <div>
  <Link to="/login">
    <button
      className="pulsate-button absolute"
      type="submit"
      style={{
        width: "50%",
        height: "50px",
        backgroundColor: "#1098AD",
        color: "#fff",
        padding: "10px 0",
        border: "none",
        borderRadius: "16px",
        cursor: "pointer",
      }}
    >
      START PROTOTYPE
    </button>
  </Link>
</div>
</div>
  )
}
