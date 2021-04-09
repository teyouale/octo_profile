import React from "react";
import {Container, Form} from "react-bootstrap";
import './App.css';

function App() {
  return (
      <Container>
          <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Enter Your Github UserName</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
          </Form>
      </Container>
  );
}

export default App;
