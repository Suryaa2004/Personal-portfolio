import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./Footer.css";
import Text from "./Text";
// import git from "./git.png"
// import insta from "./instagram.png";
import x from "./twitt.png";
// import linkedin from "./linkedin.png";
import github from "./github.png";
import { Link } from 'react-router-dom';
import phone from "./phone.png";
function Footer() {
  return (
    <footer className='footer' id='contact'>
      <Text>
         <Container>
      <Row>
        <Col sm={6} className="text-center">
          <h3>Quick links</h3>
          <a href="#about"><h5>About</h5></a>
          <a href="#skills"><h5>Skills</h5></a>
          <h5><Link to="/projects" className='footer-router'>Projects</Link></h5>
        </Col>
        <Col sm={6} className='d-flex flex-column align-items-center justify-content-center text-center'>
  <h3>Suryaa K Sridhar</h3>
  <div className='phone-icon d-flex align-items-center'>
    <img src={phone} alt="phone icon" />
    <h5 className='ml-2'>9789824598</h5>
  </div>
  <div className='mail-icon d-flex align-items-center'>
    <img width="32" height="32" src="https://img.icons8.com/fluency/32/gmail-new.png" alt="gmail-new" />
    <a href="mailto:suryaasridhar2004@gmail.com"><h5>suryaasridhar2004@gmail.com</h5></a>
  </div>
</Col>


      </Row>
      <Row className='justify-content-center icons'>
        <Col xs="auto" md="auto">
          <a href="https://instagram.com/_su_ry_aa_18">
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
          </a>
        </Col>
        <Col xs="auto" md="auto">
          <a href="https://twitter.com/Suryaa_18" >
            <img src={x} alt="" className='x-image' />
          </a>
        </Col>
        <Col xs="auto" md="auto">
          <a href="https://www.linkedin.com/in/suryaa-ks-95971b227/">
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
          </a>
        </Col>
        <Col xs="auto" md="auto">
          <a href="https://github.com/Suryaa2004">
            <img src={github} alt="" className='github-image' />
          </a>
        </Col>
      </Row>
    </Container>
    </Text>
    </footer>
   
  );
}

export default Footer;