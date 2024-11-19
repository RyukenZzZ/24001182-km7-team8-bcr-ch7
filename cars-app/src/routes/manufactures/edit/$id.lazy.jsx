import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import {
    getManufacturesById,
    updateManufacture,
} from "../../../service/manufacture";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/manufactures/edit/$id")({
    component: EditManufacture,
});

function EditManufacture() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const {
        data: manufactureData,
        isSuccess,
        isPending,
    } = useQuery({
        queryKey: ["manufactures", id],
        queryFn: () => getManufacturesById(id),
    });

    const [name, setName] = useState("");
    const [logo, setLogo] = useState(undefined);
    const [currentLogo, setCurrentLogo] = useState(
        manufactureData?.logo || undefined
    );

    const { mutate: updateManufactureData, isPending: updatePending } =
        useMutation({
            mutationFn: (body) => updateManufacture(id, body),
            onSuccess: () => {
                toast.success("Manufacture updated");
                navigate({ to: "/admin/dashboard" });
            },
        });
    useEffect(() => {
        if (isSuccess) {
            setName(manufactureData.name);
            setLogo(manufactureData.logo);
            setCurrentLogo(manufactureData.logo);
        }
    }, [manufactureData, isSuccess]);
    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            name,
            logo,
        };

        updateManufactureData(request);
    };

    if (isPending) {
        return (
            <Row className="mt-5">
                <Col>
                    <h1 className="text-center">Loading...</h1>
                </Col>
            </Row>
        );
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Edit Manufacture</Card.Title>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="logo"
                                >
                                    <Form.Label column sm={3}>
                                        Logo
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="file"
                                            placeholder="Choose File"
                                            onChange={(event) => {
                                                setLogo(event.target.files[0]);
                                                setCurrentLogo(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                );
                                            }}
                                            accept=".jpg,.png"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="currentLogo"
                                >
                                    <Form.Label column sm={3}></Form.Label>
                                    <Col sm={9}>
                                        <Image src={currentLogo} fluid />
                                    </Col>
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={updatePending}
                                >
                                    Save Changes
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EditManufacture;
