import React from "react";
import "./header.css";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Test React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
