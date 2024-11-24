import React, {useEffect, useState} from 'react';
import {Button, DatePicker, InputNumber, Modal, Table} from 'antd';
import dayjs from "../../utils/locale-custom.js";
import SettingServices from "../../services/SettingServices.js";
import {SettingConstants} from "../../constant/SettingConstants.js";
import ContractServices from "../../services/ContractServices.js";

const ModalGenerateInvoices = ({visible, onCancel, onSubmit}) => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('MM/YYYY'));
    const [defaultStartDay, setDefaultStartDay] = useState(1);
    const [contracts, setContracts] = useState([]);

    // Lấy thông tin cài đặt mặc định và danh sách hợp đồng
    useEffect(() => {
        SettingServices.getSettings().then((response) => {
            const defaultDay = response.data[SettingConstants.START_DAY_OF_INVOICE];
            setDefaultStartDay(defaultDay?.value || 1);
        });

        ContractServices.getContractsAvailable().then((res) => {
            // Thêm các trường `newElectricityIndex` và `newWaterIndex` mặc định là null
            const updatedContracts = res.data.map((contract) => ({
                ...contract,
                newElectricityIndex: null,
                newWaterIndex: null,
            }));
            setContracts(updatedContracts);
        });
    }, []);

    // Xử lý khi nhấn nút "Sinh hóa đơn"
    const handleGenerate = () => {
        if (selectedMonth && defaultStartDay) {
            // Lọc các hợp đồng có đủ chỉ số điện và nước
            const generateContractRequest = contracts
                .filter(
                    (contract) =>
                        contract.newElectricityIndex !== null && contract.newWaterIndex !== null
                )
                .map((contract) => ({
                    contractId: contract.id,
                    newElectricityIndex: contract.newElectricityIndex,
                    newWaterIndex: contract.newWaterIndex,
                }));

            onSubmit({
                monthYear: selectedMonth,
                startDay: defaultStartDay,
                generateContractRequest,
            });
        }
    };

    // Hàm cập nhật chỉ số điện/nước mới cho hợp đồng
    const handleUpdateIndex = (id, field, value) => {
        setContracts((prevContracts) =>
            prevContracts.map((contract) =>
                contract.id === id ? {...contract, [field]: value} : contract
            )
        );
    };

    return (
        <Modal
            title="Sinh hóa đơn tiền nhà"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Hủy
                </Button>,
                <Button key="generate" type="primary" onClick={handleGenerate}>
                    Sinh hóa đơn
                </Button>,
            ]}
            width={800}
        >
            <div>
                <p>Chọn tháng để sinh hóa đơn:</p>
                <DatePicker
                    picker="month"
                    placeholder="Chọn tháng"
                    defaultValue={dayjs()} // Mặc định là tháng hiện tại
                    onChange={(date) => {
                        const selectedMonth = date ? date.format('MM/YYYY') : dayjs().format('MM/YYYY');
                        setSelectedMonth(selectedMonth); // Lấy giá trị hoặc mặc định là tháng hiện tại
                    }}
                    format="MM/YYYY" // Định dạng hiển thị
                    style={{width: '100%'}}
                />
            </div>
            <div>
                <p>Ngày bắt đầu của hóa đơn:</p>
                <InputNumber
                    min={1}
                    max={31}
                    defaultValue={defaultStartDay}
                    onChange={(value) => {
                        setDefaultStartDay(value);
                    }}
                    style={{width: '100%'}}
                />
            </div>
            <div style={{marginTop: 20}}>
                <h3>Danh sách hợp đồng</h3>
                <Table
                    dataSource={contracts}
                    rowKey="id"
                    pagination={false}
                    bordered
                >
                    <Table.Column
                        title="ID hợp đồng"
                        dataIndex="id"
                        key="id"
                    />
                    <Table.Column
                        title="Phòng"
                        dataIndex={['room', 'name']}
                        key="roomName"
                    />
                    <Table.Column
                        title="Chỉ số điện mới"
                        key="newElectricityIndex"
                        render={(text, record) => (
                            <InputNumber
                                min={0}
                                value={record.newElectricityIndex}
                                onChange={(value) => handleUpdateIndex(record.id, 'newElectricityIndex', value)}
                                style={{width: '100%'}}
                                placeholder="Nhập chỉ số điện mới"
                            />
                        )}
                    />
                    <Table.Column
                        title="Chỉ số nước mới"
                        key="newWaterIndex"
                        render={(text, record) => (
                            <InputNumber
                                min={0}
                                value={record.newWaterIndex}
                                onChange={(value) => handleUpdateIndex(record.id, 'newWaterIndex', value)}
                                style={{width: '100%'}}
                                placeholder="Nhập chỉ số nước mới"
                            />
                        )}
                    />
                </Table>
            </div>
        </Modal>
    );
};

export default ModalGenerateInvoices;
