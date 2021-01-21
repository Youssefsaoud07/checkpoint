import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;YOUSSEF SAOUD</strong>
                                <br />A passionate programmer and a market maker, born and brought up in Tunisia. I am a Full Stack Web Developer with React.js, Redux and Node.js .
                <br />
                In 2017, I successfully completed my studies'.
                <br />
                
               
                <br />Now i have my own start-up IQ CONCEPT and i want to make it to the next level 
                <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="http://iqconcept.com.tn/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                IQ Concept
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Youssefsaoud07" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                      </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;