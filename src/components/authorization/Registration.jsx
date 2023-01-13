import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { PostService } from '../../API/PostService';
import MyModal from '../../UI/MyModal/MyModal';
import { Form } from 'react-bootstrap';
import { AppContext } from '../../Context/AppContext';

const Registration = ({show, setShow}) => {

    const history = useNavigate();
    const {setIsAuth} = useContext(AppContext);

    const [registration, setRegistration] = useState({
        login:'',
        password:'',
    })

    const onApply = async () => {
        const reg = new FormData();
        reg.append('username', registration.login)
        reg.append('password', registration.password)
        const response = await PostService.registerUser(reg);
        if (Object.keys(response.data).includes('id')){
            PostService.loginUser(reg);
            setIsAuth(true)
        }
        setShow(false);
        history('/')
    }

    return (
        <MyModal title='Регистрация' apply='Зарегистрироваться' show={show} setShow={setShow} onApply={onApply}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="email" placeholder="Введите логин..." value={registration.login} onChange={e => setRegistration({ ...registration, login: e.target.value })} />
                    <Form.Text className="text-muted">
                        Мы не делимся данными.
                    </Form.Text>
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