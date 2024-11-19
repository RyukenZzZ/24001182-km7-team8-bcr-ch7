import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import propTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import editImage from "../../assets/edit-svgrepo-com.svg";
import openImage from "../../assets/document-layout-left-svgrepo-com.svg";
import { useSelector } from "react-redux";
import { Link } from "@tanstack/react-router";
const CarType = ({ type }) => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Col md={3}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{type.name}</Card.Title>
                    <Card.Text>{type.description}</Card.Text>
                    <Row className="d-flex align-items-center justify-content-between px-2">
                        <Button
                            as={Link}
                            href={`/admin/types/${type?.id}`}
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
                                href={`/admin/types/edit/${type?.id}`}
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
CarType.propTypes = {
    type: propTypes.object,
    user: propTypes.object,
};
export default CarType;
