import { Form, Input, Modal, DatePicker, Select } from 'antd';
import { useEffect, useState } from 'react';

const { Option } = Select;

const InvoiceForm = ({ visible, isEditMode, currentInvoice, onSubmit, onCancel }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (visible) {
            if (isEditMode) {
                form.setFieldsValue(currentInvoice);  // Set form values for editing
            } else {
                form.resetFields();  // Reset form for adding a new invoice
                form.setFieldsValue({
                    contractId: '',
                    oldElectricityNumber: 0,
                    oldWaterNumber: 0,
                    newElectricityNumber: 0,
                    newWaterNumber: 0,
                    electricityUnitPrice: 0,
                    waterUnitPrice: 0,
                    paidAmount: 0,
                    discount: 0,
                    customAmount: 0,
                    note: '',
                    adminNote: '',
                    type: 'CHECK_OUT',
                    startDate: null,
                    endDate: null,
                });
            }
        }
    }, [visible, isEditMode, currentInvoice, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values);
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    return (
        <Modal
            title={isEditMode ? 'Chỉnh sửa hóa đơn' : 'Thêm mới hóa đơn'}
            visible={visible}
            onOk={handleOk}
            onCancel={onCancel}
            okText={isEditMode ? 'Cập nhật' : 'Thêm mới'}
            cancelText="Hủy"
        >
            <Form form={form} layout="vertical" initialValues={currentInvoice}>
                <Form.Item
                    label="ID Hợp đồng"
                    name="contractId"
                    rules={[{ required: true, message: 'Vui lòng nhập ID hợp đồng!' }]}
                >
                    <Input type="number" placeholder="Nhập ID hợp đồng" />
                </Form.Item>

                <Form.Item
                    label="Chỉ số điện cũ"
                    name="oldElectricityNumber"
                >
                    <Input type="number" placeholder="Nhập chỉ số điện cũ" />
                </Form.Item>

                <Form.Item
                    label="Chỉ số điện mới"
                    name="newElectricityNumber"
                >
                    <Input type="number" placeholder="Nhập chỉ số điện mới" />
                </Form.Item>

                <Form.Item
                    label="Chỉ số nước cũ"
                    name="oldWaterNumber"
                >
                    <Input type="number" placeholder="Nhập chỉ số nước cũ" />
                </Form.Item>

                <Form.Item
                    label="Chỉ số nước mới"
                    name="newWaterNumber"
                >
                    <Input type="number" placeholder="Nhập chỉ số nước mới" />
                </Form.Item>

                <Form.Item
                    label="Đơn giá điện"
                    name="electricityUnitPrice"
                >
                    <Input type="number" placeholder="Nhập đơn giá điện" />
                </Form.Item>

                <Form.Item
                    label="Đơn giá nước"
                    name="waterUnitPrice"
                >
                    <Input type="number" placeholder="Nhập đơn giá nước" />
                </Form.Item>

                <Form.Item
                    label="Số tiền đã thanh toán"
                    name="paidAmount"
                >
                    <Input type="number" placeholder="Nhập số tiền đã thanh toán" />
                </Form.Item>

                <Form.Item
                    label="Giảm giá"
                    name="discount"
                >
                    <Input type="number" placeholder="Nhập giảm giá" />
                </Form.Item>

                <Form.Item
                    label="Số tiền tùy chỉnh"
                    name="customAmount"
                >
                    <Input type="number" placeholder="Nhập số tiền tùy chỉnh" />
                </Form.Item>

                <Form.Item label="Ghi chú" name="note">
                    <Input.TextArea placeholder="Nhập ghi chú" />
                </Form.Item>

                <Form.Item label="Ghi chú của quản trị viên" name="adminNote">
                    <Input.TextArea placeholder="Nhập ghi chú của quản trị viên" />
                </Form.Item>

                <Form.Item
                    label="Loại hóa đơn"
                    name="type"
                    rules={[{ required: true, message: 'Vui lòng chọn loại hóa đơn!' }]}
                >
                    <Select placeholder="Chọn loại hóa đơn">
                        <Option value="CHECK_OUT">CHECK_OUT</Option>
                        <Option value="MONTHLY">MONTHLY</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Ngày bắt đầu" name="startDate">
                    <DatePicker placeholder="Chọn ngày bắt đầu" format="YYYY-MM-DD" />
                </Form.Item>

                <Form.Item label="Ngày kết thúc" name="endDate">
                    <DatePicker placeholder="Chọn ngày kết thúc" format="YYYY-MM-DD" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default InvoiceForm;
