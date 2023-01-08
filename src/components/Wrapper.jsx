import React from 'react'
import { Container } from 'react-bootstrap'

const Wrapper = ({ children, className }) => {

    const classes = "my-2 p-3 bg-white";

    return (
        <Container style={{ border: "1px solid rgb(180, 180, 180)"}} className={className ? [className, classes].join(' ') : classes}>
            {children}
        </Container>
    )
}

export default Wrapper