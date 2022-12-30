import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand>Syouz's Quiz</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Item><Link to={'/'} className='link_btn'>Home</Link></Nav.Item>
                        <Nav.Item><Link to={'/quiz'} className='link_btn'>Quizes</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar