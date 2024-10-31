import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalDeleteInvoce = (props) => {
    const { show, setShow, currentContract, invoices, setInvoices } = props;
    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = () => {
        setInvoices(invoices.filter(invoice => invoice?.id !== currentContract?.id))
        setShow(false);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete invoice?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {` Are you sure to delete this invoice with Contract Name:  ${currentContract?.contractName}`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button className='btn btn-danger' onClick={() => { handleSubmitDeleteUser() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDeleteInvoce;