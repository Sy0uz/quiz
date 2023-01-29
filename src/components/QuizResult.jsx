import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SendQuizAnswers } from '../Redux/asyncActions/resultsAction';
import QuizQuestionResult from './QuizQuestionResult';
import s from './../styles/QuizResult.module.css'
import { stringPercent } from '../utils/stringPercent';
import MySpinner from '../UI/Spinner/MySpinner';

const QuizResult = ({answers, quiz}) => {

    const {user, isAuth} = useSelector(state => state.main)
    const {isLoading, results} = useSelector(state => state.quizresult)
    const dispatch = useDispatch();

    const sendAnswers = async () => {
        const userAnswers = new FormData();

        if (user)
            userAnswers.append('user_id', user.id)
        userAnswers.append('quiz_id', quiz.id)
        userAnswers.append('quiz_result', JSON.stringify(answers))

        dispatch(SendQuizAnswers(userAnswers, isAuth))
    }

    useEffect(() => {
        sendAnswers();
    }, [])

    if (isLoading)
        return <MySpinner/>

    return (
        <div>
            <div className={s.header}>
                <h2>{quiz.title}</h2>
                <div className={s.result}>Результат: <span className={s.resultValue}>{stringPercent(results.final_result)}</span></div>
            </div>
            <div className={s.list}>
                {quiz.questions.map((item, idx) => <QuizQuestionResult key={item.id} title={item.title} question={quiz.questions[idx]} answer={results.answers_results[idx][0]} correct={results.answers_results[idx][1]}/>)}
            </div>
        </div>
    )
}

export default QuizResult