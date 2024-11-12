import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import { deleteType, getTypesById } from "../../service/type";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/types/$id")({
  component: TypeDetail,
});

function TypeDetail() {
  const { id } = Route.useParams();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { data: type, isLoading, isError } = useQuery({
    queryKey: ["type", id],
    queryFn: () => getTypesById(id),
    enabled: !!id,
  })

  const onDelete = async (event) => {
    event.preventDefault();

    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this data?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const result = await deleteType(id);
            if (result?.success) {
              navigate({ to: "/" });
              return;
            }

            toast.error(result?.message);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  if (isError || !type) {
    return <h2>Loading...</h2>;
  }
  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Body>
            <Card.Title>{type?.name}</Card.Title>
            <Card.Text>Description : {type?.description}</Card.Text>
            {type.characteristic && (
              <Card.Text>Characteristic : {type?.characteristic}</Card.Text>
            )}
            {type.style && <Card.Text>Style : {type?.style}</Card.Text>}
            {user?.role_id == 1 && (
              <>
                <Card.Text>
                  <div className="d-grid gap-2">
                    <Button
                      as={Link}
                      href={`/models/edit/${id}`}
                      variant="primary"
                      size="md"
                    >
                      Edit Model
                    </Button>
                  </div>
                </Card.Text>
                <Card.Text>
                  <div className="d-grid gap-2">
                    <Button onClick={onDelete} variant="danger" size="md">
                      Delete Model
                    </Button>
                  </div>
                </Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
