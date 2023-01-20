import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { PostService } from '../../API/PostService';
import MyModal from '../../UI/MyModal/MyModal';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { CheckUserAuth } from '../../Redux/asyncActions/checkAuthAction';

const Registration = ({show, setShow}) => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const [registration, setRegistration] = useState({
        email:'',
        username:'',
        password:'',
    })

    const onApply = async () => {
        const reg = new FormData();
        reg.append('email', registration.email)
        reg.append('username', registration.username)
        reg.append('password', registration.password)
        const response = await PostService.registerUser(reg);
        if (Object.keys(response).includes('id')){
            await PostService.loginUser(reg);
            dispatch(CheckUserAuth());
        }
        setShow(false);
        history('/')
    }

    const hideModal = () => {
        setRegistration({
            email:'',
            username:'',
            password:'',
        })
        setShow();
    }

    return (
        <MyModal title='Регистрация' apply='Зарегистрироваться' show={show} setShow={hideModal} onApply={onApply}>
            <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control type="email" placeholder="Введите адрес эл. почты..." value={registration.email} onChange={e => setRegistration({ ...registration, email: e.target.value })} />
                </Form.Group>

                <Form.Group className='mb-2' controlId='formBasicUsername'>
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type='text' placeholder='Введите логин...' value={registration.username} onChange={e => setRegistration({ ...registration, username: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." value={registration.password} onChange={e => setRegistration({ ...registration, password: e.target.value })} />
                </Form.Group>
            </Form>
        </MyModal>
    )
}

export default Registration