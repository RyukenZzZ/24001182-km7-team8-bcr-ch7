import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserNavbar from "../components/Navbar/userNavbar";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { user } = useSelector((state) => state.auth);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <>
        {user?.role_id === 1 ? (
          <div className="d-flex">
            <Sidebar />
            <div className="d-flex flex-column flex-grow-1">
              <div className="">
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column flex-grow-1">
            <UserNavbar />
            <div className="">
              <Outlet />
            </div>
          </div>
        )}
        <TanStackRouterDevtools />
        <ToastContainer theme="colored" />
      </>
    </GoogleOAuthProvider>
  );
}