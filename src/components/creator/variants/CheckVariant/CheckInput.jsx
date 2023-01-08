import React from 'react'
import { CloseButton, Form } from 'react-bootstrap'

const CheckInput = ({id, index, qValue, setQValue, correct, setCorrect, deleteVariant}) => {

    const check = (e) => {
        setQValue({...qValue, [index]:e.target.value})
    }

    const remove = () => {
        deleteVariant(index);
        setQValue({...qValue, [index]:''})
    }

    return (
        <Form.Group className="d-flex align-items-center my-1 w-50">
            <Form.Check style={{ marginRight: '0.5rem' }} type='checkbox' onChange={(e) => {e.target.checked ? setCorrect([...correct, index]) : setCorrect(correct.filter(item => item !== index))}} />
            <Form.Control placeholder="Введите" value={qValue.index} onChange={check} />
            <CloseButton className='mx-2' onClick={remove}/>
        </Form.Group>
    )
}

export default CheckInput