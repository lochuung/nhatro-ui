import React, {useEffect, useState} from "react";
import {Button, DatePicker, Form, Input, List, Modal, Radio, Select, Space, Tabs} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import dayjs from "dayjs";
import CustomerServices from "../../services/CustomerServices.js";
import {toast} from "react-toastify";

const {TabPane} = Tabs;

const ModalEditMembers = ({visible, onClose, contract, onAddMembers, onChangeOwner, onLeave}) => {
    const [form] = Form.useForm();
    const [selectedOwner, setSelectedOwner] = useState(contract?.owner?.id); // Chủ phòng mới
    const [selectedLeaveMember, setSelectedLeaveMember] = useState(null); // Thành viên rời phòng
    const [checkoutDate, setCheckoutDate] = useState(null); // Ngày rời phòng
    const [members, setMembers] = useState(contract?.members || []);

    useEffect(() => {
        form.resetFields();
        setMembers(contract?.members || []);
        setSelectedOwner(contract?.owner?.id);
    }, [contract]);

    const contractId = contract?.id;

    const handleAddCustomer = (values) => {
        if (!values.customers || values.customers.length === 0) {
            toast.warning("Vui lòng chọn ít nhất một khách hàng.");
            return;
        }

        onAddMembers({
            customers: existCustomers.filter(v => {
                return values.customers.some(v2 => v2.phone === v.phone);
            }), contractId
        });
    };

    const handleChangeOwner = () => {
        onChangeOwner({customerId: selectedOwner, contractId});
    };

    const handleLeaveRoom = () => {
        if (selectedLeaveMember && checkoutDate) {
            onLeave({customerId: selectedLeaveMember, contractId, checkoutDate});
        }
    };

    const [existCustomers, setExistCustomers] = useState([]);

    useEffect(() => {
        form.resetFields();
        CustomerServices.getCustomers().then((res) => {
            setExistCustomers(res.data);
        });
    }, []);

    return (
        <Modal
            title="Chỉnh sửa thành viên hợp đồng"
            visible={visible}
            onCancel={onClose}
            footer={null}
            width={800}
        >
            <Tabs defaultActiveKey="1">
                {/* Tab 1: Thêm thành viên */}
                <TabPane tab="Thêm thành viên" key="1">
                    <Form form={form} onFinish={handleAddCustomer} layout="vertical">
                        {/* Hiển thị thông tin thành viên trong phòng */}
                        <div style={{marginBottom: 16}}>
                            <h4>Thành viên hiện tại</h4>
                            <List
                                dataSource={members}
                                renderItem={(customer) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<strong>{customer.name}</strong>}
                                            description={`Số điện thoại: ${customer.phone}`}
                                        />
                                    </List.Item>
                                )}
                                bordered
                                locale={{
                                    emptyText: "Không có thành viên nào trong hợp đồng này.",
                                }}
                            />
                        </div>

                        <Form.List
                            name="customers"
                        >
                            {(fields, {add, remove}) => (
                                <>
                                    {/* Hiển thị danh sách khách hàng trong Form.List */}
                                    {fields.map(({key, name, fieldKey, ...restField}) => {
                                        const customers = form.getFieldValue("customers") || [];
                                        const isOldCustomer = customers[name]?.isOldCustomer;

                                        return (
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
                                                    <h4>Khách hàng</h4>
                                                    <div>
                                                        {/* Nút Xóa */}
                                                        <MinusCircleOutlined
                                                            onClick={() => {
                                                                const currentCustomers = form.getFieldValue("customers") || [];
                                                                if (currentCustomers.length > 0) {
                                                                    remove(name);
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
                                                    <Input placeholder="Tên khách hàng" disabled={isOldCustomer}/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "birthday"]}
                                                    label="Ngày sinh"
                                                    fieldKey={[fieldKey, "birthday"]}
                                                    // rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
                                                >
                                                    <DatePicker placeholder="Ngày sinh" format="DD/MM/YYYY"
                                                                disabled={isOldCustomer}/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "phone"]}
                                                    label="Số điện thoại"
                                                    fieldKey={[fieldKey, "phone"]}
                                                    rules={[{required: true, message: "Vui lòng nhập số điện thoại!"}]}
                                                >
                                                    <Input placeholder="Số điện thoại" disabled={isOldCustomer}/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "idNumber"]}
                                                    label="CMND/CCCD"
                                                    fieldKey={[fieldKey, "idNumber"]}
                                                    // rules={[{ required: true, message: "Vui lòng nhập số CMND/CCCD!" }]}
                                                >
                                                    <Input placeholder="CMND/CCCD" disabled={isOldCustomer}/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "idPlace"]}
                                                    label="Nơi cấp"
                                                    fieldKey={[fieldKey, "idPlace"]}
                                                    // rules={[{ required: true, message: "Vui lòng nhập nơi cấp!" }]}
                                                >
                                                    <Input placeholder="Nơi cấp" disabled={isOldCustomer}/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "idDate"]}
                                                    label="Ngày cấp"
                                                    fieldKey={[fieldKey, "idDate"]}
                                                    // rules={[{ required: true, message: "Vui lòng nhập ngày cấp!" }]}
                                                >
                                                    <DatePicker placeholder="Ngày cấp" format="DD/MM/YYYY"
                                                                disabled={isOldCustomer}/>
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "address"]}
                                                    label="Địa chỉ"
                                                    fieldKey={[fieldKey, "address"]}
                                                    // rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
                                                >
                                                    <Input placeholder="Địa chỉ" disabled={isOldCustomer}/>
                                                </Form.Item>
                                            </div>
                                        );
                                    })}

                                    {/* Lựa chọn khách thuê cũ */}
                                    <Form.Item label="Thêm khách thuê cũ">
                                        <Select
                                            placeholder="Thêm khách thuê cũ"
                                            onChange={(value) => {
                                                const selectedCustomer = existCustomers.find((customer) => customer.id === value);
                                                if (selectedCustomer) {
                                                    const customers = form.getFieldValue("customers") || [];
                                                    const isExist = customers.some((customer) => customer.idNumber === selectedCustomer.idNumber);

                                                    if (isExist) {
                                                        toast.warning("Khách hàng đã tồn tại trong danh sách.");
                                                        return;
                                                    }

                                                    const birthDay = selectedCustomer.birthday.split("/");
                                                    const idDate = selectedCustomer.idDate.split("/");
                                                    add({
                                                        id: selectedCustomer.id,
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
                                                        isOldCustomer: true, // Đánh dấu là khách cũ
                                                    });
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
                                            onClick={() => add({isOldCustomer: false})} // Thêm khách mới
                                            block
                                            icon={<PlusOutlined/>}
                                        >
                                            Thêm khách hàng mới
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <Button type="primary" htmlType="submit" block>
                            Cập nhật danh sách
                        </Button>
                    </Form>
                </TabPane>

                {/* Tab 2: Đổi chủ phòng */}
                <TabPane tab="Đổi chủ phòng" key="2">
                    <Radio.Group
                        onChange={(e) => setSelectedOwner(e.target.value)}
                        value={selectedOwner}
                        style={{width: "100%"}}
                    >
                        {members.map((customer) => (
                            <Radio key={customer.id} value={customer.id} style={{display: "block", marginBottom: 8}}>
                                {customer.name} - {customer.phone}
                            </Radio>
                        ))}
                    </Radio.Group>
                    <Button
                        type="primary"
                        block
                        disabled={!selectedOwner}
                        onClick={handleChangeOwner}
                    >
                        Đổi chủ phòng
                    </Button>
                </TabPane>

                {/* Tab 3: Thành viên rời phòng */}
                <TabPane tab="Thành viên rời phòng" key="3">
                    <Radio.Group
                        onChange={(e) => setSelectedLeaveMember(e.target.value)}
                        value={selectedLeaveMember}
                        style={{width: "100%"}}
                    >
                        {members.map((customer) => (
                            <Radio key={customer.id} value={customer.id} style={{display: "block", marginBottom: 8}}>
                                {customer.name} - {customer.phone}
                            </Radio>
                        ))}
                    </Radio.Group>
                    <DatePicker
                        placeholder="Chọn ngày rời phòng"
                        format="DD/MM/YYYY"
                        onChange={(date) => setCheckoutDate(date ? date.format("YYYY-MM-DD") : null)}
                        style={{width: "100%", marginTop: 16, marginBottom: 16}}
                    />
                    <Button
                        type="primary"
                        block
                        disabled={!selectedLeaveMember || !checkoutDate}
                        onClick={handleLeaveRoom}
                    >
                        Xác nhận rời phòng
                    </Button>
                </TabPane>
            </Tabs>
        </Modal>
    );
};

export default ModalEditMembers;
