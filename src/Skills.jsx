import React from 'react';
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
        <h3 className='tech'>Programming Languages</h3>
        <div className='sbox'>
          <img className='images' src={c} alt="C" />
        <img className='images' src={jva} alt="Java" />
        <img className='images' src={python}alt="Python" />
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
      <h3 className='tech'>Web Development Technologies</h3>

        {/* Box 1: HTML, CSS, JavaScript, React, Angular */}
        <div className="sub-box">
         <img className='wimages' src={html} alt="HTML" />
          <img className='wimages'src={css} alt="CSS" />
          <img className='wimages'src={js} alt="JavaScript" />
          <img className='wimages'src={react} alt="React" />
          {/* <img src="url_to_angular_image" alt="Angular" /> */}
        </div>

        {/* Box 2: PHP, Node.js */}
        <div className="sub-box">
          <img className='wimages' src={php} alt="PHP" />
          <img className='wimages' src={node} alt="Node.js" />
        </div>

        {/* Box 3: MySQL */}
        <div className="sub-box">
          <img className='wimages' src={sql} alt="MySQL" />
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
