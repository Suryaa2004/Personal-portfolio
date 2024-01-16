
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar1 from './Navbar1';
// import Contact from './Contact';
// import Home from './Home';
// import Education from './Education';
// import Skills from './Skills';
// import { Link } from 'react-router-dom';
// import Timeline from './TimeLine';

import Navbar2 from './Navbar2';
import Footer from './Footer';
import HomePage from './HomePage';
import Flipcard from './Flipcard';
// import { Nav } from 'react-bootstrap';
const App = () => {
 
  return (
    
    
    // <Home/>
    // <Timeline/>
    // <Skills/>
    // 
   
    <Router>
    
     <Navbar2/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/projects' element={<Flipcard/>}/> 
      </Routes>
      <Footer/>
    </Router>

  

    
    
  );
};

export default App;
