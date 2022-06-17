
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsBicycle } from "react-icons/bs";
import {CartWidget} from '../CartWidget/cartwidget';
import React from "react";
const NavBarExample = () =>{
    return(
        <>
    <Navbar className="navBg" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">< BsBicycle/>Solo Motos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link >Partes</Nav.Link>
            <Nav.Link >Motos</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        < CartWidget />
      </Container>
    </Navbar>

    

      


        </>
    )
}
export default NavBarExample;