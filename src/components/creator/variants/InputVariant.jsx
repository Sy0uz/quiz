import React, {useEffect, useState} from 'react'
import { Form } from 'react-bootstrap';

const InputVariant = ({id, setQCorrect, setQVariants}) => {

    const [value, setValue] = useState('');

    useEffect(() => {
        setQCorrect(value);
        setQVariants([]);
    }, [value])

    return (
        <Form.Group className='my-3' controlId={`input${id}`}>
            <Form.Label>Ответ на вопрос: </Form.Label>
            <Form.Control placeholder='Ответ...' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
        </Form.Group>
        
    )
}

export default InputVariant