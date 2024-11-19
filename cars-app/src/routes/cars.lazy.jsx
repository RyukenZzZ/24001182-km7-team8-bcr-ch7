import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Card } from "react-bootstrap";
import { getCars } from "../service/car/index";
import carsImage from "../assets/img_car.png";
import Protected from "../components/Auth/Protected";

export const Route = createLazyFileRoute("/cars")({
  component: () => (
    <Protected roles={[1,2]}>
        <CarsFilter />
    </Protected>
),
});

function CarsFilter() {
  const [searchButtonEnabled, setSearchButtonEnabled] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof getCars === "function") {
      getCars()
        .then((data) => {
          setCars(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    } else if (Array.isArray(getCars)) {
      setCars(getCars);
      setLoading(false);
    }
  }, []);

  const handleInputChange = (e) => {
    const form = e.target.form;

    // Validasi input required
    const isValid = [...form.elements].every((input) => {
      if (input.required) {
        return input.value.trim() !== ""; // Pastikan nilai tidak kosong atau hanya spasi
      }
      return true;
    });

    setSearchButtonEnabled(isValid);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const date = new Date(
      `${formData.get("date")}T${formData.get("pickupTime")}`
    );
    const passengers = parseInt(formData.get("passengers")) || 1;

    const results = cars.filter((car) => {
      const carAvailableAt = new Date(car.availableAt);
      return (
        car.capacity >= passengers &&
        carAvailableAt >= date &&
        car.available === true
      );
    });

    setFilteredCars(results);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section mt-5">
        <Container>
          <Row className="align-items-center g-2">
            <Col md={6}>
              <h1 className="fw-bold">
                Sewa & Rental Mobil Terbaik di kawasan Depok!
              </h1>
              <p className="pe-5">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img src={carsImage} alt="Car Image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search Form */}
      <Container className="my-4">
        <Form
          id="carSearchForm"
          method="GET"
          className="border rounded p-3"
          onSubmit={handleFormSubmit}
        >
          <Row className="g-3 align-items-center">
            {/* Tipe Driver */}
            <Col md={6} lg={3}>
              <Form.Group controlId="driverType">
                <Form.Label>Tipe Driver</Form.Label>
                <Form.Select
                  name="driverType"
                  required
                  onChange={handleInputChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pilih Tipe Driver
                  </option>
                  <option value="withDriver">Dengan Supir</option>
                  <option value="selfDrive">Tanpa Supir (Lepas Kunci)</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Tanggal */}
            <Col md={6} lg={2}>
              <Form.Group controlId="date">
                <Form.Label>Tanggal</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Waktu Jemput/Ambil */}
            <Col md={6} lg={2}>
              <Form.Group controlId="pickupTime">
                <Form.Label>Waktu Jemput/Ambil</Form.Label>
                <Form.Control
                  type="time"
                  name="pickupTime"
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Jumlah Penumpang */}
            <Col md={6} lg={3}>
              <Form.Group controlId="passengers">
                <Form.Label>Jumlah Penumpang (optional)</Form.Label>
                <Form.Control
                  type="number"
                  name="passengers"
                  placeholder="Jumlah Penumpang"
                  min="1"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Button Cari Mobil */}
            <Col md={3} lg={2}>
              <Button
                type="submit"
                id="searchButton"
                className="btn-success mt-4 w-100"
                disabled={!searchButtonEnabled}
              >
                Cari Mobil
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Display Search Results Section */}
      <Row className="g-3" id="result-content">
        {loading ? (
          <h5 className="text-center">Memuat data...</h5>
        ) : filteredCars.length === 0 ? (
          <h5 className="text-center">Hasil pencarian belum ada.</h5>
        ) : (
          filteredCars.map((car) => (
            <Col md={4} key={car.id}>
                          <Card
                style={{ width: "100%", maxWidth: "18rem" }}
                className="h-100 shadow border-0"
            >
                <Card.Img
                    variant="top"
                    src={car?.image}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Text className="fs-6 fw-semibold mb-2">
                        {car?.plate}
                    </Card.Text>
                    <Card.Text className="fs-5 fw-bold flex-grow-1 mb-2">
                        Rp. {car.rentPerDay} / day
                    </Card.Text>
                    <Card.Text className="fs-6 fw-semibold text-muted mb-2">
                        Available :{" "}
                        <span
                            className={`fw-bold ${car.available ? "bg-success" : "bg-danger"} px-2 py-1 rounded text-white`}
                        >
                            {car.available ? "Yes" : "No"}
                        </span>
                    </Card.Text>
                    <Card.Text className="fs-6 fw-semibold text-muted flex-grow-1">
                        Available at : {car.availableAt.split("T")[0]}
                    </Card.Text>
                    <Button variant="primary">Pilih Mobil</Button>
                </Card.Body>
            </Card>
            </Col>
          ))
        )}
      </Row>
    </>
  );
}
