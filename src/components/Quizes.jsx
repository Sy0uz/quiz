import React, { useContext } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext'
import QuizHeader from './QuizHeader';
import Wrapper from './Wrapper';

const Quizes = () => {

    const {store} = useContext(AppContext);
    const redirect = useNavigate();

    return (
        <Wrapper>
            <Button variant='dark' onClick={() => redirect('/quiz/creator')}>Создать свой тест</Button>

            {store ? store.map(quiz => <QuizHeader key={quiz.id} quiz={quiz}/>) : <Spinner animation='border'/>}            
        </Wrapper>
    )
}

export default Quizes