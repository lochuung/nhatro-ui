import {Form, Input, Modal, message} from "antd";
import {useState} from "react";
import ReactQuill from "react-quill";
import CurrencyInput from "../CurrencyInput.jsx";


const ServiceFeeForm = ({visible, isEditMode, currentServiceFee, onSubmit, onCancel}) => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState(currentServiceFee?.description || '');
    const [loading, setLoading] = useState(false);

    const handleOk = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            await onSubmit({...values, description});
            message.success(isEditMode ? 'Cập nhật dịch vụ thành công!' : 'Thêm mới dịch vụ thành công!');
            form.resetFields();
        } catch (error) {
            console.log('Validation Failed:', error);
            message.error('Có lỗi xảy ra. Vui lòng thử lại!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title={isEditMode ? 'Chỉnh sửa dịch vụ' : 'Thêm mới dịch vụ'}
            visible={visible}
            onOk={handleOk}
            onCancel={() => !loading && onCancel()}
            okText={isEditMode ? 'Cập nhật' : 'Thêm mới'}
            cancelText="Hủy"
            okButtonProps={{ loading, disabled: loading }}
            cancelButtonProps={{ disabled: loading }}
            closable={!loading}
            maskClosable={!loading}
        >
            <Form 
                form={form} 
                layout="vertical" 
                initialValues={currentServiceFee}
                disabled={loading}
            >
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