import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { Container, Spinner } from 'react-bootstrap';
import QuizBody from './QuizBody';

const Quiz = () => {
    const params = useParams();
    const [localQuiz, setLocalQuiz] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const [isExist, setIsExist] = useState(false);

    const {store} = useContext(AppContext);

    useEffect(() => {
        if (store) {
            setLocalQuiz(...store.filter(quiz => quiz.id === params.id));
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
            <Container style={{ border: "1px solid rgb(180, 180, 180)" }} className="my-2 p-2 bg-white">
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
                
            </Container>
        </div>
    )
}

export default Quiz