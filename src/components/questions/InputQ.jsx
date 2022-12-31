import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import s from './../../styles/Questions.module.css'

const InputQ = ({question, nextQuestion}) => {

    const [value, setValue] = useState('');

    const answer = () => {
        nextQuestion(value, question.correct);
    }

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <Form className='p-2 question'>
            <h3 className={s.title}>{question.title}</h3>
            <div className={[s.wrapper, s.input].join(' ')}>
                <FloatingLabel
                    label={'Ответ:'}
                >
                    <Form.Control
                        size='lg' 
                        type='text' 
                        value={value} 
                        onChange={changeValue}
                        placeholder='answer'
                    />
                </FloatingLabel>
            </div>
            <Button onClick={answer} variant="outline-primary" className={s.btn}>Ответить</Button>            
        </Form>
    )
}

export default InputQ