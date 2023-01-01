import React, {Component, Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="nav-font" href="#home"><NavLink to="/">Home</NavLink></Nav.Link>
                                <Nav.Link className="nav-font" href="#link"><NavLink to="/coursePlan">Course Plan</NavLink></Nav.Link>
                                <Nav.Link className="nav-font" href="#link"><NavLink to="/registration">Registration</NavLink></Nav.Link>
                                <Nav.Link className="nav-font" href="#link"><NavLink to="/freeClass">Free Class</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;

