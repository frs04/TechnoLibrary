import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPass, setConfirmPass] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="signup">
      <div className="row">
      <Card className="cardsignup col d-flex justify-content-center">
        <Card.Body>
      <Form onSubmit={handleSubmit}>
        <h1 className="logintitle">SignUp</h1>
        <Form.Group size="lg" controlId="name">
        <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
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
        <Form.Group size="lg" controlId="ConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={ConfirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </Form.Group>
        
        <div className="row">
          <label>Already have an account? <Link to="/Login" className="SignupLink">Login</Link></label>
        </div>
        <Button className="button btn-primary" block size="lg" type="submit">
          SignUp
        </Button>
      </Form>
      </Card.Body>
      </Card>
    </div>
    </div>
        );
    

};

export default SignUp;
