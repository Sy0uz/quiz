import React, {useEffect, useMemo, useState} from 'react'
import { Button } from 'react-bootstrap';
import RadioInput from './RadioInput';

const RadioVariant = ({id, setQCorrect, setQVariants}) => {

    const [qValue, setQValue] = useState([]);
    const [variants, setVariants] = useState([]);
    const [checked, setChecked] = useState('');

    useEffect(() => {
        variants.forEach((item, idx) => item.index === checked ? setQCorrect(idx) : null);
    }, [checked, variants])

    const addVariant = () => {
        setVariants([...variants, {id:id, index:Date.now()}])
    }

    const deleteVariant = (index) => {
        setVariants(variants.filter(item => item.index !== index))
    }

    useEffect(() => {
        addVariant();
    }, [])

    useEffect(() => {
        setQVariants(Object.values(qValue).filter(item => item !== ''));
    }, [qValue])

    return (
        <div className='d-flex flex-column'>
            {variants.map(item => <RadioInput key={item.index} id={item.id} index={item.index} qValue={qValue} setQValue={setQValue} checked={setChecked} setChecked={setChecked} deleteVariant={deleteVariant}/>)}
            <Button onClick={addVariant} variant='outline-dark' className='align-self-start mt-2'>Добавить</Button>
        </div>
    )
}

export default RadioVariant