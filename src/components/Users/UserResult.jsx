import React from 'react'
import { stringPercent } from '../../utils/stringPercent';

const UserResult = ({result}) => {
    
    return (
        <tr>
            <td>{result.username}</td>
            <td>{result.quiz_result.final_result === 0 || result.quiz_result.final_result ? stringPercent(result.quiz_result.final_result) : ''}</td>
            <td>{new Date(result.creation_time).toLocaleString()}</td>
        </tr>
    )
}

export default UserResult