import React from "react";
import {Modal, Button, Table, Descriptions, Image} from "antd";
import ApiUrl from "../../utils/api-url.js";

const ModalViewCustomer = ({
                               visible,
                               onClose,
                               customerData,
                               cccdImages
                           }) => {
    return (
        <Modal
            visible={visible}
            onCancel={onClose}
            footer={[
                <Button key="close" onClick={onClose}>
                    Đóng
                </Button>
            ]}
            title="Thông tin khách hàng"
            width={800}
        >
            <Descriptions bordered column={2} size="small">
                <Descriptions.Item label="Tên">
                    {customerData?.name} ({customerData?.name2})
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                    {customerData?.phone}
                </Descriptions.Item>
                <Descriptions.Item label="Email">{customerData?.email}</Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">
                    {customerData?.birthday}
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ">{customerData?.address}</Descriptions.Item>
                <Descriptions.Item label="Mô tả">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: customerData?.description || "<p>Không có mô tả</p>",
                        }}
                    />
                </Descriptions.Item>
                <Descriptions.Item label="Trạng thái">
                    {customerData?.enabled ? "Hoạt động" : "Không hoạt động"}
                </Descriptions.Item>
                <Descriptions.Item label="Số CMND/CCCD">
                    {customerData?.idNumber}
                </Descriptions.Item>
                <Descriptions.Item label="Nơi cấp">{customerData?.idPlace}</Descriptions.Item>
                <Descriptions.Item label="Ngày cấp">{customerData?.idDate}</Descriptions.Item>
                <Descriptions.Item label="Tên ngân hàng">
                    {customerData?.bankName}
                </Descriptions.Item>
                <Descriptions.Item label="Số tài khoản">
                    {customerData?.bankNumber}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày tạo">
                    {new Date(customerData?.createdDate).toLocaleString()}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày cập nhật">
                    {new Date(customerData?.updatedDate).toLocaleString()}
                </Descriptions.Item>
            </Descriptions>

            <div style={{marginTop: "20px"}}>
                <h3>Hình ảnh CCCD</h3>
                <Table
                    dataSource={cccdImages}
                    pagination={false}
                    rowKey={(record) => record.id}
                >
                    <Table.Column
                        title="Hình ảnh"
                        dataIndex="imageKey"
                        key="imageKey"
                        render={(image) => (
                            <Image
                                src={`${ApiUrl.fileUrl}/images/${image}`}
                                alt="CCCD Image"
                                style={{maxWidth: "200px", maxHeight: "120px"}}
                            />
                        )}
                    />
                    <Table.Column title="Ghi chú" dataIndex="note" key="note"/>
                </Table>
            </div>
        </Modal>
    );
};

export default ModalViewCustomer;
