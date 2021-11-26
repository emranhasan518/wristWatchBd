import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, admin, logout } = useAuth()
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo-img" src="https://image.flaticon.com/icons/png/512/1247/1247855.png" />
                        <h6 className="logo-img"> Wrist Watch BD</h6>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/ourservices">Our Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {/* <Nav.Link as={Link} to="/register">Regiser</Nav.Link> */}
                            

                            {
                                user?.email ?
                                    <>
                                        <Nav.Link as={Link} to="/userorders">My-Orders</Nav.Link>
                                        <Nav.Link as={Link} to="/dashbord">Dashbord</Nav.Link>
                                        <h6 className="text-white pt-2">{user.displayName}</h6>
                                        <Nav.Link onClick={logout} >LogOut</Nav.Link>

                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;