import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import { getCars } from "../service/car";
import { getModels } from "../service/model";
import { getManufactures } from "../service/manufacture";
import { getTypes } from "../service/type";
import CarItem from "../components/Car/carsItem";
import ModelItem from "../components/Model/ModelItem";
import ManufactureItem from "../components/Manufacture/manufacturesItem";
import TypeCard from "../components/Type/TypeCard";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const { token } = useSelector((state) => state.auth);
    const [selectedData, setSelectedData] = useState("cars");

    const [cars, setCars] = useState([]);
    const [models, setModels] = useState([]);
    const [manufactures, setManufactures] = useState([]);
    const [types, setTypes] = useState([]);

    // Fetch data using react-query
    const {
        data: carsData,
        isSuccess: carsSuccess,
        isPending: carsPending,
    } = useQuery({
        queryKey: ["cars"],
        queryFn: () => getCars(),
        enabled: !!token,
    });

    const {
        data: modelsData,
        isSuccess: modelsSuccess,
        isPending: modelsPending,
    } = useQuery({
        queryKey: ["models"],
        queryFn: () => getModels(),
        enabled: !!token,
    });

    const {
        data: manufacturesData,
        isSuccess: manufacturesSuccess,
        isPending: manufacturesPending,
    } = useQuery({
        queryKey: ["manufactures"],
        queryFn: () => getManufactures(),
        enabled: !!token,
    });

    const {
        data: typesData,
        isSuccess: typesSuccess,
        isPending: typesPending,
    } = useQuery({
        queryKey: ["types"],
        queryFn: () => getTypes(),
        enabled: !!token,
    });

    // Update state based on query success
    useEffect(() => {
        if (carsSuccess) setCars(carsData);
        if (modelsSuccess) setModels(modelsData);
        if (manufacturesSuccess) setManufactures(manufacturesData);
        if (typesSuccess) setTypes(typesData);
    }, [
        carsData,
        modelsData,
        manufacturesData,
        typesData,
        carsSuccess,
        modelsSuccess,
        manufacturesSuccess,
        typesSuccess,
    ]);

    const isLoading =
        carsPending || modelsPending || manufacturesPending || typesPending;

    if (!token) {
        return (
            <Row className="mt-4">
                <Col>
                    <h1 className="text-center">
                        Please login first to get data!
                    </h1>
                </Col>
            </Row>
        );
    }

    if (isLoading) {
        return (
            <Row className="mt-4">
                <Col>
                    <h1 className="text-danger">Loading...</h1>
                </Col>
            </Row>
        );
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <h1 className="text-primary">Data Selection</h1>
                    <div className="mb-4">
                        <button
                            className="btn btn-outline-success ms-2"
                            onClick={() => setSelectedData("cars")}
                        >
                            Show Cars
                        </button>
                        <button
                            className="btn btn-outline-secondary ms-2"
                            onClick={() => setSelectedData("models")}
                        >
                            Show Models
                        </button>
                        <button
                            className="btn btn-outline-secondary ms-2"
                            onClick={() => setSelectedData("manufactures")}
                        >
                            Show Manufactures
                        </button>
                        <button
                            className="btn btn-outline-secondary ms-2"
                            onClick={() => setSelectedData("types")}
                        >
                            Show Types
                        </button>
                    </div>

                    {selectedData === "cars" && (
                        <div>
                            <h2>Cars</h2>
                            {cars.length > 0 ? (
                                <Row>
                                    {cars.map((car) => (
                                        <Col
                                            key={car.id}
                                            md={4}
                                            className="mb-4"
                                        >
                                            <CarItem car={car} />
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <h2>No cars found</h2>
                            )}
                        </div>
                    )}

                    {selectedData === "models" && (
                        <div>
                            <h2>Models</h2>
                            {models.length > 0 ? (
                                <Row>
                                    {models.map((model) => (
                                        <Col
                                            key={model.id}
                                            md={4}
                                            className="mb-4"
                                        >
                                            <ModelItem model={model} />
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <h2>No models found</h2>
                            )}
                        </div>
                    )}

                    {selectedData === "manufactures" && (
                        <div>
                            <h2>Manufactures</h2>
                            {manufactures.length > 0 ? (
                                <Row>
                                    {manufactures.map((manufacture) => (
                                        <Col
                                            key={manufacture.id}
                                            md={4}
                                            className="mb-4"
                                        >
                                            <ManufactureItem
                                                manufacture={manufacture}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <h2>No manufactures found</h2>
                            )}
                        </div>
                    )}

                    {selectedData === "types" && (
                        <div>
                            <h2>Types</h2>
                            {types.length > 0 ? (
                                <Row>
                                    {types.map((type) => (
                                        <Col
                                            key={type.id}
                                            md={4}
                                            className="mb-4"
                                        >
                                            <TypeCard type={type} />
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <h2>No types found</h2>
                            )}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
