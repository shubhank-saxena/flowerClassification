import React from "react";
import Homepage from "./Homepage/Homepage";
import { Container } from "react-bootstrap";
import "./style.css";
class App extends React.Component {
  render() {
    return (
      <>
        <Container className="content">
          <Homepage />
        </Container>
      </>
    );
  }
}

export default App;
