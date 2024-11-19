import React, {useState} from 'react';
import {Modal, DatePicker, Button} from 'antd';
import dayjs from '../../utils/locale-custom.js'

const ModalPrintInvoices = ({visible, onCancel, onPrint}) => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('MM/YYYY'));

    const handlePrint = () => {
        if (selectedMonth) {
            // get selected month
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
                    defaultValue={dayjs()} // Mặc định là tháng hiện tại
                    onChange={(date) => {
                        const month = date ? date.format('MM/YYYY') : dayjs().format('MM/YYYY');
                        setSelectedMonth(month); // Lấy giá trị hoặc mặc định là tháng hiện tại
                    }}
                    format="MM/YYYY" // Định dạng hiển thị
                    style={{width: '100%'}}
                />
            </div>
        </Modal>
    );
};

export default ModalPrintInvoices;