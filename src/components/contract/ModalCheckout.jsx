import React, {useState} from "react";
import {Button, DatePicker, Form, Modal, message} from "antd";
import dayjs from '../../utils/locale-custom.js';

const ModalCheckout = ({visible, onClose, onSubmit, contract}) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleOk = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            const formattedValues = {
                contractId: contract?.id,
                checkoutDate: values.checkoutDate.format("YYYY-MM-DD"),
            };
            await onSubmit(formattedValues);
            message.success('Trả phòng thành công!');
            form.resetFields();
        } catch (error) {
            console.error("Validation Failed:", error);
            message.error('Có lỗi xảy ra. Vui lòng thử lại!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Trả phòng"
            visible={visible}
            onCancel={() => {
                if (!loading) {
                    form.resetFields();
                    onClose();
                }
            }}
            footer={[
                <Button key="cancel" onClick={() => onClose()} disabled={loading}>
                    Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk} loading={loading}>
                    Xác nhận
                </Button>,
            ]}
            closable={!loading}
            maskClosable={!loading}
        >
            <Form form={form} layout="vertical" disabled={loading}>
                {/* Ngày trả phòng */}
                <Form.Item
                    label="Ngày trả phòng"
                    name="checkoutDate"
                    rules={[{required: true, message: "Vui lòng chọn ngày trả phòng!"}]}
                >
                    <DatePicker
                        format="YYYY-MM-DD"
                        placeholder="Chọn ngày trả phòng"
                        defaultValue={dayjs()}
                        style={{width: "100%"}}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalCheckout;
