import React from 'react'
import { Button, Card } from 'react-bootstrap'

const QuizHeader = ({quiz}) => {
    return (
        <Card border='dark' className="m-2" bg="light" text="dark">
            <div style={{background:`url(${quiz.img}) no-repeat center`, height:'200px', borderRadius:'0.375rem'}}></div>
            <Card.Body>
                <Card.Title>
                    {quiz.title}
                </Card.Title>
                <Card.Text>
                    Кол-во вопросов: {quiz.questions.length}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted'>
                <Button variant='dark'>Пройти!</Button>
            </Card.Footer>
        </Card>
    )
}

export default QuizHeader