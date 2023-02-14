import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function HeaderNavigation() {
  return (
    <Navbar className="px-2 mb-2" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Sixberries Demo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/forms">
            Forms
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
