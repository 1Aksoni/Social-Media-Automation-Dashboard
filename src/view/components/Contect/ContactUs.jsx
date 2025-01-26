import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    // Add your form submission logic here
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {showAlert && (
        <Alert variant="success" className="text-center mb-4">
          Your message has been sent successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" className="text-center mb-4">
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
