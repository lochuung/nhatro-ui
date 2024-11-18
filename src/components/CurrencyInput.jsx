import React from 'react';
import { InputNumber } from 'antd';

const CurrencyInput = ({ placeholder, allowNegative = false, ...props }) => {
    return (
        <InputNumber
            style={{ width: '100%' }}
            placeholder={placeholder || 'Nhập số tiền'}
            formatter={(value) =>
                value !== undefined && value !== null
                    ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ₫'
                    : '0 ₫'
            }
            parser={(value) => (value ? value.replace(/\₫|,|\s/g, '') : 0)}
            min={allowNegative ? undefined : 0} // Nếu `allowNegative` là true, bỏ giới hạn tối thiểu
            defaultValue={0} // Giá trị mặc định là 0
            {...props}
        />
    );
};

export default CurrencyInput;
