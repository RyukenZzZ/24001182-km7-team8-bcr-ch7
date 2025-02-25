import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/slices/auth";
import { profile } from "../../service/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useCallback } from "react";

const NavigationBar = () => {
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
        <Navbar collapseOnSelect expand="lg" className="bg-white shadow-sm">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin/dashboard">
                            Home
                        </Nav.Link>
                        {user && user?.role_id === 1 && (
                            <Nav.Link as={Link} to="/models/create">
                                Create Model
                            </Nav.Link>
                        )}
                        {user && user.role_id === 1 && (
                            <Nav.Link
                                as={Link}
                                to="/manufactures/createManufactures"
                            >
                                Create Manufactures
                            </Nav.Link>
                        )}
                        {user && user.role_id === 1 && (
                            <Nav.Link as={Link} to="/types/create">
                                Create Types
                            </Nav.Link>
                        )}
                        {user && user?.role_id === 1 && (
                            <Nav.Link as={Link} to="/cars/create">
                                Create Cars
                            </Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/profile" className="d-inline">
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
                                    <span className="px-2">{user?.name}</span>
                                </Nav.Link>
                                <Nav.Link onClick={logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
