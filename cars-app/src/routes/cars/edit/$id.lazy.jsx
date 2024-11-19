import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { getModels } from "../../../service/model";
import { getManufactures } from "../../../service/manufacture";
import { getTypes } from "../../../service/type";
import { getCarById, updateCar } from "../../../service/car";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import Protected from "../../../components/Auth/Protected";
export const Route = createLazyFileRoute("/cars/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <EditCar />
        </Protected>
    ),
});
function EditCar() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const [plate, setPlate] = useState("");
    const [description, setDescription] = useState("");
    const [rentPerDay, setRentPerDay] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [available, setAvailable] = useState(false);
    const [availableAt, setAvailableAt] = useState("");
    const [image, setImage] = useState(undefined);
    const [currentImage, setCurrentImage] = useState(undefined);
    const [transmission, setTransmission] = useState("");
    const [year, setYear] = useState(0);
    const [options, setOptions] = useState([]);
    const [specs, setSpecs] = useState([]);

    const [modelId, setModelId] = useState(0);
    const [manufactureId, setManufactureId] = useState(0);
    const [typeId, setTypeId] = useState(0);
    // Fetch models, manufactures, and types using useQuery
    const modelsQuery = useQuery({
        queryKey: ["models"],
        queryFn: ()=>getModels(),
    });

    const manufacturesQuery = useQuery({
        queryKey: ["manufactures"],
        queryFn: ()=>getManufactures(),
    });

    const typesQuery = useQuery({
        queryKey: ["types"],
        queryFn: ()=>getTypes(),
    });

    // Fetch car details by id using useQuery
    const carQuery = useQuery({
        queryKey: ["car", id],
        queryFn: () => getCarById(id),
        onSuccess: (data) => {
            setPlate(data.plate);
            setManufactureId(data.manufacture_id);
            setTypeId(data.type_id);
            setModelId(data.model_id);
            setDescription(data.description);
            setRentPerDay(data.rentPerDay);
            setCapacity(data.capacity);
            setAvailable(data.available);
            setAvailableAt(data.availableAt.split("T")[0]);
            setImage(data.image);
            setCurrentImage(data.image);
            setTransmission(data.transmission);
            setYear(data.year);
            setOptions(data.options);
            setSpecs(data.specs);
        },
    });
    const updateCarMutation = useMutation({
        mutationFn: (carData) => updateCar(id, carData),
        onSuccess: () => {
            toast.success("Car updated successfully");
<<<<<<< HEAD
            navigate({ to: "/admin/dashboard" });
=======
            navigate(`/`);
>>>>>>> 094f6af23cfe76e9616ce92092ea2766babdd0b7
        },
        onError: (error) => {
            toast.error(error?.message || "Failed to update car");
        },
    });

    const handleAddOption = () => {
        setOptions([...options, ""]); // Menambahkan opsi baru kosong
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleAddSpec = () => {
        setSpecs([...specs, ""]); // Menambahkan spesifikasi baru kosong
    };

    const handleSpecChange = (index, value) => {
        const newSpecs = [...specs];
        newSpecs[index] = value;
        setSpecs(newSpecs);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const request = {
            plate,
            manufactureId,
            modelId,
            typeId,
            description,
            rentPerDay,
            capacity,
            available,
            availableAt,
            image,
            transmission,
            year,
            options,
            specs,
        };
        updateCarMutation.mutate(request);
    };

    useEffect(() => {
        if (carQuery.isSuccess && carQuery.data) {
            setPlate(carQuery.data.plate);
            setManufactureId(carQuery.data.manufacture_id);
            setTypeId(carQuery.data.type_id);
            setModelId(carQuery.data.model_id);
            setDescription(carQuery.data.description);
            setRentPerDay(carQuery.data.rentPerDay);
            setCapacity(carQuery.data.capacity);
            setAvailable(carQuery.data.available);
            setAvailableAt(carQuery.data.availableAt.split("T")[0]);
            setImage(carQuery.data.image);
            setCurrentImage(carQuery.data.image);
            setTransmission(carQuery.data.transmission);
            setYear(carQuery.data.year);
            setOptions(carQuery.data.options);
            setSpecs(carQuery.data.specs);
        }
    }, [carQuery.isSuccess, carQuery.data]);

    if (
        modelsQuery.isLoading ||
        manufacturesQuery.isLoading ||
        typesQuery.isLoading ||
        carQuery.isLoading
    ) {
        return <div>Loading...</div>;
    }
    return (
        <Container>
            <Row className="mt-5">
                <Col className="offset-md-3">
                    <Card>
                        <Card.Header className="text-center">
                            Edit Car
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="plate"
                                >
                                    <Form.Label column sm={3}>
                                        Plate
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Plate"
                                            value={plate}
                                            onChange={(event) =>
                                                setPlate(event.target.value)
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
                                    controlId="rentPerDay"
                                >
                                    <Form.Label column sm={3}>
                                        Rent Per Day
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="number"
                                            value={rentPerDay}
                                            onChange={(event) =>
                                                setRentPerDay(
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="capacity"
                                >
                                    <Form.Label column sm={3}>
                                        Capacity
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="number"
                                            value={capacity}
                                            onChange={(event) =>
                                                setCapacity(event.target.value)
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="available"
                                >
                                    <Form.Label column sm={3}>
                                        Available
                                    </Form.Label>{" "}
                                    <Col sm={9}>
                                        <Form.Check
                                            type="switch"
                                            id="available-switch"
                                            checked={available}
                                            label="Yes"
                                            onChange={(event) =>
                                                setAvailable(
                                                    event.target.checked
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>
              
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="availableAt"
                                >
                                    <Form.Label column sm={3}>
                                        Available From
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="date"
                                            value={availableAt}
                                            onChange={(event) =>
                                                setAvailableAt(
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="transmission"
                                >
                                    <Form.Label column sm={3}>
                                        Transmission
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Transmission"
                                            value={transmission}
                                            onChange={(event) =>
                                                setTransmission(
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="transmission"
                                >
                                    <Form.Label column sm={3}>
                                        Transmission
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Transmission"
                                            value={transmission}
                                            onChange={(event) =>
                                                setTransmission(
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="year"
                                >
                                    <Form.Label column sm={3}>
                                        Year
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="number"
                                            value={year}
                                            onChange={(event) =>
                                                setYear(event.target.value)
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="options"
                                >
                                    <Form.Label column sm={3}>
                                        Options
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Options"
                                            value={options}
                                            onChange={(event) =>
                                                setOptions(event.target.value)
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="specs"
                                >
                                    <Form.Label column sm={3}>
                                        Specs
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            placeholder="Specs"
                                            value={specs}
                                            onChange={(event) =>
                                                setSpecs(event.target.value)
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="options"
                                >
                                    <Form.Label column sm={3}>
                                        Options
                                    </Form.Label>
                                    <Col sm="9">
                                        {options.map((option, index) => (
                                            <div key={index} className="mb-2">
                                                <Form.Control
                                                    type="text"
                                                    placeholder={`Option ${index + 1}`}
                                                    value={option}
                                                    onChange={(e) =>
                                                        handleOptionChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        ))}
                                        <Button
                                            variant="secondary"
                                            onClick={handleAddOption}
                                        >
                                            Add Option
                                        </Button>
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="specs"
                                >
                                    <Form.Label column sm={3}>
                                        Specifications
                                    </Form.Label>
                                    <Col sm="9">
                                        {specs.map((spec, index) => (
                                            <div key={index} className="mb-2">
                                                <Form.Control
                                                    type="text"
                                                    placeholder={`Specification ${index + 1}`}
                                                    value={spec}
                                                    onChange={(e) =>
                                                        handleSpecChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        ))}
                                        <Button
                                            variant="secondary"
                                            onClick={handleAddSpec}
                                        >
                                            Add Specification
                                        </Button>
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="image"
                                >
                                    <Form.Label column sm={3}>
                                        Image
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="file"
                                            onChange={(event) => {
                                                setImage(event.target.files[0]);
                                                setCurrentImage(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                );
                                            }}
                                            accept=".jpg,.png"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={3}></Form.Label>
                                    <Col sm={9}>
                                        {currentImage && (
                                            <Image src={currentImage} fluid />
                                        )}
                                    </Col>
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        disabled={updateCarMutation.isPending}
                                        variant="primary"
                                    >
                                        Update Car
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
