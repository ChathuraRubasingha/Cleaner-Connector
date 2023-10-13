import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function CreateForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    document: null,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      document: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    const errors = {};

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password do not match.";
    }

    // Add more validation rules as needed

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit the form data to your backend or perform further actions
      console.log("Form data submitted:", formData);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Mobile:</Form.Label>
          <Form.Control
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Row>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {validationErrors.confirmPassword && (
                <p className="text-danger">
                  {validationErrors.confirmPassword}
                </p>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default CreateForm;
