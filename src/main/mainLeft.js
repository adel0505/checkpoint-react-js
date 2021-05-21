import React, { Component } from "react";
import { Nav } from "react-bootstrap";

const MainLeft = () => {
  let list = [
    { href: "#link1", libelle: "Telechargement" },
    { href: "#link2", libelle: "Monetique" },
    { href: "#link3", libelle: "Services" },
    { href: "#link4", libelle: "Change" },
    { href: "#link5", libelle: "Bourse" },
    { href: "#link6", libelle: "Budget" },
    { href: "#link7", libelle: "Finance" },
  ];
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Compte</Nav.Link>

      {list.map((el) => (
        <Nav.Link eventKey={el.href}>{el.libelle}</Nav.Link>
      ))}
    </Nav>
  );
};

export default MainLeft;
