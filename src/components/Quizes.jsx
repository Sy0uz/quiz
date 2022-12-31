import React, { useContext } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { AppContext } from '../Context/AppContext'
import QuizHeader from './QuizHeader';

const Quizes = () => {

    const {store} = useContext(AppContext);

    return (
        <Container style={{ border: "1px solid rgb(180, 180, 180)"}} className="my-2 p-2 bg-white">
            {store ? store.map(quiz => <QuizHeader key={quiz.id} quiz={quiz}/>) : <Spinner animation='border'/>}
        </Container>
    )
}

export default Quizes