import React from 'react';
import { Modal, Form, Radio, InputNumber } from 'antd';
import CurrencyInput from "../CurrencyInput.jsx";

const PaymentModal = ({ visible, onCancel, onOk, invoice, loading }) => {
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const currentPaidAmount = invoice?.paidAmount || 0;
            let newPaidAmount = currentPaidAmount;

            switch (values.operation) {
                case 'add':
                    newPaidAmount += values.amount;
                    break;
                case 'subtract':
                    newPaidAmount = Math.max(0, currentPaidAmount - values.amount);
                    break;
                case 'set':
                    newPaidAmount = values.amount;
                    break;
                default:
                    break;
            }

            await onOk({ ...invoice, paidAmount: newPaidAmount });
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    return (
        <Modal
            title="Cập nhật thanh toán"
            open={visible}
            onCancel={() => !loading && onCancel()}
            onOk={handleOk}
            okText="Cập nhật"
            cancelText="Hủy"
            okButtonProps={{ loading, disabled: loading }}
            cancelButtonProps={{ disabled: loading }}
            confirmLoading={loading}
            closable={!loading}
            maskClosable={!loading}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    operation: 'add',
                    amount: 0,
                }}
                disabled={loading}
            >
                <Form.Item label="Số tiền đã thanh toán hiện tại">
                    <CurrencyInput
                        value={invoice?.paidAmount || 0}
                        disabled
                    />
                </Form.Item>

                <Form.Item
                    name="operation"
                    label="Thao tác"
                    rules={[{ required: true }]}
                >
                    <Radio.Group>
                        <Radio value="add">Thêm tiền</Radio>
                        <Radio value="subtract">Trừ tiền</Radio>
                        <Radio value="set">Đặt số tiền</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="amount"
                    label="Số tiền"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số tiền' },
                        { type: 'number', min: 0, message: 'Số tiền phải lớn hơn 0' }
                    ]}
                >
                    <CurrencyInput placeholder="Nhập số tiền" />
                </Form.Item>

                <Form.Item label="Tổng tiền cần thanh toán">
                    <CurrencyInput
                        value={invoice?.totalAmount || 0}
                        disabled
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default PaymentModal;
