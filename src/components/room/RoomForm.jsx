import {Form, Input, Modal, Select} from 'antd';
import {useEffect, useState} from "react";
import ReactQuill from 'react-quill'; // Import the editor
import 'react-quill/dist/quill.snow.css'; // Import editor styling

const { Option } = Select;

const RoomForm = ({ visible, isEditMode, currentRoom, onSubmit, onCancel }) => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState('');  // State for rich text description

    useEffect(() => {
        if (visible) {
            if (isEditMode) {
                form.setFieldsValue(currentRoom);  // Set form values for editing
                setDescription(currentRoom?.description || '');  // Set editor value for editing
            } else {
                form.resetFields();  // Reset form for adding a new room
                setDescription('');  // Reset the editor
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
            onSubmit({ ...values, description });  // Include description in the form submission
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
                <Form.Item
                    label="Tên phòng"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên phòng!' }]}
                >
                    <Input placeholder="Nhập tên phòng" />
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    {/* Replace Input.TextArea with ReactQuill for rich text editing */}
                    <ReactQuill
                        value={description}
                        onChange={setDescription}  // Set the editor's value to the description state
                        placeholder="Nhập mô tả phòng"
                    />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="price"
                    rules={[{ required: true, message: 'Vui lòng nhập giá phòng!' }]}
                >
                    <Input type="number" placeholder="Nhập giá phòng" />
                </Form.Item>

                <Form.Item
                    label="Trạng thái"
                    name="status"
                    rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                >
                    <Select>
                        <Option value="AVAILABLE">Còn trống</Option>
                        <Option value="RENTED">Đã cho thuê</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Sức chứa"
                    name="capacity"
                    rules={[{ required: true, message: 'Vui lòng nhập sức chứa!' }]}
                >
                    <Input type="number" placeholder="Nhập sức chứa" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RoomForm;
