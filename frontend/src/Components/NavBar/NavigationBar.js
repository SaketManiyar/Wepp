import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
import {SideBar} from "./SideBar";

export default class NavigationBar extends React.Component{
    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <SideBar />
              <Navbar.Brand href="#home"> Wepp</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      width="60rem"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>

                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
