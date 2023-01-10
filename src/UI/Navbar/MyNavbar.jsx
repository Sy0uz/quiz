import React, {useContext, useState} from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import s from './MyNavbar.module.css'
import MyOffCanvas from '../Offcanvas/MyOffCanvas'
import { AppContext } from '../../Context/AppContext'

const MyNavbar = () => {

    const {isAuth} = useContext(AppContext);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand><Link to={'/'} className={s.header}>Syouz's Quiz</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Item><Link to={'/'} className={s.btn}><Button variant='outline-light'>Home</Button></Link></Nav.Item>
                        <Nav.Item><Link to={'/quiz'} className={s.btn}><Button variant='outline-light'>Quizes</Button></Link></Nav.Item>
                        {!isAuth ? <Nav.Item><Button variant='light' onClick={handleShow}>Авторизация</Button></Nav.Item> : <></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <MyOffCanvas show={show} handleClose={handleClose}/>
        </Navbar>
    )
}

export default MyNavbar