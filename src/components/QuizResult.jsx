import React, { useMemo } from 'react'
import { SplitButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const QuizResult = ({result, questions, title}) => {

    const total = useMemo(() => {
        let count = 0;
        for (let i = 0; i < result.length; i++) {
            if (Array.isArray(result[i])){
                if (result[i].join(' ') === questions[i].correct.join(' '))
                    count++;
                continue;
            }
            if (result[i] === questions[i])
                count++;
        }

        return count;
    }, [questions, result])

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <SplitButton
                    id='result'
                    variant='secondary'
                    title={`Ваш результат: ${total}`}
                    align='end'
                >
                    {questions.map(item => <DropdownItem>{item.title}</DropdownItem>)}
                </SplitButton>
            </div>
        </div>
    )
}

export default QuizResult