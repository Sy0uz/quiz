import React from 'react'
import Wrapper from '../Wrapper'
import s from './../../styles/UserProfile.module.css'
import CompletedQuizes from '../CompletedQuizes';
import CreatedQuizes from '../CreatedQuizes';
import { Button } from 'react-bootstrap';
import UserCommunity from '../UserCommunity';

const UserProfile = ({user, followed, isFriends, isFollowLoading, changeFollow, isMyProfile = false, isAuth}) => {

    const profile = user.profile;
    const createdQuizes = user.created_quizzes;

    return (
        <>
            <Wrapper>
                <div className='d-flex justify-content-between align-items-start'>
                    <div className='d-flex'>
                        <div className={s.boxPic}>
                            <img className={s.profilePic} src={profile.user_img_url ? profile.user_img_url : 'https://pixel24.ru/img/man.jpg'} alt={`${profile?.username}`} />
                        </div>

                        <div className={s.userInfo}>
                            <div className={s.username}>{profile.username}</div>
                        </div>                        
                    </div>

                    {isAuth && <Button variant='dark' disabled={isMyProfile || isFollowLoading} onClick={() => changeFollow(profile.id, followed, isFriends)}>{isFollowLoading ? 'Загрузка...' : isMyProfile ? 'Мой профиль' : isFriends ? 'Удалить из друзей' :  followed ? 'Перестать отслеживать' : 'Отслеживать'}</Button>}
                </div>
            </Wrapper>

            <UserCommunity friends={user.friends} following={user.following} followers={user.followers}/>

            <CreatedQuizes createdQuizes={createdQuizes}/>

            <CompletedQuizes completed={user.completed_quizzes}/>
            
        </>
    )
}

export default UserProfile