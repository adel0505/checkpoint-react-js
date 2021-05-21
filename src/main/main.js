import React, { Component } from "react";
import "./main.css";
import { Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import MainCenter from "./mainCenter";
import MainLeft from "./mainLeft";
import MainRight from "./mainRight";

class Main extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={2} className="MainLeft">
            <MainLeft />
          </Col>
          <Col sm={2} className="MainRight">
            <MainRight />
          </Col>
          <Col className="MainCenter">
            <MainCenter />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Main;
