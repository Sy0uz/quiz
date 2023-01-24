import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyModal from '../../UI/MyModal/MyModal';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CheckUserAuth } from '../../Redux/asyncActions/checkAuthAction';
import { RegisterUser } from '../../Redux/asyncActions/registrationUserAction';
import { LoginUser } from '../../Redux/asyncActions/loginUserAction';
import { ChangeDirtyRegistrationInputAC, ChangeRegistrationVisibilityAC, ClearRegistrationAC, SetRegistrationEmailAC, SetRegistrationPasswordAC, SetRegistrationUsernameAC } from '../../Redux/reducers/registrationReducer';
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
            dispatch(ClearRegistrationAC());
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
        dispatch(ClearRegistrationAC());
    }

    const onFocus = () => {
        dispatch(ChangeDirtyRegistrationInputAC(false));
    }

    return (
        <MyModal title='Регистрация' apply='Зарегистрироваться' show={visible} setShow={hideModal} onApply={onApply} isLoading={isLoading}>
            <Form noValidate>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control isInvalid={error?.email && isDirty} type="email" placeholder="Введите адрес эл. почты..." value={email} onChange={emailHandler} onFocus={onFocus}/>
                    {
                        error?.email && isDirty
                            ?
                            <Form.Control.Feedback type="invalid">
                                {error.email[0]}
                            </Form.Control.Feedback>
                            :
                            <></>
                    }
                </Form.Group>

                <Form.Group className='mb-2' controlId='formBasicUsername'>
                    <Form.Label>Логин</Form.Label>
                    <Form.Control isInvalid={error?.username && isDirty} type='text' placeholder='Введите логин...' value={username} onChange={usernameHandler} onFocus={onFocus}/>
                    {
                        error?.username && isDirty
                            ?
                            <Form.Control.Feedback type="invalid">
                                {error.username[0]}
                            </Form.Control.Feedback>
                            :
                            <></>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control isInvalid={error?.password && isDirty} type="password" placeholder="Введите пароль..." value={password} onChange={passwordHandler} />
                    {
                        error?.password && isDirty
                            ?
                            <Form.Control.Feedback type="invalid">
                                {error.password[0]}
                            </Form.Control.Feedback>
                            :
                            <></>
                    }
                </Form.Group>
            </Form>
        </MyModal>
    )
}

export default Registration