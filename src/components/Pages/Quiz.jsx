import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuizBody from '../QuizBody';
import Wrapper from '../Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { FetchQuiz } from '../../Redux/asyncActions/currentQuizAction';
import { ResetQuizAC } from '../../Redux/reducers/currentQuizReducer';
import MySpinner from '../../UI/Spinner/MySpinner';

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
        <Wrapper>
            {
                isLoading
                    ?
                    <MySpinner />
                    :
                    !error
                        ?
                        quiz && <QuizBody quiz={quiz} />
                        :
                        <h1>Теста с id: {params.id} не существует!</h1>
            }
        </Wrapper>
    )
}

export default Quiz