import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import Image from "react-bootstrap/Image";
import { BiHome, BiCar, BiUser } from "react-icons/bi";
import "./sidebar.css";
import { useCallback } from "react";
import { setToken, setUser } from "../../redux/slices/auth";


const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch= useDispatch();
  const navigate = useNavigate();


  const handleLogout = useCallback(() => {
    dispatch(setUser(null));
    dispatch(setToken(null));

    navigate({ to: "/login" });
}, [dispatch, navigate]);


  const logout = (event) => {
    event.preventDefault();
    handleLogout();
};


  if (!user || location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }


  return (
    <div className="sidebar bg-primary d-flex flex-column align-items-center text-white">
      <div className="sidebar-icon py-4">
        <Link to="/profile">
          <Image
            src={user.profile_picture || "/placeholder.png"}
            roundedCircle
            width="50"
            height="50"
            alt="Profile"
          />
        </Link>
      </div>
      
      <Nav className="flex-column w-100 text-center">
        {user.role_id === 1 && (
          <Nav.Item>
            <Nav.Link as={Link} to="/admin/dashboard" className="text-white">
              <BiHome className="sidebar-icon" />
              <span className="sidebar-text">Dashboard</span>
            </Nav.Link>
          </Nav.Item>
        )}
        
        <Nav.Item>
          <Nav.Link as={Link} to="/cars" className="text-white">
            <BiCar className="sidebar-icon" />
            <span className="sidebar-text">Filter</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/profile" className="text-white">
            <BiUser className="sidebar-icon" />
            <span className="sidebar-text">Profile</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick={logout} className="text-white">Logout</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
