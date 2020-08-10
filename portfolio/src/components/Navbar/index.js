import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Navigationbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Bert Keller</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Skills</Nav.Link>
                        <Nav.Link href="#deets">Resume</Nav.Link>
                        <Nav.Link href="#memes">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigationbar
