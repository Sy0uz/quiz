import React, {useState} from 'react'
import { PostService } from '../../API/PostService'
import MyModal from '../../UI/MyModal/MyModal'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CheckUserAuth } from '../../Redux/asyncActions/checkAuthAction'

const Login = ({show, setShow}) => {

    const history = useNavigate();
    const dispatch = useDispatch()

    const [login, setLogin] = useState({
        username:'',
        password:'',
    })

    const onApply = async () => {
        const log = new FormData();
        log.append('username', login.username)
        log.append('password', login.password)
        const response = await PostService.loginUser(log);
        if (!response.data?.non_field_errors)
            dispatch(CheckUserAuth())
        setShow(false);
        history('/')
    }

    const hideModal = () => {
        setLogin({
            username:'',
            password:'',
        })
        setShow();
    }

    return (
        <MyModal title={'Войти в аккаунт'} apply={'Войти'} onApply={onApply} show={show} setShow={hideModal}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="email" placeholder="Введите логин..." value={login.username} onChange={e => setLogin({ ...login, username: e.target.value })} />
                    <Form.Text className="text-muted">
                        Мы не делимся данными.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} />
                </Form.Group>
            </Form>
        </MyModal>
    )
}

export default Login