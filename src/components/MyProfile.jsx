import React from 'react'
import Wrapper from './Wrapper'
import s from './../styles/UserProfile.module.css'
import { Form, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap'
import MyModal from '../UI/MyModal/MyModal'
import CompletedQuizes from './CompletedQuizes'
import CreatedQuizes from './CreatedQuizes'
import UserCommunity from './UserCommunity'

const MyProfile = ({user, userExtended, modalVisible, isLoading, fileOnChange, setVisible, onApply}) => {
    const profile = userExtended.profile;
    const createdQuizes = userExtended.created_quizzes;

    const fileVisibilityHandler = () => {
        setVisible(true);
    }

    if (isLoading)
        return <Wrapper className='d-flex justify-content-center'>
            <Spinner animation='border' />
        </Wrapper>

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
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='tooltipChange'>
                                        Изменить фотографию
                                    </Tooltip>
                                }
                            >
                                <button className={s.changePhotoBtn} onClick={fileVisibilityHandler}>
                                    <img className={s.changePhoto} src='https://cdn.icon-icons.com/icons2/753/PNG/512/photo-camera-1_icon-icons.com_63898.png' alt='changePhoto'></img>
                                </button>
                            </OverlayTrigger>
                        </div>

                        <div className={s.userInfo}>
                            <div className={s.username}>{profile.username}</div>
                            <div>{user.email}</div>
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

            <MyModal title={'Изменить фотографию'} apply={'Изменить'} show={modalVisible} setShow={setVisible} onApply={onApply}>
                <Form.Group>
                    <Form.Label>Загрузить фотографию</Form.Label>
                    <Form.Control type='file' onChange={fileOnChange}/>
                </Form.Group>
            </MyModal>
        </>
    )
}

export default MyProfile