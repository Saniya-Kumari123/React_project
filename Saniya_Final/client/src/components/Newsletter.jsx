import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Newsletter = () => {
  return (
    <section className="py-3 py-md-5 py-xl-10 bg-light">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
            <h2 className="display-4 mb-4 mb-md-5 mb-xxl-6 text-center">
              Sign up for our newsletter and never miss a thing.
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={9} xl={8} xxl={7}>
            <Form className="row gy-3 gy-lg-0 gx-lg-2 justify-content-center">
              <Col xs={12} lg={8}>
                <Form.Group controlId="email-newsletter-component">
                  <Form.Label className="visually-hidden">
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    aria-label="email-newsletter-component"
                    aria-describedby="email-newsletter-help"
                    required
                  />
                  <Form.Text
                    id="email-newsletter-help"
                    className="text-center text-lg-start"
                  >
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12} lg={3} className="text-center text-lg-start">
                <Button type="submit" className="btn btn-primary bsb-btn-3xl">
                  Subscribe
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
