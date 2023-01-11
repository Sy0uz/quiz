import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import QuizBody from './QuizBody';
import Wrapper from './Wrapper';
import axios from 'axios';
import useFetching from '../hooks/useFetching';

const Quiz = () => {
    const params = useParams();
    const [localQuiz, setLocalQuiz] = useState(null);

    const fetchData = async (id) => {
        const response = await axios.get('http://localhost:8000/api/quiz/' + id);
        setLocalQuiz(response.data);
    }

    const [fetch, isLoading, error] = useFetching(fetchData);

    useEffect(() => {
        fetch(params.id);
    }, [])

    return (
        <div>
            <Wrapper>
                {
                    isLoading
                    ?
                        <div className='d-flex justify-content-center'><Spinner animation='border'/></div>
                    : 
                        !error
                            ?
                            localQuiz && <QuizBody quiz={localQuiz} />
                            :
                            <h1>Теста с id: {params.id} не существует!</h1>
                }                
            </Wrapper>
        </div>
    )
}

export default Quiz