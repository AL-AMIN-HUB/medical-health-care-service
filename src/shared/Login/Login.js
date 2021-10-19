import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, error } = useAuth();

  // onsubmit handle refresh webpage
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const continueLogin = () => {
    handleLogin(email, password);
  };
  return (
    <div style={{ height: "100vh" }} className="service-provider-bg position-relative">
      <div style={{ width: "480px" }} className="bg-white login shadow p-4 mx-auto py-5 text-center">
        <img
          style={{ width: "100px" }}
          className="img-fluid"
          src="https://images-platform.99static.com/sAQgJmy-p2hgZCxLj1PdmCYwg0M=/105x97:873x865/500x500/top/smart/99designs-contests-attachments/68/68095/attachment_68095202"
          alt=""
        />
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className="d-md-block d-none" column sm="3">
              Email:
            </Form.Label>
            <Col sm="9">
              <Form.Control required onChange={handleEmail} placeholder="Enter your email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label className="d-md-block d-none" column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control required onChange={handlePassword} type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <p>{error}</p>

          <Button onClick={continueLogin} className=" border-0 fs-5 px-3 w-100" type="submit">
            Continue
          </Button>

          <p className="mt-3">
            Create a new account?{" "}
            <Link className="text-decoration-none mt-3" to="/register">
              {" "}
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
