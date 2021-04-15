import React from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import FormComponent from "./Components/FormComponent";
import StyledContainer from "./Components/styles/FormStyles";
import UserComponent from "./Components/UserComponent";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <StyledContainer>
          <FormComponent />
        </StyledContainer>
      </Route>
      <Route path="/:userName">
        <UserComponent />
      </Route>
    </Router>
  );
}

export default App;
