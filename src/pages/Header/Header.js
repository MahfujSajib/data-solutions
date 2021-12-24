import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Advisory from '../Advisory';
import Solutions from '../Solutions';
import '../style/Header.css'

const Header = () => {
    return (
        <Navbar className='navbar' expand="lg">
            <Container fluid>
                <h1 href="#">Data</h1>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', alignItems: "center" }}
                        navbarScroll
                    >
                        <Link className='industry' to='/industry'>Industries</Link>
                        <NavDropdown title="Services" id="navbarScrollingDropdown">
                            <Link style={{ textDecoration: 'none', width: '100%' }} to='/advisory'>
                                <Solutions></Solutions>
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


