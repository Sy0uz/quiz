import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import s from './../../styles/Questions.module.css'

const CheckQ = ({question, nextQuestion}) => {

    const [value, setValue] = useState(question.variants.map(item => false));

    const answer = () => {
        let temp = value.map((item, idx) => item ? idx+1 : item).filter(item => typeof(item) === 'number');
        nextQuestion(temp, question.correct);
    }

    const changeValue = (checked, idx) => {
        setValue(value.map((item, i) => i === idx ? checked : item));
    }

    return (
        <Form className='p-2 question'>
            <h3 className={s.title}>{question.title}</h3>
            <div className={s.wrapper}>
                <span>Выберите один/несколько ответов.</span>
                {
                    question.variants.map((variant, idx) => {
                        return <label className={s.label} key={idx}>
                            <Form.Check
                                style={{display:'inline'}}
                                type="checkbox"
                                id={variant}
                                name='rbtn'
                                checked={value[idx]}
                                onChange={(e) => changeValue(e.target.checked, idx)} />
                            <span>{variant}</span>
                        </label>
                    })
                }
            </div>
            
            <Button onClick={answer} variant="outline-primary" className={s.btn}>Ответить</Button>
        </Form>

    )
}

export default CheckQ