import React from "react";
import { AppShell } from "@mantine/core";
import NavbarNested from "./NavbarNested.jsx";
import PropTypes from "prop-types";
import { Outlet, useRouter } from "@tanstack/react-router";

function Layout({ excludedRoutes }) {
    const { state } = useRouter();
    const currentRoute = state?.currentLocation?.pathname || "";

    const shouldShowNavbar = !excludedRoutes.includes(currentRoute);

    return (
    <AppShell
    navbar={
        shouldShowNavbar ? (
        <AppShell.Navbar p="sm" style={{ backgroundColor: "#2C2E33" }}>
            <NavbarNested />
        </AppShell.Navbar>
        ) : undefined
    }
    >
      {/* Render the current page's content */}
    <Outlet />
    </AppShell>
    );
}

Layout.propTypes = {
    excludedRoutes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Layout;
