import React, { useState }  from 'react'
import { Button, Form } from 'react-bootstrap';
import s from './../../styles/Questions.module.css'

const RadioQ = ({question, nextQuestion}) => {

    const [value, setValue] = useState('');

    const changeValue = (e) => {
        setValue(+e.target.value);
    }

    const answer = () => {
        nextQuestion(value.toString(), question.correct);
    }

    return (
        <Form className='p-2 question'>
            <h3 className={s.title}>{question.title}</h3>
            <div className={s.wrapper}>
                <span>Выберите один ответ</span>
                {
                    question.variants.map((variant, idx) => {
                        return <label className={s.label} key={idx}>
                            <Form.Check
                                style={{display:'inline'}}
                                type="radio"
                                id={variant}
                                name='rbtn'
                                value={idx + 1}
                                checked={
                                    value === idx + 1
                                        ? true
                                        : false
                                }
                                onChange={changeValue} />
                            <span>{variant}</span>
                        </label>
                    })
                }
            </div>
            
            <Button onClick={answer} variant="outline-primary" className={s.btn}>Ответить</Button>
        </Form>
    )
}

export default RadioQ