import React from 'react'
import QuizHeader from '../QuizHeader';
import Wrapper from '../Wrapper'
import s from './../../styles/UserProfile.module.css'

const UserProfile = ({user}) => {

    const profile = user.profile;
    const createdQuizes = user.created_quizzes;

    return (
        <>
            <Wrapper>
                <div className='d-flex'>
                    <div className={s.boxPic}>
                        <img className={s.profilePic} src={profile.user_img_url ? profile.user_img_url : 'https://pixel24.ru/img/man.jpg'} alt={`${profile?.username}`} />
                    </div>

                    <div className={s.userInfo}>
                        <div className={s.username}>{profile.username}</div>
                        <div>{profile.email}</div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <h3 className='mt-2'>Созданные тесты</h3>
                <div className={s.gridQuizes}>
                    {createdQuizes.map(quiz => <QuizHeader type="small" key={quiz.id} quiz={quiz} />)}
                </div>
            </Wrapper>
        </>
    )
}

export default UserProfile