import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserNavbar from "../components/Navbar/userNavbar";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {/* Conditional Rendering Based on User Role */}
      {user?.role_id === 1 ? (
        <div className="d-flex">
          {/* Sidebar Layout */}
          <Sidebar />
          <div className="d-flex flex-column flex-grow-1">
            <div className="p-3">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column flex-grow-1">
          {/* Navbar Layout */}
          <UserNavbar />
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      )}
      {/* Shared Components */}
      <TanStackRouterDevtools />
      <ToastContainer theme="colored" />
    </>
  );
}
