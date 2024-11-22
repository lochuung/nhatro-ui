import React, {useEffect, useState} from 'react';
import {Button, DatePicker, InputNumber, Modal} from 'antd';
import dayjs from "../../utils/locale-custom.js";
import SettingServices from "../../services/SettingServices.js";
import {SettingConstants} from "../../constant/SettingConstants.js";

const ModalGenerateInvoices = ({visible, onCancel, onSubmit}) => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().format('MM/YYYY'));
    const [defaultStartDay, setDefaultStartDay] = useState(1);

    const handleGenerate = () => {
        if (selectedMonth && defaultStartDay) {
            onSubmit({monthYear: selectedMonth, startDay: defaultStartDay});
        }
    };


    useEffect(() => {
        SettingServices.getSettings().then((response) => {
                const defaultDay = response.data.find(
                    (setting) => {
                        return setting.key === SettingConstants.START_DAY_OF_INVOICE;
                    }
                )
                setDefaultStartDay(defaultDay.value);
            }
        )
    }, []);

    return (
        <Modal
            title="Sinh hóa đơn tiền nhà"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Hủy
                </Button>,
                <Button
                    key="generate"
                    type="primary"
                    onClick={handleGenerate}
                >
                    Sinh hóa đơn
                </Button>,
            ]}
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
        </Modal>
    );
};

export default ModalGenerateInvoices;

