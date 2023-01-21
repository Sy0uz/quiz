import React from 'react'
import { Card } from 'react-bootstrap'
import s from './../styles/QuizResult.module.css'

const QuizQuestionResult = ({title, question, answer, correct}) => {

    let userAnswer = '';

    if (question.type === 'input')
        userAnswer = answer
    else if (question.type === 'check') {
        let ans = []
        for (const idx of answer) {
            ans.push(`${question.variants[Number(idx) - 1]}`);
        }
        userAnswer = ans.join(', ');
    }
    else 
        userAnswer = question.variants[Number(answer) - 1];

    return (
        <Card className={s.wrapper} border={correct ? 'success' : 'danger'}>
            <Card.Header as='h5'>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    Ваш ответ: {userAnswer}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={correct ? [s.footer, s.correct].join(' ') : [s.footer, s.wrong].join(' ')}>{correct ? 'Верно' : 'Неверно'}</Card.Footer>
        </Card>
    )
}

export default QuizQuestionResult