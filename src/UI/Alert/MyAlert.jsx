import React from 'react'
import { Alert } from 'react-bootstrap'

const MyAlert = ({children}) => {
    return (
        <Alert className='mt-2 mb-0' variant='dark'>{children}</Alert>
    )
}

export default MyAlert