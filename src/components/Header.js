import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SiChainlink } from 'react-icons/si'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <Navbar
            data-aos="fade-down"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            collapseOnSelect expand="lg" sticky="top" style={{ backgroundColor: 'rgba(80, 100, 150, 1)' }} variant="dark" >
            <Container>
                <Navbar.Brand to="#home"><SiChainlink />Mohammad Faysal<SiChainlink /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-justify">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Project</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;