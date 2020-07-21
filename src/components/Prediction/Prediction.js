import React from "react";
import { Row, Col } from "react-bootstrap";

const Prediction = () => {
  return (
    <>
      <Row style={{ width: "100vh", textAlign: "center", marginTop: "3px" }}>
        <Col style={{ backgroundColor: "red" }}>1 of 2</Col>
        <Col style={{ backgroundColor: "green" }}>2 of 2</Col>
      </Row>
    </>
  );
};

export default Prediction;
