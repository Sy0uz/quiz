import React from 'react'
import { CloseButton, Form } from 'react-bootstrap';

const RadioInput = ({id, index, qValue, setQValue, deleteVariant, checked, setChecked}) => {

    const check = (e) => {
        setQValue({...qValue, [index]:e.target.value})
    }

    const remove = () => {
        deleteVariant(index);
        setQValue({...qValue, [index]:''})
    }

    return (
        <Form.Group className="d-flex align-items-center my-1 w-50">
            <Form.Check name={`qId${id}`} style={{ marginRight: '0.5rem' }} type='radio' value={checked === index ? true : false} onChange={() => setChecked(index)}/>
            <Form.Control placeholder="Введите" value={qValue.index} onChange={check}/>
            <CloseButton className='mx-2' onClick={remove}/>
        </Form.Group>
    )
}

export default RadioInput