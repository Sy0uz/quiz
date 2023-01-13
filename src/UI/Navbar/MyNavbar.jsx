import React, {useContext, useState} from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import s from './MyNavbar.module.css'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import Authorization from '../../components/authorization/Authorization'

const MyNavbar = () => {

    const {isAuth, setIsAuth} = useContext(AppContext);

    const [modalShow, setModalShow] = useState(false);
    const [authType, setAuthType] = useState('');

    const history = useNavigate();

    const loginHandler = () => {
        setAuthType('login')
        setModalShow(true);
    }

    const registrationHandler = () => {
        setAuthType('registration')
        setModalShow(true);
    }

    const exitHandler = () => {
        setIsAuth(false);
        localStorage.removeItem('token');
    }


    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <div className='d-flex'>
                    <Navbar.Brand><Link to={'/'} className={s.header}>Syouz's Quiz</Link></Navbar.Brand>

                    <Nav className='align-items-center'>
                        <Nav.Link onClick={() => {history('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {history('/quiz')}}>Quizes</Nav.Link>
                    </Nav>                    
                </div>

                {
                    !isAuth
                    ? 
                        <div>
                            <Button variant='outline-light' className={s.btn} onClick={loginHandler}>Войти</Button>
                            <Button variant='light' className={s.btn} onClick={registrationHandler}>Регистрация</Button>
                        </div>
                    :
                        <div>
                            <Button variant='outline-light' className={s.btn} onClick={exitHandler}>Выйти</Button>
                        </div>
                }
            </Container>

            <Authorization show={modalShow} setShow={setModalShow} type={authType}/>
        </Navbar>
    )
}

export default MyNavbar