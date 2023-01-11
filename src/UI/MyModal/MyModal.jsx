import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const MyModal = ({show, setShow, title, apply, onApply, children}) => {

    const handleClose = () => {
        setShow(false);
    }

    const sumbit = () => {
        setShow(false);
        onApply();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={sumbit}>
                    {apply}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal