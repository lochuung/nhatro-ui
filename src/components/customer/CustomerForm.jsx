import {DatePicker, Form, Input, message, Modal, Switch, Upload} from 'antd';
import {useEffect, useState} from "react";
import ReactQuill from 'react-quill'; // Import the editor
import 'react-quill/dist/quill.snow.css';
import dayjs from "../../utils/locale-custom.js";
import CustomerImageServices from "../../services/CustomerImageServices.js";
import {UploadOutlined} from "@ant-design/icons";
import ApiUrl from "../../utils/api-url.js";

const CustomerForm = ({visible, isEditMode, customer, onSubmit, onCancel}) => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState(''); // State for rich text description
    const [fileList, setFileList] = useState([]); // State for uploaded files
    const [previewVisible, setPreviewVisible] = useState(false); // Hiển thị Modal xem trước
    const [previewImage, setPreviewImage] = useState(''); // URL ảnh xem trước
    const [previewTitle, setPreviewTitle] = useState(''); // Tiêu đề ảnh xem trước

    useEffect(() => {
        if (visible) {
            if (isEditMode && customer) {
                const birthday = customer.birthday?.split('/').reverse().join('-');
                const idDate = customer.idDate?.split('/').reverse().join('-');
                form.setFieldsValue({
                    ...customer,
                    birthday: customer.birthday ? dayjs(birthday) : null,
                    idDate: customer.idDate ? dayjs(idDate) : null,
                }); // Set form values for editing
                setDescription(customer?.description || ''); // Set editor value for editing
                CustomerImageServices.getCustomerImages(customer.id).then(response => {
                    const images = response.data;
                    if (images.length > 0) {
                        setFileList(images.map(image => ({
                            uid: image.imageKey, // Unique identifier
                            id: image.id,
                            name: image.fileName,
                            status: "done", // Đánh dấu upload thành công
                            url: `${ApiUrl.fileUrl}/images/${image.imageKey}`, // URL của ảnh
                        })));
                    }
                });
            } else {
                form.resetFields(); // Reset form for adding a new customer
                setFileList([]); // Reset uploaded files
                setDescription(''); // Reset the editor
            }
        }
    }, [visible, isEditMode, customer, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onSubmit({
                ...values,
                description, // Include description in submission
                birthday: values.birthday ? values.birthday.format("DD/MM/YYYY") : null,
                idDate: values.idDate ? values.idDate.format("DD/MM/YYYY") : null,
            });
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    const handleUpload = async ({file}) => {
        try {
            const response = await CustomerImageServices.uploadImage({
                id: customer?.id, // ID của customer (nếu đang chỉnh sửa)
                type: "CCCD",
                file,
            });
            const uploadedImageKey = response.data.imageKey;
            setFileList((prevList) => [
                ...prevList,
                {
                    uid: uploadedImageKey, // Unique identifier
                    id: response.data.id,
                    name: response.data.fileName,
                    status: "done", // Đánh dấu upload thành công
                    url: `${ApiUrl.fileUrl}/images/${uploadedImageKey}`, // URL của ảnh
                },
            ]);
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    const handleRemove = async (file) => {
        try {
            await CustomerImageServices.deleteCustomerImage(file.id); // Xóa ảnh trên server
            setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid)); // Loại bỏ ảnh khỏi danh sách
            message.success("Xóa ảnh thành công!");
        } catch (error) {
            console.error("Delete failed:", error);
            message.error("Xóa ảnh thất bại.");
        }
    };

    const handlePreview = async (file) => {
        setPreviewImage(file.url || file.thumbUrl); // Lấy URL của ảnh để hiển thị
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1)); // Tiêu đề của ảnh
        setPreviewVisible(true); // Hiển thị Modal xem trước
    };

    return (
        <>
            <Modal
                title={isEditMode ? 'Chỉnh sửa khách hàng' : 'Thêm mới khách hàng'}
                visible={visible}
                onOk={handleOk}
                onCancel={onCancel}
                okText={isEditMode ? 'Cập nhật' : 'Thêm mới'}
                cancelText="Hủy"
            >
                <Form form={form} layout="vertical" initialValues={customer}>
                    <Form.Item
                        label="Họ và Tên"
                        name="name"
                        rules={[{required: true, message: 'Vui lòng nhập tên khách hàng!'}]}
                    >
                        <Input placeholder="Nhập tên khách hàng"/>
                    </Form.Item>

                    <Form.Item
                        label="Biệt danh"
                        name="name2"
                    >
                        <Input placeholder="Nhập tên khác (nếu có)"/>
                    </Form.Item>


                    <Form.Item
                        label="Số Điện Thoại"
                        name="phone"
                        rules={[{required: true, message: 'Vui lòng nhập số điện thoại!'}]}
                    >
                        <Input placeholder="Nhập số điện thoại"/>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{type: 'email', message: 'Vui lòng nhập email hợp lệ!'}]}
                    >
                        <Input placeholder="Nhập email"/>
                    </Form.Item>

                    {
                        isEditMode &&
                        (<Form.Item
                            label="Ảnh CMND/CCCD">
                            <Upload
                                customRequest={handleUpload}
                                listType="picture-card"
                                fileList={fileList}
                                onRemove={handleRemove}
                                onPreview={handlePreview} // Sự kiện xem trước
                                showUploadList={{
                                    showRemoveIcon: true,
                                    showPreviewIcon: true, // Hiển thị nút xem trước
                                }}
                                multiple
                            >
                                {fileList.length >= 5 ? null : (
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <UploadOutlined style={{fontSize: 24}}/>
                                        <div style={{fontSize: 12}}>Tải lên</div>
                                    </div>
                                )}
                            </Upload>
                        </Form.Item>)
                    }

                    <Form.Item
                        label="Ngày Sinh"
                        name="birthday"
                        getValueProps={(value) => {
                            return value ? {value: dayjs(value)} : {};
                        }}
                    >
                        <DatePicker format="DD/MM/YYYY" placeholder="Chọn ngày sinh"/>
                    </Form.Item>

                    <Form.Item
                        label="CMND/CCCD"
                        name="idNumber"
                        rules={[{required: true, message: 'Vui lòng nhập số CMND/CCCD!'}]}
                    >
                        <Input placeholder="Nhập số CMND/CCCD"/>
                    </Form.Item>

                    <Form.Item
                        label="Nơi cấp"
                        name="idPlace"
                    >
                        <Input placeholder="Nhập nơi cấp CMND/CCCD"/>
                    </Form.Item>

                    <Form.Item
                        label="Ngày cấp"
                        name="idDate"
                        getValueProps={(value) => {
                            return value ? {value: dayjs(value)} : {};
                        }}
                    >
                        <DatePicker format="DD/MM/YYYY" placeholder="Chọn ngày cấp"/>
                    </Form.Item>

                    <Form.Item
                        label="Ngân hàng"
                        name="bankName"
                    >
                        <Input placeholder="Nhập tên ngân hàng"/>
                    </Form.Item>

                    <Form.Item
                        label="Số tài khoản ngân hàng"
                        name="bankNumber"
                    >
                        <Input placeholder="Nhập số tài khoản"/>
                    </Form.Item>

                    <Form.Item
                        label="Địa Chỉ"
                        name="address"
                        rules={[{required: true, message: 'Vui lòng nhập địa chỉ!'}]}
                    >
                        <Input placeholder="Nhập địa chỉ"/>
                    </Form.Item>

                    <Form.Item
                        label="Mô tả"
                        name="description"
                    >
                        <ReactQuill
                            value={description}
                            onChange={setDescription}
                            placeholder="Nhập mô tả khách hàng"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Kích hoạt"
                        name="enabled"
                        valuePropName="checked"
                        initialValue={true}
                    >
                        <Switch/>
                    </Form.Item>
                </Form>
            </Modal>
            {/* Modal xem trước ảnh */}
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={() => setPreviewVisible(false)}
            >
                <img alt="preview" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </>
    );
};

export default CustomerForm;