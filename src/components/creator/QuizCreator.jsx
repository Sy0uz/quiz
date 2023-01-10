import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import Wrapper from '../Wrapper'
import CreateQ from './CreateQ'

const QuizCreator = () => {

    const {store, setStore} = useContext(AppContext);
    const finish = useNavigate();

    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);

    const createTest = () => {
        let test = {
            title: title,
            id: Date.now(),
            img: 'https://helpx.adobe.com/content/dam/help/en/photos…before_and_after/image-before/Landscape-Color.jpg',
            questions: questions,
        };

        setStore([...store, test])
        setQuestions([]);
        finish('/quiz')
    }

    const addQ = () => {
        let question = {id:questions.length+1}
        setQuestions([...questions, question])
    }

    const saveQ = (question) => {
        setQuestions(questions.map(item => item.id === question.id ? question : item))
    }

    const unsaveQ = (id) => {
        setQuestions(questions.map(item => item.id === id ? {id:id} : item))
    }

    const removeQ = (id) => {
        setQuestions(questions.filter(item => item.id !== id))
    }


    return (
        <Wrapper>
            <Form className='d-flex flex-column'>
                <FloatingLabel
                    controlId='titleName'
                    label='Название теста'
                >
                    <Form.Control type='text' placeholder='Название теста' value={title} onChange={e => setTitle(e.target.value)}/>
                </FloatingLabel>

                {questions.map(item => <CreateQ unsaveQ={unsaveQ} saveQ={saveQ} removeQ={removeQ} id={item.id} key={item.id}/>)}
                <div className='d-flex justify-content-between mt-2'>
                    <Button variant='dark' disabled={!questions.length} onClick={createTest}>Создать тест</Button>
                    <Button variant='outline-dark' onClick={addQ}>Добавить вопрос</Button>
                </div>
                
            </Form>
        </Wrapper>
    )
}

export default QuizCreator