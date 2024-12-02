import { createLazyFileRoute } from '@tanstack/react-router'
import RoomBar from '../components/FindRoomBar.jsx'

export const Route = createLazyFileRoute('/_layout/minebookinger')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
    <div
    style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
    }}
    >
        <div style={{ flex: 1 }}>
        <RoomBar />
        </div>

    </div>
    )
}