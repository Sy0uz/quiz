import React from 'react'
import { Table } from 'react-bootstrap';
import CompletedQuizContainer from './CompletedQuizContainer';
import Wrapper from './Wrapper';

const CompletedQuizes = ({completed}) => {

    return (
        <Wrapper>
            <h3>История прохождения</h3>
            <Table className='mt-3' variant='dark' striped bordered>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Результат</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {completed.map(item => <CompletedQuizContainer id={item.quiz_id} result={item.quiz_result.final_result} time={item.creation_time}/>)}
                </tbody>
            </Table>
        </Wrapper>
    )
}

export default CompletedQuizes