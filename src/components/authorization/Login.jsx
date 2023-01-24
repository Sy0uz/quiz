import React, { useEffect } from 'react'
import MyModal from '../../UI/MyModal/MyModal'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CheckUserAuth } from '../../Redux/asyncActions/checkAuthAction'
import { LoginUser } from '../../Redux/asyncActions/loginUserAction'
import { ChangeLoginVisibilityAC, SetLoginUsernameAC, SetLoginPasswordAC, ChangeDirtyInputAC, ClearLoginStateAC } from '../../Redux/reducers/loginReducer'

const Login = () => {

    const history = useNavigate();
    const dispatch = useDispatch();
    const {isLoading, error, username, password, visible, succes, isDirty} = useSelector(state => state.login)

    const onApply = async () => {
        const log = new FormData();
        log.append('username', username)
        log.append('password', password)
        dispatch(LoginUser(log))
    }

    useEffect(() => {
        if (succes) {
            dispatch(CheckUserAuth())
            hideModal(false)
            history('/')
        }
    }, [succes])

    const usernameHandler = (e) => {
        dispatch(SetLoginUsernameAC(e.target.value))
    }

    const passwordHandler = (e) => {
        dispatch(SetLoginPasswordAC(e.target.value))
    }

    const hideModal = (value) => {
        dispatch(ChangeLoginVisibilityAC(value));
        dispatch(ClearLoginStateAC())
    }

    const onFocus = () => {
        dispatch(ChangeDirtyInputAC(false))
    }

    return (
        <MyModal title={'Войти в аккаунт'} apply={'Войти'} onApply={onApply} show={visible} setShow={hideModal} isLoading={isLoading}>
            <Form noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control isInvalid={error && isDirty} type="email" placeholder="Введите логин..." value={username} onChange={usernameHandler} onFocus={onFocus}/>
                    {
                        error && isDirty
                            ?
                            <Form.Control.Feedback type="invalid">
                                {error}
                            </Form.Control.Feedback>
                            : 
                            <Form.Text className="text-muted">
                                Мы не делимся вашими данными.
                            </Form.Text>
                    }
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." value={password} onChange={passwordHandler} />
                </Form.Group>
            </Form>
        </MyModal>
    )
}

export default Login