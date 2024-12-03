import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Button, Form, Input, Spin, message} from "antd"; // Add message import
import React, {useState} from "react";
import useSettingQuery from "../hooks/useSettingQuery.js";
import SettingServices from "../services/SettingServices.js";
import PageHeader from "../components/PageHeader.jsx";
import TableControls from "../components/TableControls.jsx";

const Settings = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useSettingQuery();
    const [isAdding, setIsAdding] = useState(false);
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedSetting, setSelectedSetting] = useState(null);

    const settings = data?.settings || [];

    const handleAddSetting = () => {
        setIsEditing(false);  // Close edit form if open
        setSelectedSetting(null);
        form.resetFields();
        setIsAdding(true);
    };

    const updateMutation = useMutation({
        mutationFn: (values) => {
            return SettingServices.updateSetting(values);
        },
        onSuccess: () => {
            queryClient.invalidateQueries("settings");
            setIsAdding(false);
            setIsEditing(false);
            form.resetFields();
            message.success(isEditing ? 'Cập nhật cài đặt thành công!' : 'Thêm cài đặt thành công!');
        },
        onError: (error) => {
            message.error('Có lỗi xảy ra: ' + error.message);
        }
    });

    const handleSaveSetting = async () => {
        try {
            const values = await form.validateFields();
            updateMutation.mutate(values);
        } catch (error) {
            message.error('Vui lòng kiểm tra lại thông tin!');
        }
    };

    const handleRowClick = (setting) => {
        setIsAdding(false);  // Close add form if open
        form.setFieldsValue({ 
            id: setting.id,
            key: setting.key, 
            value: setting.value 
        });
        setSelectedSetting(setting);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsAdding(false);
        setSelectedSetting(null);
        form.resetFields();
    };

    const title = "Cài đặt";

    const settingsArray = Object.values(settings);

    return (
        <div className="container-fluid">
            <PageHeader
                title="Danh sách cài đặt"
            />

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100">
                        <TableControls
                            title="Cài đặt"
                        />
                        <div className="card-body">
                            {isLoading ? (
                                <div className="text-center my-4">
                                    <Spin size="large" />
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
                                <>
                                    <table className="table align-middle table-hover table-nowrap mb-0">
                                        <thead className="thead-light">
                                        <tr>
                                            <th>Key</th>
                                            <th>Value</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {settingsArray.map((setting) => (
                                            <tr key={setting.id} onClick={() => handleRowClick(setting)}
                                                style={{cursor: "pointer"}}>
                                                <td>{setting.key}</td>
                                                <td>{setting.value}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-end mt-4">
                                        <Button 
                                            type="primary" 
                                            onClick={handleAddSetting}
                                            disabled={isLoading || updateMutation.isLoading}
                                        >
                                            {isEditing ? 'Thêm mới' : 'Cập nhật cài đặt'}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                        {(isAdding || isEditing) && (
                            <div className="card-footer border-0">
                                <Form form={form} layout="inline" onFinish={handleSaveSetting}>
                                    <Form.Item name="id" hidden>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="key" rules={[{required: true, message: "Vui lòng nhập key"}]}>
                                        <Input placeholder="Key"/>
                                    </Form.Item>
                                    <Form.Item name="value" rules={[{required: true, message: "Vui lòng nhập value"}]}>
                                        <Input placeholder="Value"/>
                                    </Form.Item>
                                    <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        loading={updateMutation.isLoading}
                                        disabled={isLoading}
                                    >
                                        {isEditing ? 'Cập nhật' : 'Lưu'}
                                    </Button>
                                    <Button 
                                        onClick={handleCancel} 
                                        className="ms-2"
                                        disabled={updateMutation.isLoading || isLoading}
                                    >
                                        Hủy
                                    </Button>
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