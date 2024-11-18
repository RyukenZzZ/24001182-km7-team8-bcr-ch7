import { createLazyFileRoute, Link} from "@tanstack/react-router";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  Carousel,
  Accordion,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import carsImage from "../../assets/img_car.png";
import serviceCar from "../../assets/img_service.png";
import testi1 from "../../assets/testi1.jpg";
import testi2 from "../../assets/testi2.jpg";

export const Route = createLazyFileRoute("/user/")({
  component: UserIndex,
});

function UserIndex() {
  const heroItems = [
    "Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In & Out",
  ];

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
              <Button
                variant="success"
                size="lg"
                className="mb-4"
                as={Link} to="/cars"
              >
                Mulai Sewa Mobil
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img src={carsImage} alt="Car Image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Services Section */}
      <section id="our" className="py-5">
        <Container className="my-4">
          <Row className="align-items-center g-4">
            <Col md={6} className="text-center">
              <img src={serviceCar} alt="Service Image" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold">
                Best Car Rental for any kind of trip in Depok!
              </h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil bersih dan
                nyaman, serta kualitas pelayanan terbaik untuk perjalanan
                wisata, bisnis, wedding, meeting, dll.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {heroItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon="check-circle"
                      className="text-primary"
                      style={{ marginRight: "10px" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Us Section */}
      <section id="whyUs" className="py-5">
        <Container className="mt-4">
          <div className="mb-4 text-center text-md-start">
            <h2 className="fw-bold">Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <Row className="g-4">
            {[
              {
                title: "Mobil Lengkap",
                text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.",
                color: "warning",
              },
              {
                title: "Harga Murah",
                text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.",
                color: "danger",
              },
              {
                title: "Layanan 24 Jam",
                text: "Siap melayani kebutuhan Anda selama 24 jam nonstop.",
                color: "primary",
              },
              {
                title: "Sopir Profesional",
                text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.",
                color: "success",
              },
            ].map((item, index) => (
              <Col key={index} md={3}>
                <Card className="h-100 p-3">
                  <Card.Body>
                    <div className="mb-4">
                      <FontAwesomeIcon
                        icon="circle"
                        className={`text-${item.color} fs-3`}
                      />
                    </div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-5">
        <Container className="my-4">
          <div className="mb-5 text-center">
            <h2 className="fw-bold">Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <Carousel
            className="bg-primary-subtle p-5 rounded"
            style={{ maxWidth: 900, margin: "0 auto" }}
          >
            {[
              {
                img: testi1,
                content: "Lorem ipsum dolor sit amet.",
                name: "John Dee, 32, Bromo",
              },
              {
                img: testi2,
                content: "Lorem ipsum dolor sit amet.",
                name: "Jane Smith, 28, Bali",
              },
            ].map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Row className="align-items-center justify-content-center">
                  <Col md={4} className="text-center">
                    <img
                      src={testimonial.img}
                      alt="User Image"
                      className="img-fluid rounded-circle w-50"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="testimonial-item">
                      <div className="text-warning">
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                        <FontAwesomeIcon icon="star" />
                      </div>
                      <p>{testimonial.content}</p>
                      <p>{testimonial.name}</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <div>
        {/* Getting Started Section */}
        <section className="py-5">
          <Container>
            <div className="bg-primary text-center p-5 rounded d-flex justify-content-center">
              <Col md={8}>
                <h1 className="text-white fs-3 fw-bold">
                  Sewa & Rental Mobil Terbaik di kawasan Depok!
                </h1>
                <p className="text-white mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, doloribus. Quasi fuga repellat qui, Officiis,
                  corrupti! el primos balakoles
                </p>
                <Button variant="success" size="lg" as={Link} to="/cars">
                  Mulai Sewa Mobil
                </Button>
              </Col>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-5" id="FAQ">
          <Container className="my-4">
            <Row>
              <Col md={5} className="text-md-start text-center">
                <h2 className="fw-bold">Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </Col>
              <Col md={7}>
                <Accordion id="accordionExample">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Apa saja syarat yang dibutuhkan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Untuk menyewa mobil, Anda harus memiliki KTP asli yang
                      masih berlaku dan SIM A yang sah. Selain itu, mungkin
                      diperlukan deposit sebagai jaminan dan beberapa dokumen
                      tambahan seperti kartu keluarga (KK) atau paspor jika Anda
                      adalah warga asing. Sebagian tempat juga meminta NPWP atau
                      kartu kredit sebagai verifikasi identitas.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Berapa hari minimal sewa mobil lepas kunci?
                    </Accordion.Header>
                    <Accordion.Body>
                      Biasanya, minimal sewa mobil lepas kunci adalah 1 hari (24
                      jam). Namun, beberapa tempat mungkin memiliki penawaran
                      khusus untuk sewa jangka pendek seperti 6 jam atau 12 jam,
                      tergantung pada kebijakan mereka.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Berapa hari sebelumnya sebaiknya booking sewa mobil?
                    </Accordion.Header>
                    <Accordion.Body>
                      Untuk memastikan ketersediaan kendaraan, disarankan untuk
                      melakukan booking minimal 1-2 hari sebelum hari penyewaan,
                      terutama pada musim liburan atau akhir pekan. Jika menyewa
                      kendaraan khusus atau premium, lebih baik melakukan
                      booking seminggu sebelumnya.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Apakah ada biaya antar-jemput?
                    </Accordion.Header>
                    <Accordion.Body>
                      Layanan antar-jemput biasanya tersedia, namun bisa
                      dikenakan biaya tambahan tergantung jarak lokasi
                      pengantaran. Beberapa tempat sewa menawarkan layanan ini
                      secara gratis di area tertentu seperti pusat kota atau
                      bandara, sementara untuk daerah yang lebih jauh akan
                      dikenakan biaya sesuai dengan kebijakan perusahaan.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Bagaimana jika terjadi kecelakaan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Jika terjadi kecelakaan, segera hubungi pihak rental dan
                      kepolisian setempat. Penyewa bertanggung jawab atas biaya
                      perbaikan kendaraan sesuai dengan perjanjian awal.
                      Beberapa tempat rental menyediakan asuransi yang meliputi
                      kerusakan atau kecelakaan, namun ada juga yang membebankan
                      sebagian tanggung jawab kepada penyewa. Pastikan untuk
                      mengecek ketentuan asuransi sebelum menyewa.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

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
      </div>
    </>
  );
}
