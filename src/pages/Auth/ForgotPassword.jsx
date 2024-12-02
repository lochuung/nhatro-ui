import { useState, useEffect } from 'react';
import { Form } from 'antd';
import Button from 'react-bootstrap-button-loader';
import { toast } from 'react-toastify';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import AuthServices from '../../services/AuthServices';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ForgotPassword() {
    useEffect(() => {
        document.title = 'Quên mật khẩu';
    }, []);

    const [form] = Form.useForm();
    const [isDone, setIsDone] = useState(true);
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    if (localStorage.getItem('accessToken')) {
        return <Navigate to="/" />;
    }

    const handleSubmitEmail = async (values) => {
        setIsDone(false);
        try {
            await AuthServices.forgotPassword(values.email);
            setEmail(values.email);
            setStep(2);
            toast.success('Mã xác thực đã được gửi đến email của bạn!');
        } catch (error) {
        }
        setIsDone(true);
    };

    const handleVerifyCode = async (values) => {
        setIsDone(false);
        try {
            await AuthServices.verifyCode(email, values.code);
            setCode(values.code);
            setStep(3);
            toast.success('Xác thực thành công!');
        } catch (error) {
        }
        setIsDone(true);
    };

    const nagivate = useNavigate();

    const handleResetPassword = async (values) => {
        setIsDone(false);
        try {
            await AuthServices.resetPassword(email, code, values.newPassword);
            toast.success('Đặt lại mật khẩu thành công!');
            nagivate('/login');
        } catch (error) {
        }
        setIsDone(true);
    };

    return (
        <main className="container">
            <div className="row align-items-center justify-content-center vh-100">
                <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-6">
                    <h1 className="mb-2 text-center">Quên mật khẩu</h1>
                    <p className="text-secondary text-center mb-4">
                        {step === 1 && 'Nhập email của bạn để lấy lại mật khẩu'}
                        {step === 2 && 'Nhập mã xác thực đã được gửi đến email'}
                        {step === 3 && 'Nhập mật khẩu mới của bạn'}
                    </p>

                    {step === 1 && (
                        <Form onFinish={handleSubmitEmail} form={form}>
                            <Form.Item name="email" rules={[
                                { required: true, message: 'Vui lòng nhập email!' },
                                { type: 'email', message: 'Email không hợp lệ!' }
                            ]}>
                                <input type="email" className="form-control" placeholder="Nhập email" />
                            </Form.Item>
                            <Button loading={!isDone} className="btn w-100 btn-primary mt-3" type="submit">
                                Tiếp tục
                            </Button>
                        </Form>
                    )}

                    {step === 2 && (
                        <Form onFinish={handleVerifyCode} form={form}>
                            <Form.Item name="code" rules={[
                                { required: true, message: 'Vui lòng nhập mã xác thực!' }
                            ]}>
                                <input type="text" className="form-control" placeholder="Nhập mã xác thực" />
                            </Form.Item>
                            <Button loading={!isDone} className="btn w-100 btn-primary mt-3" type="submit">
                                Xác thực
                            </Button>
                        </Form>
                    )}

                    {step === 3 && (
                        <Form onFinish={handleResetPassword} form={form}>
                            <Form.Item name="newPassword" rules={[
                                { required: true, message: 'Vui lòng nhập mật khẩu mới!' },
                                { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự!' }
                            ]}>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        placeholder="Nhập mật khẩu mới"
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="input-group-text px-4 cursor-pointer"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </Form.Item>
                            <Button loading={!isDone} className="btn w-100 btn-primary mt-3" type="submit">
                                Đặt lại mật khẩu
                            </Button>
                        </Form>
                    )}

                    <div className="text-center mt-3">
                        <Link to="/login" className="text-primary">Quay lại đăng nhập</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
