import React, { useEffect } from 'react'
import { SplitButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useSelector } from 'react-redux';
import { PostService } from '../API/PostService';

const QuizResult = ({result, quiz}) => {

    const {user} = useSelector(state => state.main)

    const sendResults = async () => {
        const results = new FormData();
        if (user)
            results.append('user_id', user.id)
        results.append('quiz_id', quiz.id)
        results.append('quiz_result', JSON.stringify(result))

        const response = await PostService.sendResults(results);
    }

    useEffect(() => {
        sendResults();
    }, [])

    return (
        <div>
            <h2>{quiz.title}</h2>
            <div>
                <SplitButton
                    id='result'
                    variant='secondary'
                    title={`Ваш результат:`}
                    align='end'
                >
                    {quiz.questions.map(item => <DropdownItem key={item.id}>{item.title}</DropdownItem>)}
                </SplitButton>
            </div>
        </div>
    )
}

export default QuizResult