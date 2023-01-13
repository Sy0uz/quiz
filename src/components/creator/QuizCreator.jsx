import axios from 'axios'
import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PostService } from '../../API/PostService'
import Wrapper from '../Wrapper'
import CreateQ from './CreateQ'

const QuizCreator = () => {
    const finish = useNavigate();

    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [image, setImage] = useState(null);

    const createTest = async () => {
        const test = new FormData()
        test.append('title', title)
        test.append('image_url', image)
        test.append('questions', JSON.stringify(questions))

        PostService.addPost(test);

        finish('/quiz')
    }

    const fileOnChange = (e) => {
        setImage(e.target.files[0])
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

                <Form.Group controlId="formFileSm" className="my-2">
                    <Form.Label>Загрузите изображение: </Form.Label>
                    <Form.Control type="file" size="sm" name='image_url' onChange={fileOnChange}/>
                </Form.Group>

                {questions.map(item => <CreateQ unsaveQ={unsaveQ} saveQ={saveQ} removeQ={removeQ} id={item.id} key={item.id}/>)}
                <div className='d-flex justify-content-between mt-2'>
                    <Button variant='outline-dark' onClick={addQ}>Добавить вопрос</Button>
                    <Button variant='dark' disabled={!questions.length} onClick={createTest}>Создать тест</Button>
                </div>
                
            </Form>
        </Wrapper>
    )
}

export default QuizCreator