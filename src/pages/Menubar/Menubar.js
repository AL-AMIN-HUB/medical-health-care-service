import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Menubar = () => {
  const { user, logOut } = useAuth();
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
              {user?.email ? (
                <NavLink to="/login">
                  <button onClick={logOut} className="btn btn-outline-dark px-4 fs-5  ms-2">
                    Logout
                  </button>
                </NavLink>
              ) : (
                <div>
                  <NavLink to="/login">
                    <button className="btn btn-outline-dark px-4 fs-5  ms-2">Login</button>
                  </NavLink>
                  <NavLink to="/register">
                    <button className="btn btn-danger px-4 fs-5 ms-2">Register</button>
                  </NavLink>
                </div>
              )}

              <NavLink className="text-decoration-none fs-5 text-dark mt-2 ms-4" to="/">
                <img style={{ width: "40px", borderRadius: "50%" }} src={user?.photoURL} alt="" /> {user?.displayName}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
