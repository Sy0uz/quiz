import React from 'react'
import Wrapper from '../../components/Wrapper'
import { Spinner } from 'react-bootstrap'

const MySpinner = () => {
    return (
        <Wrapper className='d-flex justify-content-center'>
            <Spinner animation='border' />
        </Wrapper>
    )
}

export default MySpinner