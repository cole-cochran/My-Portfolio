import { Col, Form, Button, } from "react-bootstrap";
import React, { useState } from 'react';
import { Typography } from "@mui/material";


  
function Contact() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="signup-form-section">
          <Typography>
              Want to work together? Send me an email!
           </Typography>   
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom03">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid message.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
  
    );
  }



  export default Contact;