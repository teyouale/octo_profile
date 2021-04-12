import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styled from "styled-components";
import theme from "./styles/theme";
import mixins from "./styles/mixins";

const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  height: 100vh;

  form {
    text-align: center;
    background-color: transparent;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    label {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem;
    }
    input {
      background-color: ${colors.darkblue};
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: var(--lightest-slate);
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
      &:focus {
        box-shadow: 0px 0px 8px var(--lightest-slate);
        background: white;
        filter: none;
      }
    }
  }
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue([event.target.value]);
    console.log(inputValue);
  };
  const handleSubmission = () => {
    console.log("On Submission Triggered");
  };
  return (
    <StyledContainer>
      <Form
        onSubmit={(event) => {
          event.preventDefault(); //Prevent From Reloading
          handleSubmission();
        }}
      >
        <Form.Label>Find Your OctoProfile</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter Your User Name"
          onChange={(event) => handleChange(event)}
        />
      </Form>
    </StyledContainer>
  );
}

export default App;
