import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import googleIcon from "../../images/google-g-2015.svg";
import "./Register.css";

const Register = () => {
  const { signInGoogle, handleRegister, setEmail, setPassword, email, password, error } = useAuth();
  // onsubmit handle refresh webpage
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    console.log(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const continueSubmit = () => {
    handleRegister(email, password);
  };
  return (
    <div style={{ height: "100vh" }} className=" simple-white-bg position-relative">
      <div style={{ width: "480px" }} className=" register bg-white shadow p-4 mx-auto py-5 text-center">
        <h4>Welcome to Medcity Health Service</h4>

        <img
          style={{ width: "100px" }}
          className="img-fluid"
          src="https://images-platform.99static.com/sAQgJmy-p2hgZCxLj1PdmCYwg0M=/105x97:873x865/500x500/top/smart/99designs-contests-attachments/68/68095/attachment_68095202"
          alt=""
        />
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label className="d-md-block d-none" column sm="3">
              Name:
            </Form.Label>
            <Col sm="9">
              <Form.Control required onBlur={handleName} placeholder="Type Your Name" />
            </Col>
          </Form.Group>
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
          <Button onClick={continueSubmit} className="button-active-color border-0 fs-5 px-3 w-100" type="submit">
            Continue
          </Button>

          <p className="mt-3">
            Already have an account?{" "}
            <Link className="text-decoration-none" to="/login">
              {" "}
              Log in
            </Link>
          </p>

          <h5 className="my-3">OR</h5>
          <Button onClick={signInGoogle} className=" border-0 fs-5 px-3 w-100" type="submit">
            <img style={{ width: "40px" }} src={googleIcon} className="img-fluid" alt="" /> Continue With Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
