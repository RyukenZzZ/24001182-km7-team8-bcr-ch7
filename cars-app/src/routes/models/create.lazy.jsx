import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import {useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getManufactures } from "../../service/manufacture";
import { createModel } from "../../service/model";
import { toast } from "react-toastify";
import Protected from "../../components/Auth/Protected";
import { useQuery,useMutation } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/models/create")({
  component: () => (
    <Protected roles={[1]}>
      <CreateModel />
    </Protected>
  ),
});

function CreateModel() {
  const navigate = useNavigate();

  const {data:manufactures}=useQuery({
    queryKey:["manufactures"],
    queryFn:()=>getManufactures()
  })

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manufactureId, setManufactureId] = useState(0);

  const {mutate:createModelData,isPending:createPending} = useMutation({
    mutationFn:(body)=>createModel(body),
    onSuccess:()=>{
      toast.success("New model added");
      navigate({to:"/"}); 
    }
  })

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = {
      name,
      description,
      manufactureId,
    };
    createModelData(request);
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">Create Model</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="name">
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
              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm={3}>
                  Description
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="description"
                    required
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="manufacture_id">
                <Form.Label column sm={3}>
                  Manufacture
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setManufactureId(event.target.value)}
                  >
                    <option disabled selected>
                      Select Manufacture
                    </option>
                    {manufactures.length > 0 &&
                      manufactures.map((manufacture) => (
                        <option key={manufacture?.id} value={manufacture?.id}>
                          {manufacture?.name}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" disabled={createPending}>
                  Create Model
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
