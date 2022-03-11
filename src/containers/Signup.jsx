import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState(""); 

  function validateForm() {
    return name.length > 0 && email.length > 0 && password.length > 0 && password2.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>

        <h1 className="Header"> Sign Up for CAM app </h1>

        <Form.Group size="lg" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password2">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
        </Form>

    </div>
  );
}