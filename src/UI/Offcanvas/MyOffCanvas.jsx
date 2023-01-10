import React, { useContext, useState } from 'react'
import { Button, Offcanvas, Form } from 'react-bootstrap'
import { AppContext } from '../../Context/AppContext'
import MyModal from '../MyModal/MyModal'

const MyOffCanvas = ({show, handleClose}) => {

    const {setIsAuth} = useContext(AppContext);

    const [enterVisible, setEnterVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);

    const [login, setLogin] = useState({
        login:'',
        password:'',
    })

    const [registration, setRegistration] = useState({
        login:'',
        password:'',
    })

    const onRegistration = () => {
        setIsAuth(true)
        handleClose()
    }

    const onLogin = () => {
        setIsAuth(true)
        handleClose()
    }

    const showModalEnter = () => {
        setEnterVisible(true)
    }

    const showModalRegistr = () => {
        setRegVisible(true)
    }

    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Войти или зарегистрироваться</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Button variant='dark' onClick={showModalEnter}>Вход</Button>
                    <Button variant='dark' className='mx-2' onClick={showModalRegistr}>Регистрация</Button>
                </Offcanvas.Body>
            </Offcanvas>

            <MyModal title='Вход' apply='Войти' show={enterVisible} setShow={setEnterVisible} onApply={onLogin}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="email" placeholder="Введите логин..." value={login.login} onChange={e => setLogin({...login, login:e.target.value})}/>
                        <Form.Text className="text-muted">
                            Мы не делимся данными.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль..." value={login.password} onChange={e => setLogin({...login, password:e.target.value})}/>
                    </Form.Group>
                </Form>
            </MyModal>

            <MyModal title='Регистрация' apply='Зарегистрироваться' show={regVisible} setShow={setRegVisible}  onApply={onRegistration}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="email" placeholder="Введите логин..." value={registration.login} onChange={e => setRegistration({...registration, login:e.target.value})}/>
                        <Form.Text className="text-muted">
                            Мы не делимся данными.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль..."  value={registration.password} onChange={e => setRegistration({...registration, password:e.target.value})}/>
                    </Form.Group>
                </Form>
            </MyModal>
        </div>
    )
}

export default MyOffCanvas