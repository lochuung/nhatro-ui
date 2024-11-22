import React from "react";
import {Button, DatePicker, Form, Modal} from "antd";
import dayjs from '../../utils/locale-custom.js';

const ModalCheckout = ({visible, onClose, onSubmit, contract}) => {
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            // Chuẩn hóa dữ liệu trước khi gửi
            const formattedValues = {
                contractId: contract?.id,
                checkoutDate: values.checkoutDate.format("YYYY-MM-DD"),
            };
            onSubmit(formattedValues); // Gửi dữ liệu lên server
            form.resetFields(); // Reset form sau khi gửi
        } catch (error) {
            console.error("Validation Failed:", error);
        }
    };

    return (
        <Modal
            title="Trả phòng"
            visible={visible}
            onCancel={() => {
                form.resetFields(); // Reset form khi đóng modal
                onClose();
            }}
            footer={[
                <Button key="cancel" onClick={() => onClose()}>
                    Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    Xác nhận
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
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
