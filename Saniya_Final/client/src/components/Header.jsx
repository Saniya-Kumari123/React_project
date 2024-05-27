import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <header>
        {/* <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={Logo}
                alt="RestAPI Logo"
                width="50"
                height="50"
                className="d-inline-block align-center"
              />{" "}
              <span className="text-light">
                <b>Infinite</b>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/product">
                  <Nav.Link>Product</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="index.html">
                    <img
                        src={Logo}
                        alt="logo"
                        className="img-fluid"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="mx-2 active">
                            Home
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">

                        <Nav.Link className="mx-2">
                            About Us
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link className="mx-2">
                            Contact
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cources">
                        <Nav.Link className="mx-2">
                            Courses
                        </Nav.Link>
                    </LinkContainer>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
