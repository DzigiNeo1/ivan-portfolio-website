import React from "react";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import eplephantLogo from "../Elephant.png";
import {Link} from "react-scroll"
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="navbar-collapse">
        <Navbar.Brand >
          <img className="logo" src={eplephantLogo} alt="ElephantLogo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link smooth={true} to="home" offset={-150}>
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link smooth={true} to="about" offset={-300}>
            <Nav.Link href="#about">About</Nav.Link>
            </Link>
            <Link smooth={true} to="portfolio" offset={-300}>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Link>
            <Link smooth={true} to="contact">
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
