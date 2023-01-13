import React, {useState} from 'react'
import { Button, CloseButton, Form } from 'react-bootstrap'
import s from './../../styles/CreateQ.module.css'
import VariantsQ from './VariantsQ'


const CreateQ = ({id, removeQ, saveQ, unsaveQ}) => {

    const qTypes = ['Выбрать ответ', 'Выбрать несколько ответов', 'Ввести ответ']

    const [disabled, setDisabled] = useState(false);

    const [qName, setQName] = useState('');
    const [qType, setQType] = useState('');
    const [qCorrect, setQCorrect] = useState('');
    const [qVariants, setQVariants] = useState('');

    const changeValue = (e) => {
        if (e.target.value === '0')
            setQType('radio')
        else if (e.target.value === '1')
            setQType('check')
        else 
            setQType('input')
    }

    const saveNewQ = () => {
        const question = {
            type: qType,
            id: id,
            title: qName,
            correct: qCorrect,
            variants: qVariants,
        }
        saveQ(question);
        setDisabled(true);
    }

    const rejectSave = () => {
        unsaveQ(id);
        setDisabled(false);
    }

    return (
        <div className={s.wrapper}>
            <Form.Group className="mb-2" controlId={`title${id}`}>
                <Form.Label>Название вопроса:</Form.Label>
                <Form.Control type="text" placeholder="Введите..." value={qName} onChange={(e) => {setQName(e.target.value)}}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Тип вопроса:</Form.Label>
                {qTypes.map((item, i) => <Form.Check
                    type='radio'
                    value={i}
                    onChange={changeValue}
                    name={`qType${id}`}
                    label={item}
                    id={`q${i}-${id}`}
                    key={i}
                />)}                
            </Form.Group>

            {
                qType
                    ? <VariantsQ type={qType} id={id} setQCorrect={setQCorrect} setQVariants={setQVariants} />
                    : <div className={s.chooseQ}>Выберите тип вопроса</div>
            }

            <CloseButton onClick={() => { removeQ(id) }} className={s.close} />

            <div className={s.save}>
                <Button className={s.control} size='sm' variant='dark' onClick={saveNewQ}>Сохранить</Button>
            </div>

            {
                disabled
                    ? <div className={s.active}>
                        <Button className={s.control} size='sm' variant='dark' onClick={rejectSave}>Отмена</Button>
                    </div>
                    : <></>
            }
        </div>
    )
}

export default CreateQ