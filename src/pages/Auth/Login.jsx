import {useEffect, useState} from 'react';
import AuthServices from '../../services/AuthServices.js';
import {Form} from 'antd';
import Button from 'react-bootstrap-button-loader';
import {toast} from 'react-toastify';
import {Navigate, useNavigate} from "react-router";

export default function Login() {
    useEffect(() => {
        document.title = 'Đăng nhập';
    });
    const navigate = useNavigate();
    const [isDone, setIsDone] = useState(true);
    const [form] = Form.useForm();

    if (localStorage.getItem('accessToken')) {
        return <Navigate to="/"/>;
    }
    const onFinish = async (values) => {
        setIsDone(false);
        const email = values.email;
        const password = values.password;
        try {
            const response = await AuthServices.login(email, password);
            if (response.status === 200) {
                toast.success('Đăng nhập thành công!');
                localStorage.setItem('accessToken', response.data['access_token']);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error('Đăng nhập thất bại!');
        }
        setIsDone(true);
    };

    return (
        <>
            <main className="container">
                <div className="row align-items-center justify-content-center vh-100">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-6">
                        {/* Title */}
                        <h1 className="mb-2 text-center">Đăng Nhập</h1>
                        {/* Subtitle */}
                        <p className="text-secondary text-center">
                            Đăng nhập vào hệ thống quản lý nhà trọ
                        </p>
                        {/* Form */}
                        <Form onFinish={onFinish} form={form}>
                            <div className="row">
                                <div className="col-12">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập email!',
                                            }/* ,
                                        {
                                            type: 'email',
                                            message: 'Email không hợp lệ!'
                                        } */
                                        ]}>
                                        <div className="mb-1">
                                            {/* Label */}
                                            <label className="form-label">Địa chỉ Email</label>
                                            {/* Input */}
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nhập email"
                                            />
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="col-12">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập mật khẩu!',
                                            }
                                        ]}
                                    >
                                        <div className="mb-1">
                                            <div className="row">
                                                <div className="col">
                                                    {/* Label */}
                                                    <label className="form-label">Mật khẩu</label>
                                                </div>
                                                <div className="col-auto">
                                                    {/* Help text */}
                                                    <a
                                                        href="#"
                                                        className="form-text small text-muted link-primary"
                                                    >
                                                        Quên mật khẩu
                                                    </a>
                                                </div>
                                            </div>
                                            {" "}
                                            {/* / .row */}
                                            {/* Input */}
                                            <div className="input-group input-group-merge">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    autoComplete="off"
                                                    data-toggle-password-input=""
                                                    placeholder="Mật khẩu"
                                                />
                                                <button
                                                    type="button"
                                                    className="input-group-text px-4 text-secondary link-primary"
                                                    data-toggle-password=""
                                                />
                                            </div>
                                        </div>
                                    </Form.Item>
                                </div>
                            </div>
                            {" "}
                            <div className="row align-items-center text-center">
                                <div className="col-12">
                                    {/* Button */}
                                    <Form.Item>
                                        <Button
                                            loading={!isDone}
                                            type="primary"
                                            className="btn w-100 btn-primary mt-3 mb-2"
                                            htmlType="submit"
                                        >
                                            Đăng nhập
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                            {" "}
                            {/* / .row */}
                        </Form>
                    </div>
                </div>
                {" "}
                {/* / .row */}
            </main>
            {" "}
            {/* / main */}
        </>

    );
}