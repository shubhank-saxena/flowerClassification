import React from "react";
import Homepage from "./Homepage/Homepage";
import Prediction from "./Prediction/Prediction";
import Image from "./Image/Image";
import { Container } from "react-bootstrap";
import "./style.css";
class App extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="content">
          <Homepage />
          <Image />
          <Prediction />
        </Container>
      </>
    );
  }
}

export default App;
