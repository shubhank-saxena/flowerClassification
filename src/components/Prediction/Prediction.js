import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";

const Prediction = () => {
  return (
    <div>
      <h2 align="center"> The top 5 classes are: </h2>
      <br></br>
      <hr></hr>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Species 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Species 2
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Species 3
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Species 4
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Species 5
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">Species 1 details</Tab.Pane>
              <Tab.Pane eventKey="#link2">Species 2 details</Tab.Pane>
              <Tab.Pane eventKey="#link3">Species 3 details</Tab.Pane>
              <Tab.Pane eventKey="#link4">Species 4 details</Tab.Pane>
              <Tab.Pane eventKey="#link5">Species 5 details</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <hr></hr>
      <br></br>
      <Row style={{ width: "100vh", textAlign: "center", marginTop: "3px" }}>
        <Col style={{ backgroundColor: "red" }}>1 of 2</Col>
        <Col style={{ backgroundColor: "green" }}>2 of 2</Col>
      </Row>
    </div>
  );
};

export default Prediction;
