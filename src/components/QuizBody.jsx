import React, { useEffect, useState } from 'react'
import RadioQ from './questions/RadioQ';
import CheckQ from './questions/CheckQ';
import InputQ from './questions/InputQ';
import { ProgressBar } from 'react-bootstrap';
import QuizResult from './QuizResult';

const QuizBody = ({quiz}) => {

    const [qIndex, setQIndex] = useState(0);
    const [isFinal, setIsFinal] = useState(false);
    const [result, setResult] = useState([]);

    const nextQuestion = (value) => {
        setQIndex(qIndex + 1);
        setResult([...result, value])   
    }

    const makeQustionsArray = () => {
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

    const questions = makeQustionsArray();

    useEffect(() => {
        if (qIndex === questions.length)
            setIsFinal(true);
    }, [qIndex])

    return (
        <div className='quizBody'>
            {
                !isFinal
                    ? questions[qIndex]
                    : <QuizResult quiz={quiz} result={result}/>
            }
            <ProgressBar className='mt-1' style={{fontWeight:'bold'}} label={`${qIndex}/${questions.length}`} striped now={qIndex} min={0} max={questions.length}/>
        </div>
    )
}

export default QuizBody