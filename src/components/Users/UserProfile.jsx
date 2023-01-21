import React from 'react'
import QuizHeader from '../QuizHeader';
import Wrapper from '../Wrapper'
import s from './../../styles/UserProfile.module.css'
import { Alert } from 'react-bootstrap';
import CompletedQuizes from '../CompletedQuizes';

const UserProfile = ({user}) => {

    const profile = user.profile;
    const createdQuizes = user.created_quizzes;

    console.log(user)

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
                <h3>Созданные тесты</h3>
                {
                    createdQuizes.length
                        ?
                        <div className={s.gridQuizes}>
                            {createdQuizes.map(quiz => <QuizHeader type="small" key={quiz.id} quiz={quiz} />)}
                        </div>
                        :
                        <>
                            <Alert className='mt-3 mb-0' variant='dark'>Список созданных тестов пуст!</Alert>
                        </>
                }
            </Wrapper>

            <CompletedQuizes completed={user.completed_quizzes}/>
            
        </>
    )
}

export default UserProfile