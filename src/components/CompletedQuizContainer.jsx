import React, { useEffect, useState } from 'react'
import { PostService } from '../API/PostService';
import useFetching from '../hooks/useFetching';
import { stringPercent } from '../utils/stringPercent';

const CompletedQuizContainer = ({id, result, time}) => {

    const [quiz, setQuiz] = useState(null);

    const fetchQuiz = async () => {
        const response = await PostService.getQuiz(id);
        setQuiz(response);
    }

    const [fetch] = useFetching(fetchQuiz);

    useEffect(() => {
        fetch()
    }, [])

    return (
        quiz && <tr>
            <td>{quiz.title}</td>
            <td>{stringPercent(result)}</td>
            <td>{new Date(time).toLocaleDateString()}</td>
        </tr>
    )
}

export default CompletedQuizContainer