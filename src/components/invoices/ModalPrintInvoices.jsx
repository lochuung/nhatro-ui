import React, {useState} from 'react';
import {Button, DatePicker, Modal, message} from 'antd';
import dayjs from '../../utils/locale-custom.js'

const ModalPrintInvoices = ({visible, onCancel, onPrint}) => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('MM/YYYY'));
    const [loading, setLoading] = useState(false);

    const handlePrint = async () => {
        try {
            setLoading(true);
            if (selectedMonth) {
                await onPrint(selectedMonth);
                message.success('In hóa đơn thành công!');
            }
        } catch (error) {
            message.error('Có lỗi xảy ra khi in hóa đơn!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="In tất cả hóa đơn"
            visible={visible}
            onCancel={() => !loading && onCancel()}
            footer={[
                <Button key="cancel" onClick={onCancel} disabled={loading}>
                    Hủy
                </Button>,
                <Button
                    key="print"
                    type="primary"
                    onClick={handlePrint}
                    loading={loading}
                >
                    In hóa đơn
                </Button>,
            ]}
            closable={!loading}
            maskClosable={!loading}
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