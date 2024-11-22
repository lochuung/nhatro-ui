import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAddInvoice = (props) => {

    const { show, setShow, invoices, dataUpdate, setDataUpdate, setInvoices } = props;

    const handleSave = (dataUpdate) => {
        setInvoices([...invoices, dataUpdate]);
        handleClose();
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <form className="row g-3" id="printableArea">
                            <div className="col-md-12">
                                <label className="form-label">Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={invoices.length + 1}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Room</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dataUpdate?.roomName}
                                    onChange={(event) => setDataUpdate(
                                        { ...dataUpdate, roomName: event.target.value }
                                    )}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Contract Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dataUpdate?.contractName}
                                    onChange={(event) => setDataUpdate(
                                        { ...dataUpdate, contractName: event.target.value }
                                    )}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Due Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dataUpdate?.dueDate}
                                    onChange={(event) => setDataUpdate(
                                        { ...dataUpdate, dueDate: event.target.value }
                                    )}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dataUpdate?.type}
                                    onChange={(event) => setDataUpdate(
                                        { ...dataUpdate, type: event.target.value }
                                    )}
                                />
                            </div>

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-success" onClick={() => handleSave(dataUpdate)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddInvoice;