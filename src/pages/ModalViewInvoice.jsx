import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalViewInvoice = (props) => {
    const { show, setShow, currentContract } = props;

    const handleClose = () => {
        setShow(false);
    }

    const handlePrint = () => {
        const printContent = document.getElementById("printableArea");
        const printWindow = window.open('', '_blank');

        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Invoice</title>
                        <style>
                            
                            body { font-family: Arial, sans-serif;padding: 100px }
                            
                        </style>
                    </head>
                    <body onload="window.print()">
                    ${printContent.innerHTML}
                    </body>
                </html>
            `);
            printWindow.document.close();
        } else {
            alert("Cửa sổ in bị chặn. Vui lòng kiểm tra cài đặt trình duyệt.");
        }
    };

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
                    <Modal.Title>Detail a invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <form className="row g-3" id="printableArea">
                            <div className="col-md-6">
                                <label className="form-label">Room</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={currentContract?.roomName}
                                    disabled
                                // onChange={(event) => setRoomName(event.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Contract Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={currentContract?.contractName}
                                    disabled
                                // onChange={(event) => setContractName(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Old Electricity Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={currentContract?.oldElecNum}
                                    disabled
                                // onChange={(event) => setOldElectricityNumber(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">New Electricity Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={currentContract?.newElecNum}
                                    disabled
                                // onChange={(event) => setNewElectricityNumber(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Usage Electricity Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={currentContract?.newElecNum - currentContract?.oldElecNum}
                                    disabled
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Old Water Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={currentContract?.oldWaNum}
                                    disabled
                                // onChange={(event) => setOldWaterNumber(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">New Water Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={currentContract?.newWaNum}
                                    disabled
                                // onChange={(event) => setNewWaterNumber(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Usage Water Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={currentContract?.newWaNum - currentContract?.oldWaNum}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Service Fee</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={0}
                                    disabled
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Total</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={1000000}
                                    disabled
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handlePrint()}>
                        Print
                    </Button>
                    <Button className="btn btn-danger" onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalViewInvoice;