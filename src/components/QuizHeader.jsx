import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import s from './../styles/QuizHeader.module.css'

const QuizHeader = ({quiz}) => {

    const redirect = useNavigate();

    return (
        <Card border='dark' className="my-2" bg="light" text="dark">
            <div className={s.imageBox}>
                <img className={s.quizImage} src={quiz.image_url} alt={`${quiz.id}quiz`} />
            </div>
            
            <Card.Body>
                <Card.Title>
                    {quiz.title}
                </Card.Title>
                <Card.Text>
                    Кол-во вопросов: {quiz.questions.length}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted'>
                <Button onClick={() => {redirect(`/quiz/${quiz.id}`)}} variant='dark'>Пройти!</Button>
            </Card.Footer>
        </Card>
    )
}

export default QuizHeader