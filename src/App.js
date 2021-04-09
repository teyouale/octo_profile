import React from "react";
import { Container, Form } from "react-bootstrap";
import styled from "styled-components";
import mixins from "./styles/mixins";

const StyledContainer = styled.div`
  ${mixins.flexCenter};
`;

function App() {
  return (
    <StyledContainer>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Your Github UserName</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Your User Name"
            />
          </Form.Group>
        </Form>
      </Container>
    </StyledContainer>
  );
}

export default App;
