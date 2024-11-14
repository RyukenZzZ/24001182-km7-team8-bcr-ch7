import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";

export const Route = createRootRoute({
    component: () => (
        <>
            {/* Navbar */}
            <NavigationBar />

                {/* Outlet is to detect the pathname or url and then render the component by pathname or url */}
                <Outlet />
            
            {/* This is for debugging router */}
            <TanStackRouterDevtools />

            {/* React Toastify */}
            <ToastContainer theme="colored" />
        </>
    ),
});