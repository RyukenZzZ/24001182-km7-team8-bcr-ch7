import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {
    deleteManufacture,
    getDetailManufactures,
} from "../../../service/manufacture";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { useSelector } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/admin/manufactures/$id")({
    component: ManufacturesDetail,
});

function ManufacturesDetail() {
    const { id } = Route.useParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const {
        data: manufacture,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["manufacture", id],
        queryFn: () => getDetailManufactures(id),
        enabled: !!id,
        retry: false,
    });

    const { mutate: deleteManufactureData } = useMutation({
        mutationFn: () => deleteManufacture(id),
        onSuccess: () => {
            toast.success("Manufacture deleted");
            navigate({ to: "/admin/dashboard" });
        },
        onError: () => {
            toast.error("Unable to delete");
        },
    });
    if (isLoading) {
        return (
            <Row className="mt-5">
                <Col>
                    <h1 className="text-center">Loading...</h1>
                </Col>
            </Row>
        );
    }

    if (isError || !manufacture) {
        return (
            <Row className="mt-5">
                <Col>
                    <h1 className="text-center">Manufacture not found!</h1>
                </Col>
            </Row>
        );
    }

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this manufacture?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        deleteManufactureData();
                    },
                },
                {
                    label: "No",
                    onClick: () => {},
                },
            ],
        });
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Img
                                variant="top"
                                src={manufacture.logo}
                                alt={manufacture.name || "Logo image"}
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <Card.Title>
                                {manufacture.name || "No name available"}
                            </Card.Title>

                            {user?.role_id === 1 && (
                                <>
                                    <Card.Text>
                                        <div className="d-grid gap-2">
                                            <Button
                                                as={Link}
                                                href={`/admin/manufactures/edit/${id}`}
                                                variant="primary"
                                                size="md"
                                            >
                                                Edit Manufacture
                                            </Button>
                                        </div>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className="d-grid gap-2">
                                            <Button
                                                onClick={onDelete}
                                                variant="danger"
                                                size="md"
                                            >
                                                Delete Manufacture
                                            </Button>
                                        </div>
                                    </Card.Text>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ManufacturesDetail;
