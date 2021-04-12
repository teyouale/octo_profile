import React from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import FormComponent from "./Components/FormComponent";
import StyledContainer from "./Components/styles/FormStyles";
function UserInfo() {
  let { userName } = useParams();
  return <div>WeCome To ${userName} GitHub Stats</div>;
}
function App() {
  return (
    <Router>
      <Route exact path="/">
        <StyledContainer>
          <FormComponent />
        </StyledContainer>
      </Route>
      <Route path="/:userName">
        <UserInfo />
      </Route>
    </Router>
  );
}

export default App;
