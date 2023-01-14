import React from 'react'
import Wrapper from '../Wrapper'
import s from './../../styles/UserProfile.module.css'

const UserProfile = ({user}) => {
    return (
        <Wrapper>
            <div className='d-flex'>
                <div className={s.boxPic}>
                    <img className={s.profilePic} src={user.image_url ? user.image_url : 'https://pixel24.ru/img/man.jpg'} alt={`${user?.username}`} />
                </div>

                <div className={s.userInfo}>
                    <div className={s.username}>{user.username}</div>
                    <div>{user.email}</div>
                </div>
                
            </div>
        </Wrapper>
    )
}

export default UserProfile