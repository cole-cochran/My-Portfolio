import { Col, Row, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import React, { useState } from 'react';
import { Typography } from "@mui/material";
// import ReactDOM from 'react-dom';

  
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
<Form>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> <Button variant="primary" type="submit"> Submit </Button>
     </Form>


  export default Contact;