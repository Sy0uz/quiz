import React from 'react'
import Wrapper from './Wrapper'
import s from './../styles/UserProfile.module.css'
import { Form, OverlayTrigger, Tooltip, Alert, Button } from 'react-bootstrap'
import MyModal from '../UI/MyModal/MyModal'
import { PostService } from '../API/PostService'
import QuizHeader from './QuizHeader'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeFileAC, ChangeVisibilityAC } from '../Redux/reducers/profileReducer'
import { FetchAuthProfile } from '../Redux/asyncActions/myProfileAction'

const MyProfile = ({user}) => {

    const redirect = useNavigate();
    const dispatch = useDispatch();
    const {userExtended, modalVisible, file} = useSelector(state => state.profile)

    const profile = userExtended.profile;
    const createdQuizes = userExtended.created_quizzes;
    const setVisible = (bool) => {
        dispatch(ChangeVisibilityAC(bool))
    }

    const fileOnChange = (e) => {
        dispatch(ChangeFileAC(e.target.files[0]));
    }

    const onApply = async () => {
        const formData = new FormData();
        formData.append('user_img_url', file);

        const response = await PostService.changeUserData(formData, user.id);
        if (response.status === 200)
            dispatch(FetchAuthProfile(user.id))
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
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id='tooltipChange'>
                                        Изменить фотографию
                                    </Tooltip>
                                }
                            >
                                <button className={s.changePhotoBtn} onClick={() => dispatch(ChangeVisibilityAC(true))}>
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

            <Wrapper>
                <div className={s.quizesHeader}>
                    <h3>Созданные тесты</h3>
                    <Button variant='dark' onClick={() => redirect('/creator')}>Создать свой тест</Button>                    
                </div>
                    {
                        createdQuizes.length
                        ? <div className={s.gridQuizes}>
                            {createdQuizes.map(quiz => <QuizHeader type="small" key={quiz.id} quiz={quiz} />)}
                        </div>
                        : <>
                            <Alert className='mt-2 mb-0' variant='dark'>Список созданных тестов пуст!</Alert>
                        </>
                    }
            </Wrapper>

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