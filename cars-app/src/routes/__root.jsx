import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserNavbar from "../components/Navbar/userNavbar";
import NavigationBar from "../components/Navbar";
import { useSelector } from "react-redux";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {/* Conditional Navbar */}
      {user?.role_id === 1 ? <NavigationBar /> : <UserNavbar />}

      {/* Outlet for rendering child routes */}
      <Outlet />

      {/* Debugging Router */}
      <TanStackRouterDevtools />

      {/* React Toastify */}
      <ToastContainer theme="colored" />
    </>
  );
}
