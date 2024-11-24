import {Form, Input, Modal} from "antd";
import {useState} from "react";
import ReactQuill from "react-quill";
import CurrencyInput from "../CurrencyInput.jsx";


const ServiceFeeForm = ({visible, isEditMode, currentServiceFee, onSubmit, onCancel}) => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState(currentServiceFee?.description || '');

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onSubmit({...values, description});
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    return (
        <Modal
            title={isEditMode ? 'Chỉnh sửa dịch vụ' : 'Thêm mới dịch vụ'}
            visible={visible}
            onOk={handleOk}
            onCancel={onCancel}
            okText={isEditMode ? 'Cập nhật' : 'Thêm mới'}
            cancelText="Hủy"
        >
            <Form form={form} layout="vertical" initialValues={currentServiceFee}>
                <Form.Item
                    label="Tên dịch vụ"
                    name="name"
                    rules={[{required: true, message: 'Vui lòng nhập tên dịch vụ!'}]}
                >
                    <Input placeholder="Nhập tên dịch vụ"/>
                </Form.Item>

                <Form.Item
                    label="Mã dịch vụ"
                    name="code"
                >
                    <Input placeholder="Để trống để tạo tự động" disabled={isEditMode}/>
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                >
                    <ReactQuill
                        value={description}
                        onChange={setDescription}
                        placeholder="Nhập mô tả dịch vụ"
                    />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="unitPrice"
                    rules={[{required: true, message: 'Vui lòng nhập giá dịch vụ!'}]}
                >
                    <CurrencyInput placeholder="Nhập giá dịch vụ"/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ServiceFeeForm;