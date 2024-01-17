import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Skills.css";
import html from "./html.png"
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import c from "./c.png";
import jva from "./java.png";
import python from "./python.png";
// import communication from "./communication.png";
// import ps from "./ps.png";
import php from "./php.png";
import node from "./node.png";
import sql from "./sql.png";
import Text from './Text';
const Skills= () => {
  return (
    <section id='skills'>
      <Text>
      <h1 className='tech'>Tech Stacks</h1>
      <div className="skills-container">
      {/* Box 1: Programming Languages */}
      <article className='card'>
      <div className="skills-box">
        <h3 className='tech'> <Text>Programming Languages</Text></h3>
        <div className='sbox'>
        <img width="100" height="100" src="https://img.icons8.com/fluency/100/c-programming.png" alt="c-programming"/>
        <img width="100" height="100" src="https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
        <img width="100" height="100" src="https://img.icons8.com/fluency/100/python.png" alt="python"/>
        </div>
        
      </div>
      <span class="top"></span>
  <span class="right"></span>
  <span class="bottom"></span>
  <span class="left"></span>
      </article>
     

      {/* Box 2: Web Development Technologies */}
    
      <article className='card'>
      <div className="skills-box">
      <h3 className='tech'><Text>Web Development Technologies</Text></h3>

        {/* Box 1: HTML, CSS, JavaScript, React, Angular */}
        {/* <div className="sub-box "> */}
        <Container>
      <div className="sub-box">
        <Row className="justify-content-center">
          <Col xs="auto">
            <img width="96" height="96" src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-5--v1" />
          </Col>
          <Col xs="auto">
            <img width="96" height="96" src="https://img.icons8.com/color/96/css3.png" alt="css3" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <img width="96" height="96" src="https://img.icons8.com/color/96/javascript--v1.png" alt="javascript--v1" />
          </Col>
          <Col xs="auto">
            <img width="96" height="96" src="https://img.icons8.com/officel/96/react.png" alt="react" />
          </Col>
        </Row>
      </div>
    </Container>
        {/* </div> */}

        {/* Box 2: PHP, Node.js */}
        <div className="sub-box">
        <img width="116" height="116" src="https://img.icons8.com/officel/96/php-logo.png" alt="php-logo"/>
        <img width="100" height="100" src="https://img.icons8.com/color/100/nodejs.png" alt="nodejs"/>
        </div>

        {/* Box 3: MySQL */}
        <div className="sub-box">
        <img width="100" height="100" src="https://img.icons8.com/external-those-icons-flat-those-icons/100/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-flat-those-icons"/>
        </div>
      </div>
      <span class="top"></span>
  <span class="right"></span>
  <span class="bottom"></span>
  <span class="left"></span>
      </article>
    
    </div>
    </Text>
    </section>
  );
};

export default Skills;
