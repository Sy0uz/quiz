import React, { useContext, useEffect } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext'
import QuizHeader from './QuizHeader';
import Wrapper from './Wrapper';

const Quizes = () => {

    const {store, fetch, isLoading} = useContext(AppContext);
    const redirect = useNavigate();

    useEffect(() => {
        fetch();
    }, [])

    return (
        isLoading
            ? <Wrapper className='d-flex justify-content-center'>
                <Spinner animation='border' />
            </Wrapper>
            : <Wrapper>
                <Button variant='dark' onClick={() => redirect('/quiz/creator')}>Создать свой тест</Button>
                {store
                    ? store.map(quiz => <QuizHeader key={quiz.id} quiz={quiz} />)
                    : <Alert className='mt-2 mb-0' variant='dark'>Список тестов пуст!</Alert>
                }
            </Wrapper>
    )
}

export default Quizes