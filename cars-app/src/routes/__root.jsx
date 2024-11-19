import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
    component: () => (
        <div className="d-flex">
            <Sidebar />
            <div className="d-flex flex-column flex-grow-1">
                <NavigationBar />
                <Outlet />
            </div>
            <TanStackRouterDevtools />
            <ToastContainer theme="colored" />
        </div>
    ),
});
