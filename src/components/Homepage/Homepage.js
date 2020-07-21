import React from "react";
import { Row, Col } from "react-bootstrap";

const Homepage = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Flower Classification using Deep Learning</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            This application is serves the purpose of identification of flower's
            species from the picture that it is provided.
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            It's trained on Resnet model with base for feature extraction and
            new layers added for classification system
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            It takes image as an input and displays <strong>top 5</strong>{" "}
            classes with their respective probabilitites.
          </h5>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
