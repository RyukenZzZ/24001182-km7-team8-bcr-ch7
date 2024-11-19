import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import editImage from "../../assets/edit-svgrepo-com.svg";
import openImage from "../../assets/document-layout-left-svgrepo-com.svg";
import { useSelector } from "react-redux";

const ModelItem = ({ model }) => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Col md={3}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{model?.name}</Card.Title>
                    <Card.Text>{model?.description}</Card.Text>
                    <Row className="d-flex align-items-center justify-content-between px-2">
                        <Button
                            as={Link}
                            href={`/models/${model?.id}`}
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
                                href={`/models/edit/${model?.id}`}
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

ModelItem.propTypes = {
    model: PropTypes.object,
};

export default ModelItem;
