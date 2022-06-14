import { Fragment } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from "react-router-dom";
import { BsBicycle } from "react-icons/bs";

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
            <Nav.Link as={Link} to="/partes">Partes</Nav.Link>
            <Nav.Link as={Link} to="/motos">Motos</Nav.Link>

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>

      


        </>
    )
}
export default NavBarExample