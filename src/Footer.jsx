import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./Footer.css";
// import git from "./git.png"
// import insta from "./instagram.png";
import x from "./twitt.png";
// import linkedin from "./linkedin.png";
import github from "./github.png";
import { Link } from 'react-router-dom';
function ResponsiveAutoExample() {
  return (
    <footer className='footer' id='contact'>
         <Container >
      <Row>
        <Col sm={6}>
            <h3>Quick links</h3>
            <a href="#about"><h5>About</h5></a>
            <a href="#skills"><h5>Skills</h5></a>
            <h5><Link to="/projects" className='footer-router'>Projects</Link></h5>
            
        </Col>
        <Col sm={6}>
            <h3>Suryaa K Sridhar</h3>
            <h5>Contact : +91 97898 24598</h5>
            <a href="mailto:suryaasridhar2004@gmail.com"><h5>Mail to :  suryaasridhar2004@gmail.com</h5></a>
        </Col>
      </Row >
      
      {/* <Row className="justify-content-md-center frow"> */}
      <Row className='justify-content-center icons'>
  <Col md="auto">
    <a href="https://instagram.com/_su_ry_aa_18">
    <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
    </a>
  </Col>
  <Col md="auto">
    <a href="https://twitter.com/Suryaa_18" >
        <img src={x} alt="" className='x-image' />
    </a>
  </Col>
  <Col md="auto">
    <a href="https://www.linkedin.com/in/suryaa-ks-95971b227/">
    <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
    </a>
  </Col>
  <Col md="auto">
    <a href="https://github.com/Suryaa2004">
     <img src={github} alt="" className='github-image' />
    </a>
  </Col>
</Row>


    </Container>

    </footer>
   
  );
}

export default ResponsiveAutoExample;