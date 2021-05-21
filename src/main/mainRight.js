import React, { Component } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

const MainRight = () => {
  let list = [
    { href: "#link1", libelle: "link1" },
    { href: "#link2", libelle: "link2" },
    { href: "#link3", libelle: "link3" },
    { href: "#link4", libelle: "link4" },
    { href: "#link5", libelle: "link5" },
    { href: "#link6", libelle: "link6" },
    { href: "#link7", libelle: "link7" },
    { href: "#link8", libelle: "link8" },
    { href: "#link9", libelle: "link9" },
    { href: "#link10", libelle: "link10" },
  ];
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col>
          <ListGroup>
            {list.map((el) => (
              <ListGroup.Item action href={el.href}>
                {el.libelle}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default MainRight;
