import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const Route = createRootRoute({
  component: () => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column flex-grow-1">
          <NavigationBar />
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      </div>
      <TanStackRouterDevtools />
      <ToastContainer theme="colored" />
    </GoogleOAuthProvider>
  ),
});