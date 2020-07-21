import React from "react";
import Homepage from "./Homepage/Homepage";
import Prediction from "./Prediction/Prediction";
import { Container } from "react-bootstrap";
import "./style.css";
class App extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="content">
          <Homepage />
          <Prediction />
        </Container>
      </>
    );
  }
}

export default App;
