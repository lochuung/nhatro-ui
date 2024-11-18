import React, { useState } from 'react';
import { Modal, DatePicker, Button } from 'antd';

const ModalGenerateInvoices = ({ visible, onCancel, onSubmit }) => {
    const [selectedMonth, setSelectedMonth] = useState(null);

    const handleGenerate = () => {
        if (selectedMonth) {
            onSubmit(selectedMonth);
        }
    };

    return (
        <Modal
            title="Sinh hóa đơn tiền nhà"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Hủy
                </Button>,
                <Button
                    key="generate"
                    type="primary"
                    onClick={handleGenerate}
                    disabled={!selectedMonth}
                >
                    Sinh hóa đơn
                </Button>,
            ]}
        >
            <div>
                <p>Chọn tháng để sinh hóa đơn:</p>
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

export default ModalGenerateInvoices;

