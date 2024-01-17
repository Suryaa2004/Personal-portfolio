import React from "react";
import "./Home.css";
import image from './Suryaa image.jpg';
import Button from 'react-bootstrap/Button';
import About from "./About";
import Text from "./Text";

function Home()
{
    const [modalShow,setModalShow] = React.useState(false);
    return(
        <>
        <body>
        <section id="#Home">

<div className="row heading">
    <div className="col-lg-6 ">
    <h1 className="name"><Text>Suryaa K.S</Text></h1>
    <h3><i className="des">PreFinal year Student at</i> <i className="clgname">Rajalakshmi Engineering College</i></h3>
    <div className="intro">
        <h6 className="nametext"><Text>Feel free to explore my portfolio to learn more about my journey, projects, and the skills I bring to the table. If you have any questions or would like to connect, don't hesitate to reach out. Let's create something amazing together!</Text></h6>
        <Button className="btn" variant="primary" onClick={() => setModalShow(true)} > Know more </Button>
        <About
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>

    </div>
    <div className="col-lg-6 image">
        <img src={image} alt="" className="myimg" />
        
    </div>
</div>




</section>



        </body>
        
        
        
        </>
    )
}
export default Home;