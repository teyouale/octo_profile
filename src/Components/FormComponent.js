import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function FormComponent() {
  let history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue([event.target.value]);
  };
  const handleSubmission = () => {
    console.log("On Submission Triggered");
  };
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault(); //Prevent From Reloading
        // handleSubmission();
        history.push(`/${inputValue[0]}`);
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
  );
}

export default FormComponent;
