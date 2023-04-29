import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import "./Header.css";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <h4>Journalism Without Fear or Favour</h4>
        <p>{moment().format("dddd, MMMM D YYYY, ")}</p>
      </div>

      <div>
        <div className="box container d-flex">
          <div>
            <Button variant="danger">Latest</Button>
          </div>
          <div>
            <Marquee speed={100} className="marquee  text-danger text-bold">
              I can be a React component, multiple React components, or just
              some text..... I can be a React component, multiple React
              components, or just some text.....
            </Marquee>
          </div>
        </div>
      </div>

      <Navbar
        className="container navbar"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="btn-login" variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
