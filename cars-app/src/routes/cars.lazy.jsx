import { createLazyFileRoute} from "@tanstack/react-router";
import {
  Container,
  Button,
  Row,
  Col,
  Form,

} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import carsImage from "../assets/img_car.png";
import { useState } from "react";

export const Route = createLazyFileRoute("/cars")({
  component: CarsFilter,
});

function CarsFilter() {
    const [searchButtonEnabled, setSearchButtonEnabled] = useState(false);

    const handleInputChange = (e) => {
      const form = e.target.form;
      const isValid = [...form.elements].every(
        (input) => input.required === false || input.value !== ""
      );
      setSearchButtonEnabled(isValid);
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
          action=""
          className="border rounded p-3"
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
                >
                  <option value="" disabled selected>
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
      <Container className="my-5">
        <Row className="g-3" id="result-content">
          {/* Dynamic Results Here */}
        </Row>
      </Container>

        {/* Footer Section */}
        <footer className="p-4 pb-5">
          <Container>
            <Row>
              <Col md={4}>
                <p>
                  Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000
                </p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </Col>
              <Col md={2}>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a
                      href="#our"
                      className="text-black fw-semibold text-decoration-none"
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#whyUs"
                      className="text-black fw-semibold text-decoration-none"
                    >
                      Why Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#testimonial"
                      className="text-black fw-semibold text-decoration-none"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#FAQ"
                      className="text-black fw-semibold text-decoration-none"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <p>Connect with us</p>
                <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
              </Col>
              <Col md={3}>
                <p className="copyright-text">Copyright Binar 2022</p>
                <a
                  className="navbar-brand bg-primary p-2 px-4 text-white"
                  href="#"
                >
                  Logo
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
    </>
  );
}
