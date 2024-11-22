import {Button, DatePicker, Form, Input, InputNumber, Modal, Select, Space} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import ContractServices from '../../services/ContractServices.js';
import ServiceServices from '../../services/ServiceServices.js';
import SettingServices from "../../services/SettingServices.js";
import {SettingConstants} from "../../constant/SettingConstants.js";
import CurrencyInput from "../CurrencyInput.jsx";
import dayjs from '../../utils/locale-custom.js';

const {Option} = Select;

const {RangePicker} = DatePicker;

const InvoiceForm = ({visible, isEditMode, currentInvoice, onSubmit, onCancel}) => {
    const [form] = Form.useForm();
    const [contracts, setContracts] = useState([]);
    const [services, setServices] = useState([]);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        // Fetch contracts and services
        ContractServices.getContractsAvailable().then((response) => setContracts(response.data));
        ServiceServices.getAll().then((response) => setServices(response.data));
        SettingServices.getSettings().then((response) => setSettings(response.data));
    }, []);

    const electricityUnitPrice = settings[SettingConstants.ELECTRICITY_UNIT_PRICE]?.value;
    const waterUnitPrice = settings[SettingConstants.WATER_UNIT_PRICE]?.value;

    useEffect(() => {
        form.setFieldsValue({
            electricityUnitPrice: electricityUnitPrice || 0,
            waterUnitPrice: waterUnitPrice || 0,
        });
    }, [settings]);

    useEffect(() => {
        if (visible) {
            if (isEditMode && currentInvoice) {
                form.setFieldsValue({
                    ...currentInvoice,
                    contractId: currentInvoice.contract.id,
                    services: currentInvoice.serviceFees || [],
                    dateRange: [
                        currentInvoice.startDate ? dayjs(currentInvoice.startDate) : null,
                        currentInvoice.endDate ? dayjs(currentInvoice.endDate) : null,
                    ]
                });
            } else {
                form.resetFields();
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
                    roomAmount: 0,
                    note: '',
                    adminNote: '',
                    type: 'MONTHLY',
                    startDate: null,
                    endDate: null,
                    services: [], // Empty list for new invoice
                });
            }
        }
    }, [visible, isEditMode, currentInvoice, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const {roomOption, stayDays, services, ...filteredValues} = values;

            const [startDate, endDate] = values.dateRange || [];
            const formattedValues = {
                ...filteredValues,
                serviceFees: services,
                startDate: startDate ? startDate.toISOString() : null,
                endDate: endDate ? endDate.toISOString() : null,
            };

            delete formattedValues.dateRange; // Xóa `dateRange` khỏi dữ liệu gửi đi
            onSubmit(formattedValues);
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    const calculateTotalServiceFee = (serviceFees) => {
        const total = serviceFees.reduce((sum, service) => sum + (service.unitPrice || 0), 0);
        form.setFieldValue('totalServiceFee', total); // Cập nhật tổng phí dịch vụ vào form
    };

    const calculateTotalAmount = () => {
        const values = form.getFieldsValue();

        // Lấy giá trị các trường
        const roomAmount = values.roomAmount || 0; // Tiền phòng
        const totalServiceFee = values.totalServiceFee || 0; // Tổng phí dịch vụ
        const otherFee = values.otherFee || 0; // Phí khác
        const discount = values.discount || 0; // Giảm giá
        const paidAmount = values.paidAmount || 0; // Đã thanh toán

        // Tính tiền điện
        const electricityUsage = Math.max(
            (values.newElectricityNumber || 0) - (values.oldElectricityNumber || 0),
            0
        );
        const electricityFee = electricityUsage * (values.electricityUnitPrice || 0);

        // Tính tiền nước
        const waterUsage = Math.max(
            (values.newWaterNumber || 0) - (values.oldWaterNumber || 0),
            0
        );
        const waterFee = waterUsage * (values.waterUnitPrice || 0);

        // Tổng tiền
        const total =
            roomAmount +
            totalServiceFee +
            otherFee +
            electricityFee +
            waterFee -
            discount -
            paidAmount;

        // Cập nhật giá trị vào trường totalAmount
        form.setFieldValue('totalAmount', Math.max(total, 0)); // Đảm bảo không âm
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
            <Form form={form} layout="vertical"
                  onValuesChange={() => {
                      calculateTotalAmount(); // Gọi hàm tính tổng tiền mỗi khi form thay đổi
                  }}
            >
                <Form.Item
                    label="ID Hợp đồng"
                    name="contractId"
                    rules={[{required: true, message: 'Vui lòng chọn hợp đồng!'}]}
                >
                    <Select
                        placeholder="Chọn hợp đồng"
                        onChange={(value) => {
                            // Lấy hợp đồng đã chọn
                            const selectedContract = contracts.find((contract) => contract.id === value);

                            if (selectedContract) {
                                // Cập nhật tiền phòng từ giá hợp đồng
                                form.setFieldsValue({
                                    roomAmount: selectedContract.room.price,
                                });
                            }
                        }}
                    >
                        {contracts.map((contract) => (
                            <Option key={contract.id} value={contract.id}>
                                {contract.room.name} - ({contract.code})
                            </Option>
                        ))}
                    </Select>
                </Form.Item>


                <Form.Item
                    label="Loại hóa đơn"
                    name="type"
                    rules={[{required: true, message: 'Vui lòng chọn loại hóa đơn!'}]}
                >
                    <Select placeholder="Chọn loại hóa đơn">
                        <Option value="MONTHLY">MONTHLY</Option>
                        <Option value="CHECK_OUT">CHECK_OUT</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Chỉ số điện cũ"
                    name="oldElectricityNumber"
                    rules={[
                        {required: true, message: 'Vui lòng nhập chỉ số điện cũ!'},
                        {type: 'number', min: 0, message: 'Số điện cũ phải >= 0!'},
                    ]}
                >
                    <InputNumber
                        placeholder="Nhập chỉ số điện cũ"
                        min={0} // Không cho phép nhập số âm
                        style={{width: '100%'}}
                        parser={(value) => Number(value.replace(/[^0-9]/g, ''))} // Đảm bảo luôn là số
                    />
                </Form.Item>

                <Form.Item
                    label="Chỉ số điện mới"
                    name="newElectricityNumber"
                    rules={[
                        {required: true, message: 'Vui lòng nhập chỉ số điện mới!'},
                        {type: 'number', min: 0, message: 'Số điện mới phải >= 0!'},
                    ]}
                >
                    <InputNumber
                        placeholder="Nhập chỉ số điện mới"
                        min={0}
                        style={{width: '100%'}}
                        parser={(value) => Number(value.replace(/[^0-9]/g, ''))}
                    />
                </Form.Item>

                <Form.Item
                    label="Chỉ số nước cũ"
                    name="oldWaterNumber"
                    rules={[
                        {required: true, message: 'Vui lòng nhập chỉ số nước cũ!'},
                        {type: 'number', min: 0, message: 'Số nước cũ phải >= 0!'},
                    ]}
                >
                    <InputNumber
                        placeholder="Nhập chỉ số nước cũ"
                        min={0}
                        style={{width: '100%'}}
                        parser={(value) => Number(value.replace(/[^0-9]/g, ''))}
                    />
                </Form.Item>

                <Form.Item
                    label="Chỉ số nước mới"
                    name="newWaterNumber"
                    rules={[
                        {required: true, message: 'Vui lòng nhập chỉ số nước mới!'},
                        {type: 'number', min: 0, message: 'Số nước mới phải >= 0!'},
                    ]}
                >
                    <InputNumber
                        placeholder="Nhập chỉ số nước mới"
                        min={0}
                        style={{width: '100%'}}
                        parser={(value) => Number(value.replace(/[^0-9]/g, ''))}
                    />
                </Form.Item>


                <Form.Item
                    label="Đơn giá điện"
                    name="electricityUnitPrice"
                    rules={[{required: true, message: 'Đơn giá điện phải >= 0!'}]}
                >
                    <CurrencyInput placeholder="Nhập đơn giá điện"/>
                </Form.Item>

                <Form.Item
                    label="Đơn giá nước"
                    name="waterUnitPrice"
                    rules={[{required: true, message: 'Đơn giá nước phải >= 0!'}]}
                >
                    <CurrencyInput placeholder="Nhập đơn giá nước"/>
                </Form.Item>

                <Form.Item
                    label="Số tiền đã thanh toán"
                    name="paidAmount"
                    rules={[{required: true, message: 'Số tiền thanh toán phải >= 0!'}]}
                >
                    <CurrencyInput placeholder="Nhập số tiền đã thanh toán"/>
                </Form.Item>

                <Form.Item
                    label="Giảm giá"
                    name="discount"
                    rules={[{required: true, message: 'Giảm giá phải >= 0!'}]}
                >
                    <CurrencyInput placeholder="Nhập giảm giá"/>
                </Form.Item>

                <Form.Item label="Gợi ý tính tiền phòng" name="roomOption" initialValue="default">
                    <Select
                        onChange={(value) => {
                            if (value === 'default') {
                                // Nếu chọn giá phòng mặc định
                                const selectedContractId = form.getFieldValue('contractId');
                                const selectedContract = contracts.find((contract) => contract.id === selectedContractId);
                                if (selectedContract) {
                                    // Lấy giá phòng từ hợp đồng
                                    const roomPrice = selectedContract.room.price;
                                    form.setFieldValue('roomAmount', roomPrice);
                                }
                                // Reset số ngày ở
                                form.setFieldValue('stayDays', null);
                            } else {
                                // Đặt lại tiền phòng để người dùng nhập hoặc tính theo số ngày
                                form.setFieldValue('roomAmount', 0);
                            }
                        }}
                    >
                        <Select.Option value="default">Sử dụng giá phòng mặc định</Select.Option>
                        <Select.Option value="custom">Tính tiền theo số ngày</Select.Option>
                    </Select>
                </Form.Item>

                {/* Hiển thị trường Số ngày ở khi chọn "Tính theo ngày" */}
                <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.roomOption !== curValues.roomOption}>
                    {({getFieldValue}) =>
                        getFieldValue('roomOption') === 'custom' ? (
                            <Form.Item
                                label="Số ngày ở"
                                name="stayDays"
                                rules={[{required: true, type: 'number', min: 1, message: 'Số ngày ở phải >= 1!'}]}
                            >
                                <InputNumber
                                    placeholder="Nhập số ngày ở"
                                    min={1}
                                    max={31}
                                    style={{width: '100%'}}
                                    onChange={(value) => {
                                        const selectedContractId = form.getFieldValue('contractId');
                                        const selectedContract = contracts.find((contract) => contract.id === selectedContractId);

                                        if (selectedContract) {
                                            if (!value) {
                                                value = 30; // Nếu không nhập số ngày ở thì mặc định là 30 ngày
                                            }
                                            const roomPrice = selectedContract.room.price;
                                            // Tính tiền phòng theo số ngày ở
                                            const calculatedRoomAmount = Math.round((roomPrice * value) / 30);
                                            // Cập nhật giá trị tiền phòng
                                            form.setFieldValue('roomAmount', calculatedRoomAmount);
                                        }
                                    }}
                                />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>

                <Form.Item
                    label="Tiền phòng"
                    name="roomAmount"
                    rules={[{required: true, message: 'Tiền phòng phải >= 0!'}]}
                >
                    <CurrencyInput placeholder="Nhập tiền phòng"/>
                </Form.Item>

                <Form.List name="services">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map(({key, name, fieldKey, ...restField}) => {
                                // Lấy danh sách các dịch vụ đã được chọn
                                const selectedServiceIds = form
                                    .getFieldValue('services')
                                    ?.filter((_, index) => index !== name)
                                    .map((service) => service?.id) || [];

                                return (
                                    <Space key={key} style={{display: 'flex', marginBottom: 8}} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'id']}
                                            fieldKey={[fieldKey, 'id']}
                                            rules={[{required: true, message: 'Vui lòng chọn dịch vụ!'}]}
                                        >
                                            <Select
                                                placeholder="Chọn dịch vụ"
                                                onChange={(value) => {
                                                    const selectedService = services.find((service) => service.id === value);
                                                    if (selectedService) {
                                                        // Cập nhật các giá trị liên quan trong form
                                                        const updatedServices = form.getFieldValue('services').map((service, index) =>
                                                            index === name
                                                                ? {
                                                                    ...service,
                                                                    id: selectedService.id,
                                                                    unitPrice: selectedService.unitPrice
                                                                }
                                                                : service
                                                        );

                                                        form.setFieldsValue({
                                                            services: updatedServices,
                                                        });

                                                        // Tính tổng phí dịch vụ
                                                        calculateTotalServiceFee(updatedServices);
                                                    }
                                                }}
                                            >
                                                {services
                                                    .filter((service) => !selectedServiceIds.includes(service.id)) // Loại bỏ các dịch vụ đã chọn
                                                    .map((service) => (
                                                        <Select.Option key={service.id} value={service.id}>
                                                            {service.name}
                                                        </Select.Option>
                                                    ))}
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'unitPrice']}
                                            fieldKey={[fieldKey, 'unitPrice']}
                                            rules={[{required: true, message: 'Nhập đơn giá!'}]}
                                        >
                                            <CurrencyInput placeholder="Đơn giá" disabled/>
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                const updatedServices = form
                                                    .getFieldValue('services')
                                                    .filter((_, index) => index !== name);
                                                form.setFieldsValue({services: updatedServices});

                                                // Tính lại tổng phí dịch vụ
                                                calculateTotalServiceFee(updatedServices);

                                                remove(name);
                                            }}
                                        />
                                    </Space>
                                );
                            })}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                    Thêm dịch vụ
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>


                <Form.Item
                    label="Tổng phí dịch vụ"
                    name="totalServiceFee"
                >
                    <CurrencyInput placeholder="Tổng phí dịch vụ"/>
                </Form.Item>

                <Form.Item
                    label="Phí khác"
                    name="otherFee"
                >
                    <CurrencyInput placeholder="Phí khác"
                                   allowNegative={true} // Cho phép giá trị âm
                    />
                </Form.Item>

                <Form.Item label="Mô tả phí" name="otherFeeNote">
                    <Input placeholder="Mô tả phí"/>
                </Form.Item>

                {/* Tính tổng số tiền */}
                <Form.Item
                    label="Tổng tiền"
                    name="totalAmount"
                >
                    <CurrencyInput placeholder="Tổng tiền" disabled/>
                </Form.Item>


                <Form.Item
                    label="Chọn ngày"
                    name="dateRange"
                    rules={[{required: true, message: "Vui lòng chọn khoảng ngày!"}]}
                >
                    <RangePicker
                        placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                        format="YYYY-MM-DD"
                        style={{width: "100%"}}
                    />
                </Form.Item>

                <Form.Item label="Ghi chú" name="note">
                    <Input.TextArea placeholder="Nhập ghi chú"/>
                </Form.Item>

                <Form.Item label="Ghi chú của quản trị viên" name="adminNote">
                    <Input.TextArea placeholder="Nhập ghi chú của quản trị viên"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default InvoiceForm;
