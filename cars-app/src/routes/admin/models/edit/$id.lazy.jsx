import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { getManufactures } from "../../../../service/manufacture";
import { getDetailModel, updateModel } from "../../../../service/model";
import { toast } from "react-toastify";
import Protected from "../../../../components/Auth/Protected";
import { useQuery, useMutation } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/admin/models/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <EditModel />
        </Protected>
    ),
});

function EditModel() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const { data: manufactures, isPending } = useQuery({
        queryKey: ["manufactures"],
        queryFn: () => getManufactures(),
    });

    const {
        data: modelData,
        isPending: modelPending,
        isSuccess,
    } = useQuery({
        queryKey: ["models", id],
        queryFn: () => getDetailModel(id),
    });

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [manufactureId, setManufactureId] = useState(0);

    const { mutate: updateModelData, isPending: updatePending } = useMutation({
        mutationFn: (body) => updateModel(id, body),
        onSuccess: () => {
            toast.success("Model updated");
            navigate({ to: `/admin/models/${id}` });
        },
    });

    useEffect(() => {
        if (isSuccess) {
            setName(modelData.name);
            setDescription(modelData.description);
            setManufactureId(modelData.manufacture_id);
        }
    }, [modelData, isSuccess]);

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            name,
            description,
            manufactureId,
        };
        updateModelData(request);
    };

    if (modelPending) {
        return <h1>Loading...</h1>;
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col className="offset-md-3">
                    <Card>
                        <Card.Header className="text-center">
                            Edit Model
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
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="description"
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
                                            onChange={(event) =>
                                                setDescription(
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="manufacture_id"
                                >
                                    <Form.Label column sm={3}>
                                        Manufacture
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Select
                                            aria-label="Default select example"
                                            value={manufactureId}
                                            onChange={(event) =>
                                                setManufactureId(
                                                    event.target.value
                                                )
                                            }
                                        >
                                            <option disabled value="">
                                                Select Manufacture
                                            </option>
                                            {!isPending &&
                                                manufactures?.length > 0 &&
                                                manufactures.map(
                                                    (manufacture) => (
                                                        <option
                                                            key={manufacture.id}
                                                            value={
                                                                manufacture.id
                                                            }
                                                        >
                                                            {manufacture.name}
                                                        </option>
                                                    )
                                                )}
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={updatePending}
                                    >
                                        Edit Model
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
