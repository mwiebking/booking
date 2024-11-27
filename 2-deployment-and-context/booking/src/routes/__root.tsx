import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Layout from "../components/Layout";

export interface RouterContext extends Record<any, any> {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  const excludedRoutes = ["/login", "/signup", "/forgotpassword"];

  return (
    <Layout excludedRoutes={excludedRoutes}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/forgotpassword">Forgot password</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  );
}
