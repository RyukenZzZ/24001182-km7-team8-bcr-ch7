import { Link } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { BiHome, BiCar, BiUser } from "react-icons/bi";
import "./Sidebar.css"; 

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="sidebar bg-primary d-flex flex-column align-items-center text-white">
      <div className="sidebar-icon py-4" as={Link} to="/">
      <Link to="/profile">
        <Image
          src={user?.profile_picture || "/placeholder.png"} 
          roundedCircle
          width="50"
          height="50"
        />
        </Link>
      </div>
      <Nav className="flex-column w-100 text-center">
        <Nav.Item>
        {user && user.role_id === 1 && (
          <Nav.Link as={Link} to="/dashboard" className="text-white">
            <BiHome className="sidebar-icon" />
            <span className="sidebar-text">Dashboard</span>
          </Nav.Link>
        )}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="text-white">
            <BiCar className="sidebar-icon" />
            <span className="sidebar-text">Cars</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/profile" className="text-white">
            <BiUser className="sidebar-icon" />
            <span className="sidebar-text">Profile</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
