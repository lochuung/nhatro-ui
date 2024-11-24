import React from "react";
import {Descriptions, Divider, List, Modal} from "antd";
import dayjs from "dayjs";

const ModalViewContract = ({visible, onClose, contract}) => {
    if (!contract) return null;

    const {room, owner, price, deposit, status, note, numberOfPeople, members, checkinElectricNumber, checkinWaterNumber} = contract;
    const branch = room?.branch;

    console.log(contract);

    return (
        <Modal
            title="Thông tin hợp đồng"
            visible={visible}
            onCancel={onClose}
            footer={null}
            width={800}
        >
            <Descriptions bordered column={2} size="small">
                {/* Thông tin hợp đồng */}
                <Descriptions.Item label="ID Hợp đồng">{contract?.id}</Descriptions.Item>
                <Descriptions.Item label="Ngày tạo">
                    {dayjs(contract?.createdDate).format("DD/MM/YYYY")}
                </Descriptions.Item>
                <Descriptions.Item label="Trạng thái">
                    {status === "OPENING" ? "Đang mở" : "Đã đóng"}
                </Descriptions.Item>
                <Descriptions.Item label="Số người ở">{numberOfPeople}</Descriptions.Item>
                <Descriptions.Item label="Tiền thuê phòng">
                    {price?.toLocaleString()} ₫
                </Descriptions.Item>
                <Descriptions.Item label="Tiền cọc">
                    {deposit?.toLocaleString()} ₫
                </Descriptions.Item>
                <Descriptions.Item label="Chỉ số điện ban đầu">{checkinElectricNumber || "Không có"}</Descriptions.Item>
                <Descriptions.Item label="Chỉ số nước ban đầu">{checkinWaterNumber || "Không có"}</Descriptions.Item>
                <Descriptions.Item label="Ghi chú">{note || "Không có"}</Descriptions.Item>
            </Descriptions>

            <Divider/>

            {/* Thông tin phòng */}
            <Descriptions bordered column={2} size="small" title="Thông tin phòng">
                <Descriptions.Item label="Tên phòng">{room?.name}</Descriptions.Item>
                <Descriptions.Item label="Mã phòng">{room?.code}</Descriptions.Item>
                <Descriptions.Item label="Sức chứa">{room?.capacity} người</Descriptions.Item>
                <Descriptions.Item label="Giá phòng">
                    {room?.price?.toLocaleString()} ₫
                </Descriptions.Item>
                <Descriptions.Item label="Mô tả">
                    <div dangerouslySetInnerHTML={{__html: room?.description}}/>
                </Descriptions.Item>
                <Descriptions.Item label="Chi nhánh">{branch?.name}</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ chi nhánh">
                    {branch?.address}
                </Descriptions.Item>
                <Descriptions.Item label="Người cho thuê">{branch?.lessorName}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{branch?.lessorPhone}</Descriptions.Item>
            </Descriptions>

            <Divider/>

            {/* Thông tin chủ hợp đồng */}
            <Descriptions bordered column={2} size="small" title="Thông tin chủ hợp đồng">
                <Descriptions.Item label="Họ và tên">{owner?.name}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{owner?.phone}</Descriptions.Item>
                <Descriptions.Item label="Email">{owner?.email ?? 'Chưa thêm email'}</Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">
                    {owner?.birthday ? owner?.birthday : "Không có ngày sinh"}
                </Descriptions.Item>
                <Descriptions.Item label="CMND/CCCD">{owner?.idNumber}</Descriptions.Item>
                <Descriptions.Item label="Nơi cấp">{owner?.idPlace}</Descriptions.Item>
                <Descriptions.Item label="Ngày cấp">
                    {owner?.idDate}
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ">{owner?.address}</Descriptions.Item>
            </Descriptions>

            {/* Thông tin thành viên */}
            <List
                bordered
                size="small"
                header={<strong>Danh sách thành viên</strong>}
                dataSource={members || []}
                renderItem={(member, index) => (
                    <List.Item key={member?.id || index}>
                        <Descriptions size="small" bordered column={2}>
                            <Descriptions.Item label={`Thành viên ${index + 1}`}>
                                <strong>{member?.name || "Không có tên"}</strong>
                            </Descriptions.Item>
                            <Descriptions.Item label="Số điện thoại">
                                {member?.phone || "Không có số điện thoại"}
                            </Descriptions.Item>
                            <Descriptions.Item label="Email">
                                {member?.email || "Không có email"}
                            </Descriptions.Item>
                            <Descriptions.Item label="Ngày sinh">
                                {member?.birthday || "Không có ngày sinh"}
                            </Descriptions.Item>
                            <Descriptions.Item label="CMND/CCCD">
                                {member?.idNumber || "Không có CMND/CCCD"}
                            </Descriptions.Item>
                            <Descriptions.Item label="Địa chỉ">
                                {member?.address || "Không có địa chỉ"}
                            </Descriptions.Item>
                        </Descriptions>
                    </List.Item>
                )}
                style={{
                    maxHeight: "300px", // Chiều cao tối đa của danh sách
                    overflowY: "auto", // Thêm thanh cuộn dọc
                    padding: "8px", // Đệm nội dung
                    border: "1px solid #f0f0f0", // Viền gọn gàng
                    borderRadius: "4px",
                }}
                locale={{
                    emptyText: "Không có thành viên nào trong hợp đồng này.",
                }}
            />

        </Modal>
    );
};

export default ModalViewContract;
