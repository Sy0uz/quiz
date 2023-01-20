import React from 'react'
import s from './../../styles/UserItem.module.css'
import { Link } from 'react-router-dom';

const UserItem = ({user}) => {
    
    const dateJoined = new Date(user.date_joined).toLocaleDateString();

    return (
        <Link className={s.link} to={`/users/${user.id}`}>
            <div className={s.wrapper}>
                <div className={s.user}>
                    <span className={s.userName}>{user.username}</span>
                    <span className={s.regTime}>Дата регистрации: {dateJoined}</span>
                </div>
            </div>        
        </Link>

    )
}

export default UserItem