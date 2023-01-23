import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { PostService } from '../../API/PostService';
import MyModal from '../../UI/MyModal/MyModal';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CheckUserAuth } from '../../Redux/asyncActions/checkAuthAction';
import { RegisterUser } from '../../Redux/asyncActions/registrationUserAction';
import { LoginUser } from '../../Redux/asyncActions/loginUserAction';
import { ChangeRegistrationVisibilityAC, ClearRegistrationInputsAC, SetRegistrationEmailAC, SetRegistrationPasswordAC, SetRegistrationUsernameAC } from '../../Redux/reducers/registrationReducer';
import { useEffect } from 'react';

const Registration = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const {isLoading, error, email, username, password, visible, succes, isDirty} = useSelector(state => state.registration);

    const onApply = async () => {
        const reg = new FormData();
        reg.append('email', email)
        reg.append('username', username)
        reg.append('password', password)
        dispatch(RegisterUser(reg));
    }

    const auth = async (formData) => {
        await dispatch(LoginUser(formData))
        dispatch(CheckUserAuth());
    }

    useEffect(() => {
        if (succes) {
            const reg = new FormData();
            reg.append('username', username)
            reg.append('password', password)

            auth(reg);

            dispatch(ChangeRegistrationVisibilityAC(false));
            dispatch(ClearRegistrationInputsAC());
            history('/')
        }
    }, [succes])

    const emailHandler = (e) => {
        dispatch(SetRegistrationEmailAC(e.target.value))
    }

    const usernameHandler = (e) => {
        dispatch(SetRegistrationUsernameAC(e.target.value))
    }

    const passwordHandler = (e) => {
        dispatch(SetRegistrationPasswordAC(e.target.value))
    }

    const hideModal = () => {
        dispatch(ChangeRegistrationVisibilityAC(false))
    }

    return (
        <MyModal title='Регистрация' apply='Зарегистрироваться' show={visible} setShow={hideModal} onApply={onApply} isLoading={isLoading}>
            <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control type="email" placeholder="Введите адрес эл. почты..." value={email} onChange={emailHandler} />
                </Form.Group>

                <Form.Group className='mb-2' controlId='formBasicUsername'>
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type='text' placeholder='Введите логин...' value={username} onChange={usernameHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." value={password} onChange={passwordHandler} />
                </Form.Group>
            </Form>
        </MyModal>
    )
}

export default Registration