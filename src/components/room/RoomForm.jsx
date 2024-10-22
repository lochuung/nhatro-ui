import {Form, Input, Modal, Select} from 'antd';
import {useEffect} from "react";

const {Option} = Select;

const RoomForm = ({visible, isEditMode, currentRoom, onSubmit, onCancel}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        if (visible) {
            if (isEditMode) {
                form.setFieldsValue(currentRoom); // Set form values for editing
            } else {
                form.resetFields(); // Reset form for adding a new room
                form.setFieldsValue({
                    name: '',
                    description: '',
                    price: '',
                    status: 'AVAILABLE',
                    capacity: 0,
                    type: '',
                    branchId: 1
                });
            }
        }
    }, [visible, isEditMode, currentRoom, form]);
    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values); // Pass validated data to the parent component
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    return (
        <Modal
            title={isEditMode ? 'Chỉnh sửa phòng' : 'Thêm mới phòng'}
            visible={visible}
            onOk={handleOk}
            onCancel={onCancel}
            okText={isEditMode ? 'Cập nhật' : 'Thêm mới'}
            cancelText="Hủy"
        >
            <Form form={form} layout="vertical" initialValues={currentRoom}>
                <Form.Item label="Tên phòng" name="name"
                           rules={[{required: true, message: 'Vui lòng nhập tên phòng!'}]}>
                    <Input placeholder="Nhập tên phòng"/>
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea placeholder="Nhập mô tả phòng"/>
                </Form.Item>

                <Form.Item label="Giá" name="price" rules={[{required: true, message: 'Vui lòng nhập giá phòng!'}]}>
                    <Input type="number" placeholder="Nhập giá phòng"/>
                </Form.Item>

                <Form.Item label="Trạng thái" name="status"
                           rules={[{required: true, message: 'Vui lòng chọn trạng thái!'}]}>
                    <Select>
                        <Option value="AVAILABLE">Còn trống</Option>
                        <Option value="RENTED">Đã cho thuê</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Sức chứa" name="capacity"
                           rules={[{required: true, message: 'Vui lòng nhập sức chứa!'}]}>
                    <Input type="number" placeholder="Nhập sức chứa"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RoomForm;