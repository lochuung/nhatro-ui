import React, { useState } from 'react';
import { Modal, DatePicker, Button } from 'antd';
import dayjs from "../../utils/locale-custom.js";

const ModalGenerateInvoices = ({ visible, onCancel, onSubmit }) => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('MM/YYYY'));

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
                    defaultValue={dayjs()} // Mặc định là tháng hiện tại
                    onChange={(date) => {
                        const selectedMonth = date ? date.format('MM/YYYY') : dayjs().format('MM/YYYY');
                        setSelectedMonth(selectedMonth); // Lấy giá trị hoặc mặc định là tháng hiện tại
                    }}
                    format="MM/YYYY" // Định dạng hiển thị
                    style={{width: '100%'}}
                />
            </div>
        </Modal>
    );
};

export default ModalGenerateInvoices;

