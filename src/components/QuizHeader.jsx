import React, { useState } from 'react'
import { Button, Card, CloseButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PostService } from '../API/PostService'
import { FetchAuthProfile } from '../Redux/asyncActions/myProfileAction'
import MyModal from '../UI/MyModal/MyModal'
import s from './../styles/QuizHeader.module.css'

const QuizHeader = ({quiz, deletable}) => {

    const redirect = useNavigate();
    const dispatch = useDispatch();
    const {authUser} = useSelector(state => state.main)

    const [show, setShow] = useState(false);

    const onApply = async () => {
        await PostService.deleteQuiz(quiz.id);
        setShow(false);
        dispatch(FetchAuthProfile(authUser.id))
    }

    return (
        <>
            <Card border='dark' className="my-2" bg="light" text="dark" >
                <div className={s.imageBox}>
                    {
                        quiz.quiz_img_url
                            ? <img className={s.quizImage} src={quiz.quiz_img_url} alt={`${quiz.id}quiz`} />
                            : <div className={s.back}></div>
                    }
                </div>

                <Card.Body>
                    <Card.Title>
                        {quiz.title}
                    </Card.Title>
                    <Card.Text>
                        Кол-во вопросов: {quiz.questions.length}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className='d-flex align-items-center justify-content-between text-muted'>
                    <Button onClick={() => { redirect(`/quiz/${quiz.id}`) }} variant='dark'>Пройти!</Button>
                    {
                        deletable
                            ? <CloseButton onClick={() => setShow(true)} className={s.deleteBtn} />
                            : <></>
                    }
                </Card.Footer>
            </Card>

            <MyModal onApply={onApply} show={show} setShow={setShow} title='Подтверждение' apply='Удалить'>
                <div>Вы действительно хотите удалить тест {quiz.title}?</div>
            </MyModal>
        </>
    )
}

export default QuizHeader