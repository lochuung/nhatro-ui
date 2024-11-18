import React from "react";
import {Modal, Typography, Table, Space, Divider} from "antd";

const {Title, Text} = Typography;

const ModalViewInvoice = ({visible, onCancel, invoice}) => {
    const serviceColumns = [
        {
            title: "Dịch vụ",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Đơn giá",
            dataIndex: "unitPrice",
            key: "unitPrice",
            render: (value) => `${value.toLocaleString()} ₫`,
        },
    ];

    return (
        <Modal
            title={`Hóa đơn #${invoice?.id || ""}`}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={800}
        >
            {/* Thông tin hợp đồng */}
            <Space direction="vertical" style={{width: "100%"}}>
                <Title level={4}>Thông tin hợp đồng</Title>
                <Text>
                    <strong>Phòng:</strong> {invoice?.contract?.room?.name} (
                    {invoice?.contract?.room?.code})
                </Text>
                <Text>
                    <strong>Người thuê:</strong> {invoice?.contract?.owner?.name} -{" "}
                    {invoice?.contract?.owner?.phone}
                </Text>
                <Text>
                    <strong>Chi nhánh:</strong> {invoice?.contract?.room?.branch?.name}
                </Text>
                <Text>
                    <strong>Địa chỉ:</strong>{" "}
                    {invoice?.contract?.room?.branch?.address}
                </Text>
            </Space>

            <Divider/>

            {/* Chi tiết hóa đơn */}
            <Space direction="vertical" style={{width: "100%"}}>
                <Title level={4}>Chi tiết hóa đơn</Title>
                <Text>
                    <strong>Tiền phòng:</strong>{" "}
                    {invoice?.roomAmount?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Tiền điện:</strong> {invoice?.electricityAmount?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Tiền nước:</strong> {invoice?.waterAmount?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Tổng phí dịch vụ:</strong> {invoice?.totalServiceFee?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Phí khác:</strong> {invoice?.otherFee?.toLocaleString()} ₫ (
                    {invoice?.otherFeeNote})
                </Text>
                <Text>
                    <strong>Giảm giá:</strong> {invoice?.discount?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Đã thanh toán:</strong> {invoice?.paidAmount?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Tổng tiền:</strong> {invoice?.totalAmount?.toLocaleString()} ₫
                </Text>
                <Text>
                    <strong>Bằng chữ:</strong> {invoice?.totalAmountInWords}
                </Text>
            </Space>

            <Divider/>

            {/* Dịch vụ */}
            <Title level={4}>Chi tiết dịch vụ</Title>
            <Table
                dataSource={invoice?.serviceFees || []}
                columns={serviceColumns}
                pagination={false}
                rowKey="id"
            />

            <Divider/>

            {/* Ghi chú */}
            <Space direction="vertical" style={{width: "100%"}}>
                <Title level={4}>Ghi chú</Title>
                <Text>
                    <strong>Ghi chú của admin:</strong> {invoice?.adminNote || "Không có"}
                </Text>
                <Text>
                    <strong>Ghi chú:</strong> {invoice?.note || "Không có"}
                </Text>
            </Space>
        </Modal>
    );
};

export default ModalViewInvoice;
