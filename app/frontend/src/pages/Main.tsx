import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import loginIcon from './Images/tree.jpeg';
import JobListeing from './JobListing';
import topics from "./Topics/topics.json"
import VideoBox from './VideoBox';

const Main = () => {

    const navigate = useNavigate();


    return (<>
        
        <div style={{backgroundColor: "white"}}>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid style = {{position:"relative", paddingLeft:"10%", paddingRight:"10%", paddingTop:"10px", paddingBottom:"10px"}}>
                <Navbar.Brand onClick={() => navigate("/main")}> SkillUp </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '150px' }}
                    navbarScroll
                >
                    <Nav.Link onClick={() => navigate("/chat")}>Chatbot</Nav.Link>
                    <Nav.Link onClick={() => navigate("/todolist")}>To-do List</Nav.Link>
                    <Nav.Link onClick={() => navigate("/lifelonglearning")}> </Nav.Link>
                    <NavDropdown title="Lifelong Learning" id="navbarScrollingDropdown">
                        <NavDropdown.Item onClick={() => navigate("/dashboard")}>
                            Learning Dashboard
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/job")}>
                            Job Openings
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        
                    </NavDropdown>
                </Nav>
                <Form className="d-flex" >
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <button >Search</button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
            <Container >
                
                <h1 style = {{textAlign:"center", padding:"10px"}}> Week {topics.language[0].week} </h1>

                {/** Course List: Date, Topic(Clickable Link), Thumbnail */}
                
                <div >
                    <Row style = {{display: "flex"}}>
                    {   
                        topics.language[0].content.slice(0,3).map((contentItem, index) => {
                            
                            return (
                                <Col>
                                    <VideoBox
                                        
                                        day = {contentItem.day}
                                        theme = {contentItem.theme}
                                        resource = {contentItem.resource}
                                        
                                    />
                                </Col>
                                )
                        })
                        
                    }
                    </Row>
                </div>
                <div>
                    <Row style = {{display: "flex"}}>
                    {
                        topics.language[0].content.slice(3,6).map((contentItem, index) => {
                            
                            return (
                                
                                <Col>
                                    <VideoBox
                                        
                                        day = {contentItem.day}
                                        theme = {contentItem.theme}
                                        resource = {contentItem.resource}
                                        
                                    />
                                </Col>
                                )
                        })
                    }
                    </Row>
                </div>

            </Container>                        
        </div>
        </>
    )
}

export default Main
