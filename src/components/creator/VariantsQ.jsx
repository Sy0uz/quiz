import React from 'react'
import CheckVariant from './variants/CheckVariant/CheckVariant'
import InputVariant from './variants/InputVariant'
import RadioVariant from './variants/RadioVariant/RadioVariant'

const VariantsQ = ({type, id, setQCorrect, setQVariants}) => {

    let variant;

    switch (type) {
        case 'radio':
            variant = <RadioVariant id={id} setQCorrect={setQCorrect} setQVariants={setQVariants}/>
            break;
        case 'check':
            variant = <CheckVariant id={id} setQCorrect={setQCorrect} setQVariants={setQVariants}/>
            break;
        default:
            variant = <InputVariant id={id} setQCorrect={setQCorrect} setQVariants={setQVariants}/>
            break;
    }

    return (
        <>
            {variant}
        </>
    )
}

export default VariantsQ