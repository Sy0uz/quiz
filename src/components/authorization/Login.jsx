import React, {useContext, useState} from 'react'
import { PostService } from '../../API/PostService'
import MyModal from '../../UI/MyModal/MyModal'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { AppContext } from '../../Context/AppContext'

const Login = ({show, setShow}) => {

    const history = useNavigate();
    const {setIsAuth} = useContext(AppContext);

    const [login, setLogin] = useState({
        login:'',
        password:'',
    })

    const onApply = async () => {
        const log = new FormData();
        log.append('username', login.login)
        log.append('password', login.password)
        const response = await PostService.loginUser(log);
        if (!response.data?.non_field_errors)
            setIsAuth(true)
        setShow(false);
        history('/')
    }

    return (
        <MyModal title={'Войти в аккаунт'} apply={'Войти'} onApply={onApply} show={show} setShow={setShow}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="email" placeholder="Введите логин..." value={login.login} onChange={e => setLogin({ ...login, login: e.target.value })} />
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