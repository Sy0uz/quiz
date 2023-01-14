import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './../../styles/UserItem.module.css'

const UserItem = ({user}) => {

    const route = useNavigate();

    return (
        <div className={s.wrapper} onClick={() => route(`${user.id}`)}>
            <div className={s.user}>
                <span className={s.userName}>{user.username}</span>
                <span className={s.regTime}>Дата регистрации: {user.date_joined.toLocaleDateString()}</span>
            </div>

            <div className={s.results}>
                <div>Тестов пройдено</div>
                <div className={s.amount}>0</div>
            </div>
        </div>
    )
}

export default UserItem