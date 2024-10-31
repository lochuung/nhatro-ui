import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';


const ModalUpdateInvoice = (props) => {
    const { show, setShow, invoices, dataUpdate, setDataUpdate, setInvoices } = props;

    const handleSave = (dataUpdate) => {
        setInvoices(
            invoices.map((invoice) => (invoice.id === dataUpdate.id ? dataUpdate : invoice))
        )

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
                    <Modal.Title>Update a invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <form className="row g-3" id="printableArea">
                            <div className="col-md-6">
                                <label className="form-label">Room</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dataUpdate?.roomName}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Contract Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={dataUpdate?.contractName}
                                    disabled
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Old Electricity Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={
                                        (dataUpdate?.oldElecNum) ? dataUpdate?.oldElecNum : 0
                                    }
                                    disabled
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">New Electricity Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={dataUpdate?.newElecNum}
                                    onChange={(event) => setDataUpdate(
                                        { ...dataUpdate, newElecNum: +event.target.value }
                                    )}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Usage Electricity Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={
                                        (dataUpdate?.newElecNum > dataUpdate?.oldElecNum) ?
                                            dataUpdate?.newElecNum - dataUpdate?.oldElecNum
                                            :
                                            0
                                    }
                                    disabled
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Old Water Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={
                                        (dataUpdate?.oldWaNum) ? dataUpdate?.oldWaNum : 0
                                    }
                                    disabled
                                // onChange={(event) => setOldWaterNumber(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">New Water Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={dataUpdate?.newWaNum}
                                    onChange={(event) => setDataUpdate(
                                        { ...dataUpdate, newWaNum: +event.target.value }
                                    )} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Usage Water Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={
                                        (dataUpdate?.newWaNum > dataUpdate?.oldWaNum) ?
                                            dataUpdate?.newWaNum - dataUpdate?.oldWaNum
                                            :
                                            0
                                    }
                                    disabled
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Service Fee</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={0}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Total</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={100000}
                                    disabled
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

export default ModalUpdateInvoice;