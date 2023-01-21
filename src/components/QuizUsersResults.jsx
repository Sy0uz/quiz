import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import UserResult from './Users/UserResult'

const QuizUsersResults = ({userResults}) => {
    const [show, setShow] = useState(false);

    if (!show)
        return (
            <Button className='mt-3' onClick={() => {setShow(true)}} variant='dark'>Показать результаты других пользователей</Button>
        )

    return (
        <>
            <Table className='mt-3 mb-0' variant='dark' striped bordered hover>
                <thead>
                    <tr>
                        <th>Пользователь</th>
                        <th>Результат</th>
                        <th>Дата прохождения</th>
                    </tr>
                </thead>
                <tbody>
                    {userResults.map(item => <UserResult result={item} />)}
                </tbody>
            </Table>

            <Button className='mt-3' onClick={() => {setShow(false)}} variant='outline-dark'>Скрыть</Button>
        </>
    )
}

export default QuizUsersResults