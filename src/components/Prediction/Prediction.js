import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";

const Prediction = () => {
  return (
    <div style={{ width: "100vh", textAlign: "center", marginTop: "3px" }}>
      <h2 align="center"> The top 5 classes are: </h2>
      <br></br>
      <hr></hr>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Species Name and Details
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">Species Name %confidence</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Prediction;
