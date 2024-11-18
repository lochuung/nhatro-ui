import React, { useState } from 'react';
import { Modal, DatePicker, Button } from 'antd';

const ModalPrintInvoices = ({ visible, onCancel, onPrint }) => {
    const [selectedMonth, setSelectedMonth] = useState(null);

    const handlePrint = () => {
        if (selectedMonth) {
            onPrint(selectedMonth);
        }
    };

    return (
        <Modal
            title="In tất cả hóa đơn"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Hủy
                </Button>,
                <Button
                    key="print"
                    type="primary"
                    onClick={handlePrint}
                    disabled={!selectedMonth}
                >
                    In hóa đơn
                </Button>,
            ]}
        >
            <div>
                <p>Chọn tháng để in hóa đơn:</p>
                <DatePicker
                    picker="month"
                    placeholder="Chọn tháng"
                    onChange={(date) => setSelectedMonth(date ? date.format('MM/YYYY') : null)}
                    style={{ width: '100%' }}
                />
            </div>
        </Modal>
    );
};

export default ModalPrintInvoices;