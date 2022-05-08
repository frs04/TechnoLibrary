import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div className="row">
        <Card className="cardlogin col d-flex justify-content-center">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h1 className="logintitle">Login</h1>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
                <div className="row">
                  <label>You don't have an account? <Link to="/SignUp" className="SignupLink">SignUp</Link></label>
                </div>
              <button className="LoginBtn" block size="lg" type="submit" disabled={!validateForm()}>
                Login
              </button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );


};

export default Login;
