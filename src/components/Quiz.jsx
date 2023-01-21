import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import QuizBody from './QuizBody';
import Wrapper from './Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { FetchQuiz } from '../Redux/asyncActions/currentQuizAction';
import { ResetQuizAC } from '../Redux/reducers/currentQuizReducer';

const Quiz = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {isLoading, error, quiz} = useSelector(state => state.quiz)

    useEffect(() => {
        dispatch(FetchQuiz(params.id))
        return () => {
            dispatch(ResetQuizAC())
        }
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
                            quiz && <QuizBody quiz={quiz} />
                            :
                            <h1>Теста с id: {params.id} не существует!</h1>
                }                
            </Wrapper>
        </div>
    )
}

export default Quiz