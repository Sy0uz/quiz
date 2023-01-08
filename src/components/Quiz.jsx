import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { Spinner } from 'react-bootstrap';
import QuizBody from './QuizBody';
import Wrapper from './Wrapper';

const Quiz = () => {
    const params = useParams();
    const [localQuiz, setLocalQuiz] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const [isExist, setIsExist] = useState(false);

    const {store} = useContext(AppContext);

    useEffect(() => {
        if (store) {
            setLocalQuiz(...store.filter(quiz => quiz.id == params.id));
            setIsLoad(true);
        }
    }, [store])

    useEffect(() => {
        if (localQuiz) {
            setIsExist(true);
        }
    }, [localQuiz])

    return (
        <div>
            <Wrapper>
                {
                    isLoad
                    ?
                        isExist
                            ?
                            <QuizBody quiz={localQuiz}/>
                            :
                            <h1>Теста с id: {params.id} не существует!</h1>
                    : 
                        <Spinner animation='border'/>
                }                
            </Wrapper>
        </div>
    )
}

export default Quiz