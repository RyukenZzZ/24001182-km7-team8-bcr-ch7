import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { getTypesById, updateType } from "../../../service/type";
import { toast } from "react-toastify";
import Protected from "../../../components/Auth/Protected";
import { useQuery, useMutation } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/types/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <TypeDetail />
        </Protected>
    ),
});

function TypeDetail() {
    const navigate = useNavigate();
    const { id } = Route.useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [characteristic, setCharacteristic] = useState("");
    const [style, setStyle] = useState("");

    const {
        data: typeData,
        isPending,
        isSuccess,
    } = useQuery({
        queryKey: ["type", id],
        queryFn: () => getTypesById(id),
    });

    useEffect(() => {
        if (isSuccess) {
            setName(typeData.name);
            setDescription(typeData.description);
            setCharacteristic(typeData.characteristic);
            setStyle(typeData.style);
        }
    }, [typeData, isSuccess]);

    const { mutate: updateTypeData, isPending: updatePending } = useMutation({
        mutationFn: (body) => updateType(id, body),
        onSuccess: () => {
            toast.success("Type updated");
            navigate({ to: `/types/${id}` });
        },
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const body = { name, description, characteristic, style };

        updateTypeData(body);
    };

    if (isPending) {
        return <h2>Loading...</h2>;
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col className="offset-md-3">
                    <Card>
                        <Card.Header className="text-center">
                            Edit Type
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="name"
                                >
                                    <Form.Label column sm={3}>
                                        Name
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            required
                                            value={name}
                                            onChange={(event) => {
                                                setName(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nick_name"
                                >
                                    <Form.Label column sm={3}>
                                        Description
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Description"
                                            required
                                            value={description}
                                            onChange={(event) => {
                                                setDescription(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nick_name"
                                >
                                    <Form.Label column sm={3}>
                                        Characteristic
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Characteristic"
                                            value={characteristic}
                                            onChange={(event) => {
                                                setCharacteristic(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="nick_name"
                                >
                                    <Form.Label column sm={3}>
                                        Style
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Style"
                                            value={style}
                                            onChange={(event) => {
                                                setStyle(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={updatePending}
                                    >
                                        Edit Type
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
}
