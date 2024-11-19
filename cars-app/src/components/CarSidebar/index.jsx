import { useLocation } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import "./carSidebar.css";
import { setPath } from "../../redux/slices/auth";

const CarSidebar = () => {
    const { user } = useSelector((state) => state.auth);
    const location = useLocation();
    const dispatch = useDispatch();

    if (location.pathname == "/admin/dashboard") {
        return (
            <div className="carSidebar d-flex flex-column align-items-center text-white shadow-sm border-end">
                <div className="carSidebar-icon my-3 bg-white text-muted fw-bold w-100 px-5">
                    CARS
                </div>
                <Nav className="flex-column w-100 text-center">
                    <Nav.Item
                        className="border-bottom"
                        onClick={() => {
                            dispatch(setPath("cars"));
                        }}
                    >
                        <Button className="text-black bg-transparent rounded-0 border-0 w-100 text-start px-5">
                            <span className="sidebar-text">Cars</span>
                        </Button>
                    </Nav.Item>
                    {user?.role_id === 1 && (
                        <>
                            <Nav.Item
                                className="border-bottom"
                                onClick={() => {
                                    dispatch(setPath("models"));
                                }}
                            >
                                <Button className="text-black bg-transparent rounded-0 border-0 w-100 text-start px-5">
                                    <span className="sidebar-text">Models</span>
                                </Button>
                            </Nav.Item>
                            <Nav.Item
                                className="border-bottom"
                                onClick={() => {
                                    dispatch(setPath("manufactures"));
                                }}
                            >
                                <Button className="text-black bg-transparent rounded-0 border-0 w-100 text-start px-5">
                                    <span className="sidebar-text">
                                        Manufactures
                                    </span>
                                </Button>
                            </Nav.Item>
                            <Nav.Item
                                className="border-bottom"
                                onClick={() => {
                                    dispatch(setPath("types"));
                                }}
                            >
                                <Button className="text-black bg-transparent rounded-0 border-0 w-100 text-start px-5">
                                    <span className="sidebar-text">Types</span>
                                </Button>
                            </Nav.Item>
                        </>
                    )}
                </Nav>
            </div>
        );
    }
    return null;
};

export default CarSidebar;
