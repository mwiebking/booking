import { createFileRoute, Outlet } from "@tanstack/react-router";
import  NavbarNested  from "../components/NavbarNested";


export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

const LayoutContainer = {
  display: "flex",
  flexDirection: "row",
};

function RouteComponent() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavbarNested />
      </div>
      <div className="main-content"><Outlet /></div>
    </div>
  );
}
