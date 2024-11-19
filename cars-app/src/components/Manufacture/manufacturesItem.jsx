import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

import editImage from "../../assets/edit-svgrepo-com.svg";
import openImage from "../../assets/document-layout-left-svgrepo-com.svg";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

const ManufactureItem = ({ manufacture }) => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Col md={12} className="mb-4">
            <Card
                style={{ width: "100%", maxWidth: "18rem" }}
                className="h-100 shadow-sm"
            >
                <Card.Img
                    variant="top"
                    src={manufacture?.logo}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-5 bold-text mb-2">
                        {manufacture?.name || "No name available"}
                    </Card.Title>
                    <Row className="d-flex align-items-center justify-content-between px-2">
                        <Button
                            as={Link}
                            href={`/admin/manufactures/${manufacture?.id}`}
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
                                href={`/admin/manufactures/edit/${manufacture?.id}`}
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

ManufactureItem.propTypes = {
    manufacture: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
};

export default ManufactureItem;
