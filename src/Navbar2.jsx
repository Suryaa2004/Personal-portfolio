import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import React from 'react';
function Navbar2() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav fixed-top">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="title">
            <Nav.Link href="/" className='item'>Home</Nav.Link>
            <Nav.Link href="#about" className='item'>About</Nav.Link>
            <Nav.Link href="#skills" className='item'>Skills</Nav.Link>
            <Link className='item nav-link' to='/projects'>Projects</Link>
            <Nav.Link href="#contact" className='item'>Contact</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;