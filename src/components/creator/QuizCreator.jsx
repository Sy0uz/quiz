import React from 'react'
import { useEffect } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CreateTest } from '../../Redux/asyncActions/creatTestAction'
import { AddTestQuestionAC, ChangeTestValidAC, DeleteTestQuestionAC, ResetTestAC, SaveTestQuestionAC, SetTestImageAC, SetTestTitleAC, UnsaveTestQuestionAC } from '../../Redux/reducers/quizCreatorReducer'
import Wrapper from '../Wrapper'
import CreateQ from './CreateQ'

const QuizCreator = () => {

    const finish = useNavigate();
    const dispatch = useDispatch();

    const {title, questions, image, error, isLoading, created, isInvalid} = useSelector(state => state.quizCreator);

    const createTest = async () => {
        const test = new FormData()
        test.append('title', title)
        if (image)
            test.append('quiz_img_url', image)
        test.append('questions', JSON.stringify(questions))
        dispatch(CreateTest(test));
    }

    useEffect(() => {
        if (created) {
            finish('/quiz')
            dispatch(ResetTestAC())
        }
            
    }, [created])

    useEffect(() => {
    
        if (!title) {
            dispatch(ChangeTestValidAC(true))
            return;
        }
        if (!questions.length) {
            dispatch(ChangeTestValidAC(true))
            return;
        }

        let flag = false;

        for (const q of questions) {
            if (!q?.type) {
                flag = true;
                dispatch(ChangeTestValidAC(true))
                break;
            }
        }

        if (!flag)
            dispatch(ChangeTestValidAC(false));

    }, [questions, title])

    const fileOnChange = (e) => {
        dispatch(SetTestImageAC(e.target.files[0]))
    }

    const addQ = () => {
        let question = {id:Date.now()}
        dispatch(AddTestQuestionAC(question));
    }

    const saveQ = (question) => {
        dispatch(SaveTestQuestionAC(question));
    }

    const unsaveQ = (id) => {
        dispatch(UnsaveTestQuestionAC(id));
    }

    const removeQ = (id) => {
        dispatch(DeleteTestQuestionAC(id));
    }


    return (
        <Wrapper>
            <Form className='d-flex flex-column'>
                <FloatingLabel
                    controlId='titleName'
                    label='Название теста'
                >
                    <Form.Control type='text' placeholder='Название теста' value={title} onChange={e => dispatch(SetTestTitleAC(e.target.value))}/>
                </FloatingLabel>

                <Form.Group controlId="formFileSm" className="my-2">
                    <Form.Label>Загрузите изображение: </Form.Label>
                    <Form.Control type="file" size="sm" name='image_url' onChange={fileOnChange}/>
                </Form.Group>

                {questions.map(item => <CreateQ unsaveQ={unsaveQ} saveQ={saveQ} removeQ={removeQ} id={item.id} key={item.id}/>)}
                <div className='d-flex justify-content-between mt-2'>
                    <Button variant='outline-dark' onClick={addQ}>Добавить вопрос</Button>
                    <Button variant='dark' disabled={isInvalid} onClick={() => createTest()}>{ isLoading ? 'Загрузка...' : 'Создать тест'}</Button>
                </div>
                
            </Form>
        </Wrapper>
    )
}

export default QuizCreator