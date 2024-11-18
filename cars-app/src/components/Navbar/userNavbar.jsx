import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { Navbar, Nav, Container, Offcanvas, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/slices/auth";
import { profile } from "../../service/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useCallback } from "react";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = useCallback(() => {
    // delete the local storage here
    dispatch(setUser(null));
    dispatch(setToken(null));

    // redirect to login
    navigate({ to: "/login" });
  }, [dispatch, navigate]);

  // Use react query to fetch API
  const { data, isSuccess, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: profile,
    enabled: token ? true : false,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
    } else if (isError) {
      handleLogout();
    }
  }, [isSuccess, isError, data, dispatch, handleLogout]);

  const logout = (event) => {
    event.preventDefault();
    handleLogout();
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <Navbar bg="navbar" expand="lg" fixed="top" className="bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="bg-primary px-3 text-white">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="w-50"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#our" className="mx-lg-2 text-black">
                Our Services
              </Nav.Link>
              <Nav.Link href="#whyUs" className="mx-lg-2 text-black">
                Why Us
              </Nav.Link>
              <Nav.Link href="#testimonial" className="mx-lg-2 text-black">
                Testimonial
              </Nav.Link>
              <Nav.Link href="#FAQ" className="mx-lg-2 text-black">
                FAQ
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/profile">
                    <Image
                      src={user?.profile_picture}
                      fluid
                      style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        overflow: "hidden",
                        borderRadius: "50%",
                      }}
                    />{" "}
                    {user?.name}
                  </Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="mx-lg-2 text-white bg-success custom-navbar"
                  >
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
