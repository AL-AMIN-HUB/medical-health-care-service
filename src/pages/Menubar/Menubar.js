import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Menubar = () => {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img-fluid" style={{ width: "150px" }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" navbarScroll>
              <NavLink className="text-decoration-none fs-5 text-dark ms-4" to="/home">
                Home
              </NavLink>
              <NavLink className="text-decoration-none fs-5 text-dark ms-4" to="/about">
                About
              </NavLink>
              <NavLink className="text-decoration-none fs-5 text-dark ms-4" to="/services">
                Services
              </NavLink>
              <NavLink className="text-decoration-none fs-5 text-dark ms-4" to="/pricing">
                Pricing
              </NavLink>
              <NavLink className="text-decoration-none fs-5 text-dark ms-4" to="/contact">
                Contact
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/login">
                <button className="btn btn-outline-dark px-4 fs-5  ms-2">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn btn-danger px-4 fs-5 ms-2">Register</button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
