import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SiChainlink } from 'react-icons/si'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={{ backgroundColor: 'rgba(80, 100, 150, 1)' }} variant="dark" >
            <Navbar.Brand to="#home"><SiChainlink />Mohammad Faysal<SiChainlink /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto text-justify">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/skill">Skill</Nav.Link>
                    <Nav.Link as={Link} to="/service">Service</Nav.Link>
                    <Nav.Link as={Link} to="/project">Project</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;