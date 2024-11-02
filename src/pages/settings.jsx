import {useMutation, useQueryClient} from "@tanstack/react-query";
import { Spin, Button, Input, Form } from "antd";
import RoomsTable from "../components/room/RoomTable.jsx";
import React, { useState } from "react";
import useSettingQuery from "../hooks/useSettingQuery.js";
import SettingServices from "../services/SettingServices.js";

const Settings = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useSettingQuery();
    const [isAdding, setIsAdding] = useState(false);
    const [form] = Form.useForm();

    const settings = data?.settings || [];

    const handleAddSetting = () => {
        setIsAdding(true);
    };

    const updateMutation = useMutation({
        mutationFn: (values) => {
            return SettingServices.updateSetting(values);
        },
        onSuccess: () => {
            queryClient.invalidateQueries("settings");
            setIsAdding(false);
        }
    })

    const handleSaveSetting = async (values) => {
        try {
            const values = await form.validateFields();
            updateMutation.mutate(values);
        } catch (error) {
            console.log(error);
        }
    };

    const title = "Cài đặt";

    const settingsArray = Object.values(settings);

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
                <h1 className="h2">{title}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card border-0">
                        <div className="card-header border-0">
                            <h2 className="h4">Cài đặt</h2>
                        </div>
                        <div className="card-body">
                            {isLoading ? (
                                <div className="text-center my-4">
                                    <Spin/>
                                </div>
                            ) : isError ? (
                                <div className="text-center my-4">
                                    <h3>Lỗi khi tải cài đặt</h3>
                                </div>
                            ) : settings.length === 0 ? (
                                <div className="text-center my-4">
                                    <h3>Không tìm thấy cài đặt nào</h3>
                                </div>
                            ) : (
                                <table className="table align-middle table-hover table-nowrap mb-0">
                                    <thead className="thead-light">
                                    <tr>
                                        <th>Key</th>
                                        <th>Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {settingsArray.map((setting) => (
                                        <tr key={setting.key}>
                                            <td>{setting.key}</td>
                                            <td>{setting.value}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                            <div className="d-flex justify-content-end mt-4">
                                <Button type="primary" onClick={handleAddSetting}>Cập nhật cài đặt</Button>
                            </div>
                        </div>
                        {isAdding && (
                            <div className="card-footer border-0">
                                <Form form={form} layout="inline" onFinish={handleSaveSetting}>
                                <Form.Item name="key" rules={[{required: true, message: "Vui lòng nhập key"}]}>
                                        <Input placeholder="Key"/>
                                    </Form.Item>
                                    <Form.Item name="value" rules={[{required: true, message: "Vui lòng nhập value"}]}>
                                        <Input placeholder="Value"/>
                                    </Form.Item>
                                    <Button type="primary" htmlType="submit">Lưu</Button>
                                    <Button onClick={() => setIsAdding(false)} className="ms-2">Hủy</Button>
                                </Form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;