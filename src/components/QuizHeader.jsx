import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const QuizHeader = ({quiz}) => {

    const redirect = useNavigate();

    return (
        <Card border='dark' className="m-2" bg="light" text="dark">
            <div style={{background:`url(${quiz.img}) no-repeat center`, height:'200px', borderRadius:'0.375rem 0.375rem 0 0'}}></div>
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