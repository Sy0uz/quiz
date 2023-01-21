import React, {useState} from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import s from './MyNavbar.module.css'
import { useNavigate } from 'react-router-dom'
import Authorization from '../../components/authorization/Authorization'
import { PostService } from '../../API/PostService'
import { useDispatch, useSelector } from 'react-redux'
import { ExitAC } from '../../Redux/reducers/mainReducer'

const MyNavbar = () => {

    const dispatch = useDispatch();
    const {user, isAuth} = useSelector(state => state.main)

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

    const exitHandler = async () => {
        history('/quiz')
        await PostService.logoutUser();
        dispatch(ExitAC());
    }


    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <div className='d-flex'>
                    <Navbar.Brand><Link to={'/quiz'} className={s.header}>Syouz's Quiz</Link></Navbar.Brand>

                    <Nav className='align-items-center'>
                        <Nav.Link onClick={() => {history('/users')}}>Пользователи</Nav.Link>
                        <Nav.Link onClick={() => {history('/quiz')}}>Опросы</Nav.Link>
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
                            <Link to={'/profile'}><Button variant='light' className={s.btn}>{user.username}</Button></Link>
                            <Button variant='outline-light' className={s.btn} onClick={exitHandler}>Выйти</Button>
                        </div>
                }
            </Container>

            <Authorization show={modalShow} setShow={setModalShow} type={authType}/>
        </Navbar>
    )
}

export default MyNavbar