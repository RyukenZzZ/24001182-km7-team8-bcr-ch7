import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserNavbar from "../components/Navbar/userNavbar";
import NavigationBar from "../components/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column flex-grow-1">
          {/* Conditional Navbar */}
          {user?.role_id === 1 ? <NavigationBar /> : <UserNavbar />}
            <Outlet />
        </div>
        <TanStackRouterDevtools />
        <ToastContainer theme="colored" />
      </div>
    </>
  );
}
