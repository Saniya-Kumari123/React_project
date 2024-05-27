import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <footer className="text-center text-light bg-dark">
        <Container className="pt-4">
          <Row className="mb-4">
            <Col>
              <Button
                variant="link"
                href="#!"
                className="btn-lg text-light m-1"
              >
                <i className="fab fa-facebook-f"></i>
              </Button>

              <Button
                variant="link"
                href="#!"
                className="btn-lg text-light m-1"
              >
                <i className="fab fa-twitter"></i>
              </Button>

              <Button
                variant="link"
                href="#!"
                className="btn-lg text-light m-1"
              >
                <i className="fab fa-google"></i>
              </Button>

              <Button
                variant="link"
                href="#!"
                className="btn-lg text-light m-1"
              >
                <i className="fab fa-instagram"></i>
              </Button>

              <Button
                variant="link"
                href="#!"
                className="btn-lg text-light m-1"
              >
                <i className="fab fa-linkedin"></i>
              </Button>

              <Button
                variant="link"
                href="#!"
                className="btn-lg text-light m-1"
              >
                <i className="fab fa-github"></i>
              </Button>
            </Col>
          </Row>
        </Container>

        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-light text-decoration-none"> RestAPI</a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
