import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import s from './MyNavbar.module.css'

const MyNavbar = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand><Link to={'/'} className={s.header}>Syouz's Quiz</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Item><Link to={'/'} className={s.btn}><Button variant='outline-light'>Home</Button></Link></Nav.Item>
                        <Nav.Item><Link to={'/quiz'} className={s.btn}><Button variant='outline-light'>Quizes</Button></Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar