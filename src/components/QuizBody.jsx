import React, { useEffect, useState } from 'react'
import RadioQ from './questions/RadioQ';
import CheckQ from './questions/CheckQ';
import InputQ from './questions/InputQ';
import { ProgressBar } from 'react-bootstrap';
import QuizResult from './QuizResult';
import { useDispatch, useSelector } from 'react-redux';
import { GiveResultsAC, NextQuestionAC } from '../Redux/reducers/currentQuizReducer';

const QuizBody = ({quiz}) => {
    
    const {qIndex, isFinal, answers} = useSelector(state => state.quiz)
    const dispatch = useDispatch();

    const nextQuestion = (value) => {
        dispatch(NextQuestionAC(value))
    }

    const makeQuestionsArray = () => {
        return quiz.questions.map(question => {
            switch (question.type) {
                case 'radio':
                    return <RadioQ nextQuestion={nextQuestion} question={question} key={question.title}/>
                case 'check':
                    return <CheckQ nextQuestion={nextQuestion} question={question} key={question.title}/>
                case 'input':
                    return <InputQ nextQuestion={nextQuestion} question={question} key={question.title}/>
                default:
                    return null;
            }
        });
    }

    const questions = makeQuestionsArray();

    useEffect(() => {
        if (qIndex === questions.length)
            dispatch(GiveResultsAC())
    }, [qIndex])

    return (
        <div className='quizBody'>
            {
                !isFinal
                    ? questions[qIndex]
                    : <QuizResult quiz={quiz} answers={answers}/>
            }
            <ProgressBar className='mt-1' style={{fontWeight:'bold'}} label={`${qIndex}/${questions.length}`} striped now={qIndex} min={0} max={questions.length}/>
        </div>
    )
}

export default QuizBody