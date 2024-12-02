import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export interface RouterContext extends Record<any, any> {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  return (
    <>
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/login">Login </Link>
        <Link to="/signup">Signup </Link>
        <Link to="/forgotpassword">Forgot password </Link>
        <Link to="/dashboard">Dashboard </Link>
        <Link to="/booklokale">Book lokale </Link>
        <Link to="/minebookninger">Mine bookninger </Link>
        <Link to="/oversigt">Lokale oversigt </Link>
        <Link to="/medialab">Medialab </Link>
        <Link to="/makerlab">Makerlab </Link>
        <Link to="/auditorium">Auditorium </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
