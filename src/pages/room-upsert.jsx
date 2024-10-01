import {useEffect, useState} from "react";
import {Form} from "antd";
import {Link, redirect, useLoaderData, useParams} from "react-router-dom";
import Button from "react-bootstrap-button-loader";
import RoomServices from "../services/RoomServices.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

export async function loader({params}) {
    let room = await RoomServices.getRoom(params.id);
    room = room.data;
    return {room};
}

export default function RoomUpsert({isAdd = true}) {
    const upsertTitle = isAdd ? 'Thêm mới' : 'Chỉnh sửa';
    useEffect(() => {
        document.title = upsertTitle + ' phòng';
    })
    const status = {
        available: {
            value: "AVAILABLE",
            label: "Còn phòng"
        },
        rented: {
            value: "RENTED",
            label: "Đang cho thuê"
        },
        maintenance: {
            value: "MAINTENANCE",
            label: "Đang bảo trì"
        }
    }


    const [isDone, setIsDone] = useState(true);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const id = isAdd ? null : useParams().id;
    const onFinish = async (values) => {
        setIsDone(false);
        console.log(values);
        const data = {
            ...values,
            branchId: 1
        }
        try {
            await RoomServices.saveOrUpdateRoom(id, data);
            toast.success(`${upsertTitle} phòng thành công`);
            navigate('/rooms');
        } catch (e) {
            console.log(e);
            toast.error(e.response.data['message']);
        }
        setIsDone(true);
    };

    const {room} = useLoaderData();

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-baseline justify-content-between">
                    <h1 className="h2">Phòng trọ</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9 col-xxl-7">
                        <Form onFinish={onFinish} form={form}>
                            <div className="card border-0 py-6 px-md-6">
                                <div className="card-body">
                                    <h2 className="text-center mb-0">{upsertTitle}</h2>
                                    <p className="text-secondary text-center">
                                        {upsertTitle} phòng
                                    </p>
                                    <div className="mb-3">
                                        <div className="row">
                                            <Form.Item className={"col-md"}
                                                       name="name"
                                                       rules={[
                                                           {
                                                               required: true,
                                                               message: 'Vui lòng nhập tên phòng!',
                                                           }
                                                       ]}>
                                                <div className="col-md">
                                                    <label htmlFor="projectName" className="form-label">
                                                        Tên phòng
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="roomName"
                                                        placeholder="Nhập tên phòng"
                                                        required=""
                                                        defaultValue={room?.name}
                                                    />
                                                </div>
                                            </Form.Item>

                                            <Form.Item className={"col-md"}
                                                       name="price"
                                                       rules={[
                                                           {
                                                               required: true,
                                                               message: 'Vui lòng nhập giá thuê!',
                                                           }
                                                       ]}>
                                                <div className="col-md">
                                                    <label htmlFor="price" className="form-label">
                                                        Giá phòng
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="price"
                                                        placeholder="Nhập giá phòng"
                                                        required=""
                                                        defaultValue={room?.price}
                                                    />
                                                </div>
                                            </Form.Item>
                                        </div>
                                        {" "}
                                        {/* / .row */}
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <Form.Item className={"col-md"}
                                                       name="capacity"
                                                       rules={[
                                                           {
                                                               required: true,
                                                               message: 'Vui lòng nhập số người ở!',
                                                           }
                                                       ]}>
                                                <div className="col-md">
                                                    <label htmlFor="capacity" className="form-label">
                                                        Sức chứa
                                                    </label>
                                                    <div className="input-group">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="capacity"
                                                            placeholder="Số lượng người ở tối đa"
                                                            defaultValue={room?.capacity}
                                                        />
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Vui lòng nhập số lượng người ở tối đa
                                                    </div>
                                                </div>
                                            </Form.Item>
                                            <Form.Item className={"col-md"}
                                                       name="status"
                                                       rules={[
                                                           {
                                                               required: true,
                                                               message: 'Vui lòng chọn trạng thái!',
                                                           }
                                                       ]}>
                                                <div className="col-md">
                                                    <label htmlFor="status" className="form-label">
                                                        Trạng thái
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="status"
                                                        required=""
                                                        autoComplete="off"
                                                        data-select='{
                                                                  "placeholder": "Chọn trạng thái"
                                                              }'
                                                        data-option-template='<span class="d-flex align-items-center py-2"><span class="text-truncate ms-2">[[text]]</span></span>'
                                                        data-item-template='<span class="d-flex align-items-center"><span class="text-truncate ms-2">[[text]]</span></span>'
                                                    >
                                                        <option label="Trạng thái phòng"/>
                                                        {Object.keys(status).map((key) => {
                                                            return (
                                                                <option
                                                                    defaultChecked={room?.status === status[key].value}
                                                                    value={status[key].value}>{status[key].label}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <Form.Item
                                        name="description"
                                    >
                                        <div className="row">
                                            <div className="col">
                                                <label className="form-label">Mô tả</label>
                                                <div
                                                    data-quill='{"placeholder" : "Chi tiết về phòng"}'
                                                    className="mb-3 h-150px"
                                                />
                                            </div>
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <Link to="/rooms" className="btn btn-light">
                                            Hủy
                                        </Link>
                                        <Button
                                            loading={!isDone}
                                            type="primary"
                                            className="btn btn-primary"
                                            htmlType="submit"
                                        >
                                            Xác nhận
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}