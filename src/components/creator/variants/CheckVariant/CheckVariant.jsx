import React, { useState, useEffect } from 'react'
import CheckInput from './CheckInput';
import { Button } from 'react-bootstrap';

const CheckVariant = ({id, setQCorrect, setQVariants}) => {

    const [qValue, setQValue] = useState({});
    const [variants, setVariants] = useState([]);
    const [correct, setCorrect] = useState([]);

    const addVariant = () => {
        setVariants([...variants, { index: Date.now() }])
    }

    const deleteVariant = (index) => {
        setVariants(variants.filter(item => item.index !== index))
    }

    useEffect(() => {
        setQCorrect(correct.map(item => {
            for (let i = 0; i < variants.length; i++) {
                if (item === variants[i].index){
                    return i;
                }
            }
        }).sort((a,b) => a - b).filter(item => item !== undefined))
    }, [correct, variants])

    useEffect(() => {
        addVariant();
    }, [])

    useEffect(() => {
        setQVariants(Object.values(qValue).filter(item => item !== ''))
    }, [qValue])

    return (
        <div className='d-flex flex-column'>
            {variants.map(item => <CheckInput key={item.index} id={item.id} index={item.index} qValue={qValue} setQValue={setQValue} deleteVariant={deleteVariant} correct={correct} setCorrect={setCorrect} />)}
            <Button onClick={addVariant} variant='outline-dark' className='align-self-start mt-2'>Добавить</Button>
        </div>
    )
}

export default CheckVariant