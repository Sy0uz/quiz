import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const MyModal = ({show, setShow, title, apply, onApply, children, isLoading = false}) => {

    const sumbit = () => {
        onApply();
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={sumbit} disabled={isLoading}>
                    {isLoading ? 'Загрузка...' : apply}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal