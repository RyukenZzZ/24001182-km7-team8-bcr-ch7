import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import editImage from "../../assets/edit-svgrepo-com.svg";
import openImage from "../../assets/document-layout-left-svgrepo-com.svg";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

const CarItem = ({ car }) => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Col md={12} className="mb-4">
            <Card
                style={{ width: "100%", maxWidth: "18rem" }}
                className="h-100 shadow border-0"
            >
                <Card.Img
                    variant="top"
                    src={car?.image}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Text className="fs-6 fw-semibold mb-2">
                        {car?.plate}
                    </Card.Text>
                    <Card.Text className="fs-5 fw-bold flex-grow-1 mb-2">
                        Rp. {car.rentPerDay} / day
                    </Card.Text>
                    <Card.Text className="fs-6 fw-semibold text-muted mb-2">
                        Available :{" "}
                        <span
                            className={`fw-bold ${car.available ? "bg-success" : "bg-danger"} px-2 py-1 rounded text-white`}
                        >
                            {car.available ? "Yes" : "No"}
                        </span>
                    </Card.Text>
                    <Card.Text className="fs-6 fw-semibold text-muted flex-grow-1">
                        Available at : {car.availableAt.split("T")[0]}
                    </Card.Text>
                    <Row className="d-flex align-items-center justify-content-between px-2">
                        <Button
                            as={Link}
                            href={`/admin/cars/${car?.id}`}
                            variant="primary"
                            className="mt-3 align-self-start d-flex col-5"
                        >
                            <Image
                                src={openImage}
                                className="img-fluid"
                                width="20"
                                height="20"
                            />
                            <span className="flex-frow-1 mx-2">Detail</span>
                        </Button>
                        {user?.role_id === 1 && (
                            <Button
                                as={Link}
                                href={`/admin/cars/edit/${car?.id}`}
                                variant="success"
                                className="mt-3 align-self-start d-flex col-5"
                            >
                                <Image
                                    src={editImage}
                                    className="img-fluid"
                                    width="20"
                                    height="20"
                                />
                                <span className="flex-frow-1 mx-2">Edit</span>
                            </Button>
                        )}
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

CarItem.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.string.isRequired,
        plate: PropTypes.string,
        image: PropTypes.string,
        models: PropTypes.shape({
            description: PropTypes.string,
        }),
        available: PropTypes.bool,
        rentPerDay: PropTypes.number,
        availableAt: PropTypes.string,
    }),
};

export default CarItem;
