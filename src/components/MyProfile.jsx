import React from 'react'
import Wrapper from './Wrapper'
import s from './../styles/UserProfile.module.css'
import { Form } from 'react-bootstrap'
import MyModal from '../UI/MyModal/MyModal'
import CompletedQuizes from './CompletedQuizes'
import CreatedQuizes from './CreatedQuizes'
import UserCommunity from './UserCommunity'

const MyProfile = ({user, userExtended, modalVisible, fileOnChange, setVisible, onFileApply}) => {
    const profile = userExtended.profile;
    const createdQuizes = userExtended.created_quizzes;

    const fileVisibilityHandler = () => {
        setVisible(true);
    }

    return (
        <>
            <Wrapper>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className={s.boxPic}>
                            {
                                profile.user_img_url
                                    ?
                                    <img className={s.profilePic} src={profile.user_img_url} alt={`${profile?.username}`} />
                                    :
                                    <img className={s.profilePic} src={'https://pixel24.ru/img/man.jpg'} alt={`${profile?.username}`} />
                            }
                            <button className={s.changePhotoBtn} onClick={fileVisibilityHandler}>
                                <img className={s.changePhoto} src='https://cdn.icon-icons.com/icons2/753/PNG/512/photo-camera-1_icon-icons.com_63898.png' alt='changePhoto'></img>
                            </button>
                        </div>

                        <div className={s.userInfo}>
                            <div className={s.username}>{profile.username}</div>
                            <div className={s.email}>{user.email}</div>
                        </div>
                    </div>

                    <div>
                        <span>Дата регистрации: </span>{new Date(profile.date_joined).toLocaleDateString()}
                    </div>
                </div>
            </Wrapper>

            <UserCommunity friends={userExtended.friends} followers={userExtended.followers} following={userExtended.following}/>

            <CreatedQuizes createdQuizes={createdQuizes} isMyProfile={true}/>

            <CompletedQuizes completed={userExtended.completed_quizzes}/>

            <MyModal title={'Изменить фотографию'} apply={'Изменить'} show={modalVisible} setShow={setVisible} onApply={onFileApply}>
                <Form.Group>
                    <Form.Label>Загрузить фотографию</Form.Label>
                    <Form.Control type='file' onChange={fileOnChange}/>
                </Form.Group>
            </MyModal>
        </>
    )
}

export default MyProfile