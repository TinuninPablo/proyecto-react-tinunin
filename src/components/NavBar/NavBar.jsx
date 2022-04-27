import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'


function NavBar(props) {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className='navStyles' >GamerStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Productos</Nav.Link>
          <Nav.Link href="#link">Contactanos</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Auriculares</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Camaras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Microfonos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Monitores</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Mousepad</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Parlantes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Ratones</NavDropdown.Item>
          </NavDropdown>
          <CartWidget/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
       // <div className='divNav'>
        //    <h1 className='navBar-logo'>GamerStore</h1>
         //   <ul className='nav'>
        //        <li><a href="#productos" className='item'>Productos</a></li>
         //       <li><a href="#categorias" className='item'>Categorias</a></li>
         //       <li><a href="#contactanos" className='item'>Contactanos</a></li>
              //  <CartWidget/>
        //    </ul>
            
       // </div>
    );
}

export default NavBar;