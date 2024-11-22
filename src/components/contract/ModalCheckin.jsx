import React, {useEffect, useState} from "react";
import {Button, DatePicker, Form, Input, InputNumber, Modal, Select, Space} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import dayjs from "dayjs";
import CurrencyInput from "../CurrencyInput";
import CustomerServices from "../../services/CustomerServices.js";
import {toast} from "react-toastify";

const {Option} = Select;

const ModalRentRoom = ({visible, onClose, onSubmit, room}) => {
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const formattedValues = {
                ...values,
                startDate: values.startDate ? values.startDate.format("YYYY-MM-DD") : null,
                roomId: room.id,
            };
            // format date string
            formattedValues["customers"] = formattedValues["customers"].map((customer) => {
                return {
                    ...customer,
                    birthday: customer.birthday ? customer.birthday.format("DD/MM/YYYY") : null,
                    idDate: customer.idDate ? customer.idDate.format("DD/MM/YYYY") : null,
                };
            });
            try {
                onSubmit(formattedValues);
                // form.resetFields();
            } catch (error) {
                console.error("Failed to create contract:", error);
                toast.error(error.response.data.description);
            }
        } catch (error) {
            console.error("Validation Failed:", error);
        }
    };

    const [existCustomers, setExistCustomers] = useState([]);

    useEffect(() => {
        // const fetchCustomers = await CustomerServices.getCustomers();
        CustomerServices.getCustomers().then((fetchCustomers) => {
            setExistCustomers(fetchCustomers.data);
        });
    }, []);

    return (
        <Modal
            title="Thuê phòng"
            visible={visible}
            onCancel={() => {
                form.resetFields(); // Reset form khi đóng modal
                onClose();
            }}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    Xác nhận
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                {/* Ngày bắt đầu */}
                <Form.Item
                    label="Ngày bắt đầu"
                    name="startDate"
                    rules={[{required: true, message: "Vui lòng chọn ngày bắt đầu!"}]}
                >
                    <DatePicker format="YYYY-MM-DD" placeholder="Chọn ngày bắt đầu" style={{width: "100%"}}/>
                </Form.Item>

                {/* Chỉ số điện và nước */}
                <Form.Item
                    label="Chỉ số điện khi nhận phòng"
                    name="checkinElectricNumber"
                    rules={[{required: true, type: "number", min: 0, message: "Chỉ số điện phải >= 0!"}]}
                >
                    <InputNumber min={0} style={{width: "100%"}} placeholder="Nhập chỉ số điện"/>
                </Form.Item>

                <Form.Item
                    label="Chỉ số nước khi nhận phòng"
                    name="checkinWaterNumber"
                    rules={[{required: true, type: "number", min: 0, message: "Chỉ số nước phải >= 0!"}]}
                >
                    <InputNumber min={0} style={{width: "100%"}} placeholder="Nhập chỉ số nước"/>
                </Form.Item>

                {/* Giá phòng và tiền cọc */}
                <Form.Item
                    label="Giá phòng"
                    name="price"
                    rules={[{required: true, message: "Vui lòng nhập giá phòng!"}]}
                >
                    <CurrencyInput placeholder="Nhập giá phòng"/>
                </Form.Item>

                <Form.Item
                    label="Tiền cọc"
                    name="deposit"
                    rules={[{required: true, message: "Vui lòng nhập tiền cọc!"}]}
                >
                    <CurrencyInput placeholder="Nhập tiền cọc"/>
                </Form.Item>

                {/* Ghi chú */}
                <Form.Item label="Ghi chú" name="note">
                    <Input.TextArea placeholder="Nhập ghi chú"/>
                </Form.Item>


                {/* Danh sách khách hàng */}
                <Form.List
                    name="customers"
                    rules={[
                        {
                            validator: async (_, customers) => {
                                if (!customers || customers.length < 1) {
                                    return Promise.reject(new Error("Cần ít nhất 1 khách hàng!"));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, {add, remove}) => (
                        <>
                            {/* Hiển thị danh sách khách hàng trong Form.List */}
                            {fields.map(({key, name, fieldKey, ...restField}) => (
                                <div
                                    key={key}
                                    style={{
                                        marginBottom: 16,
                                        border: "1px solid #ddd",
                                        padding: "16px",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Space style={{display: "flex", justifyContent: "space-between"}}>
                                        <h4>Khách hàng {key === 0 ? '(Chủ phòng)' : null}</h4>
                                        <div>
                                            {/* Nút Chọn Chủ Phòng */}
                                            {key !== 0 && (
                                                <Button
                                                    type="link"
                                                    size="small"
                                                    style={{padding: 0, color: "#1890ff"}} // Đơn giản hóa giao diện nút
                                                    onClick={() => {
                                                        const currentCustomers = form.getFieldValue("customers") || [];
                                                        const selectedCustomer = currentCustomers[name];

                                                        // Đẩy khách hàng được chọn lên đầu danh sách
                                                        const updatedCustomers = [
                                                            selectedCustomer,
                                                            ...currentCustomers.filter((_, index) => index !== name),
                                                        ];

                                                        form.setFieldsValue({customers: updatedCustomers});
                                                        toast.success(`${selectedCustomer?.name} đã được chọn làm chủ phòng.`);
                                                    }}
                                                >
                                                    Chọn làm chủ phòng
                                                </Button>
                                            )}

                                            {/* Nút Xóa */}
                                            <MinusCircleOutlined
                                                onClick={() => {
                                                    const currentCustomers = form.getFieldValue("customers") || [];
                                                    if (currentCustomers.length > 1) {
                                                        remove(name);
                                                    } else {
                                                        // Nếu chỉ còn 1 khách, thông báo lỗi
                                                        Modal.warning({
                                                            title: "Không thể xóa",
                                                            content: "Hợp đồng phải có ít nhất 1 khách hàng.",
                                                        });
                                                    }
                                                }}
                                                style={{color: "red", cursor: "pointer", marginLeft: 8}}
                                            />
                                        </div>
                                    </Space>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "name"]}
                                        label="Họ và tên"
                                        fieldKey={[fieldKey, "name"]}
                                        rules={[{required: true, message: "Vui lòng nhập tên khách hàng!"}]}
                                    >
                                        <Input placeholder="Tên khách hàng"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "birthday"]}
                                        label="Ngày sinh"
                                        fieldKey={[fieldKey, "birthday"]}
                                        rules={[{required: true, message: "Vui lòng nhập ngày sinh!"}]}
                                    >
                                        <DatePicker placeholder="Ngày sinh" format="DD/MM/YYYY"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "phone"]}
                                        label="Số điện thoại"
                                        fieldKey={[fieldKey, "phone"]}
                                        rules={[{required: true, message: "Vui lòng nhập số điện thoại!"}]}
                                    >
                                        <Input placeholder="Số điện thoại"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "idNumber"]}
                                        label="CMND/CCCD"
                                        fieldKey={[fieldKey, "idNumber"]}
                                        rules={[{required: true, message: "Vui lòng nhập số CMND/CCCD!"}]}
                                    >
                                        <Input placeholder="CMND/CCCD"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "idPlace"]}
                                        label="Nơi cấp"
                                        fieldKey={[fieldKey, "idPlace"]}
                                        rules={[{required: true, message: "Vui lòng nhập nơi cấp!"}]}
                                    >
                                        <Input placeholder="Nơi cấp"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "idDate"]}
                                        label="Ngày cấp"
                                        fieldKey={[fieldKey, "idDate"]}
                                        rules={[{required: true, message: "Vui lòng nhập ngày cấp!"}]}
                                    >
                                        <DatePicker placeholder="Ngày cấp" format="DD/MM/YYYY"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "address"]}
                                        label="Địa chỉ"
                                        fieldKey={[fieldKey, "address"]}
                                        rules={[{required: true, message: "Vui lòng nhập địa chỉ!"}]}
                                    >
                                        <Input placeholder="Địa chỉ"/>
                                    </Form.Item>
                                </div>
                            ))}


                            {/* Lựa chọn khách thuê cũ */}
                            <Form.Item label="Thêm khách thuê cũ">
                                <Select
                                    placeholder="Thêm khách thuê cũ"
                                    onChange={(value) => {
                                        // Tìm khách hàng trong danh sách cũ
                                        const selectedCustomer = existCustomers.find((customer) => customer.id === value);
                                        if (selectedCustomer) {
                                            const customers = form.getFieldValue("customers") || []; // Lấy danh sách hiện tại từ Form.List
                                            const isExist = customers.some((customer) => customer.idNumber === selectedCustomer.idNumber);

                                            if (isExist) {
                                                toast.warning("Khách hàng đã tồn tại trong danh sách.");
                                                return;
                                            }
                                            // Thêm khách thuê từ danh sách cũ vào Form.List
                                            const birthDay = selectedCustomer.birthday.split("/");
                                            const idDate = selectedCustomer.idDate.split("/");
                                            add({
                                                name: selectedCustomer.name,
                                                phone: selectedCustomer.phone,
                                                email: selectedCustomer.email,
                                                idNumber: selectedCustomer.idNumber,
                                                address: selectedCustomer.address,
                                                birthday: selectedCustomer.birthday
                                                    ? dayjs(`${birthDay[2]}-${birthDay[1]}-${birthDay[0]}`)
                                                    : undefined,
                                                idPlace: selectedCustomer.idPlace,
                                                idDate: selectedCustomer.idDate
                                                    ? dayjs(`${idDate[2]}-${idDate[1]}-${idDate[0]}`)
                                                    : undefined,
                                            });
                                            // reset value của Select
                                            form.setFieldsValue({existCustomer: undefined});
                                        }
                                    }}
                                    showSearch={true}
                                    optionFilterProp="children"
                                >
                                    {existCustomers.map((customer) => (
                                        <Select.Option key={customer.id} value={customer.id}>
                                            {customer.name} - {customer.phone}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            {/* Thêm khách hàng mới */}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined/>}
                                >
                                    Thêm khách hàng mới
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

            </Form>
        </Modal>
    );
};

export default ModalRentRoom;
