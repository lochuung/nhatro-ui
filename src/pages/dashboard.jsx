import React from 'react';
import { Card, Row, Col, Statistic, Spin, Alert } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import DashboardServices from '../services/DashboardServices';
import { DollarOutlined, HomeOutlined, FileOutlined } from '@ant-design/icons';

// Add currency formatter function
const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value);
};

// Add month formatter function
const formatMonth = (month) => {
    const monthMap = {
        'January': '01', 'February': '02', 'March': '03', 'April': '04',
        'May': '05', 'June': '06', 'July': '07', 'August': '08',
        'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };
    return monthMap[month] || month;
};

export default function Dashboard() {
    const { data: incomeData, isLoading: incomeLoading, error: incomeError } = useQuery({
        queryKey: ['monthlyIncome'],
        queryFn: () => DashboardServices.getMonthlyIncome()
    });
    
    const { data: occupancyData, isLoading: occupancyLoading, error: occupancyError } = useQuery({
        queryKey: ['roomOccupancy'],
        queryFn: () => DashboardServices.getRoomOccupancy()
    });
    
    const { data: statsData, isLoading: statsLoading, error: statsError } = useQuery({
        queryKey: ['dashboardStats'],
        queryFn: () => DashboardServices.getDashboardStats()
    });

    const { data: invoiceData, isLoading: invoiceLoading, error: invoiceError } = useQuery({
        queryKey: ['invoiceStats'],
        queryFn: () => DashboardServices.getInvoiceStats()
    });

    // Format the income data - handle BigDecimal conversion and month format
    const formattedIncomeData = React.useMemo(() => {
        if (!incomeData?.data) return [];
        return incomeData.data.map(item => ({
            ...item,
            month: formatMonth(item.month),
            income: parseFloat(item.income) // Convert BigDecimal string to number
        }));
    }, [incomeData]);

    // Format occupancy data with month numbers
    const formattedOccupancyData = React.useMemo(() => {
        if (!occupancyData?.data) return [];
        return occupancyData.data.map(item => ({
            ...item,
            month: formatMonth(item.month)
        }));
    }, [occupancyData]);

    // Error handling
    const errors = [incomeError, occupancyError, statsError, invoiceError].filter(Boolean);
    if (errors.length > 0) {
        return (
            <Alert
                message="Lỗi"
                description={errors.map(error => error.message).join(', ')}
                type="error"
                showIcon
            />
        );
    }

    return (
        <div className="container-fluid">
            <h2 className="mb-4">Tổng Quan</h2>

            <Row gutter={[16, 16]} className="mb-4">
                <Col xs={24} sm={8}>
                    <Card>
                        <Spin spinning={statsLoading}>
                            <Statistic 
                                title="Tổng Doanh Thu" 
                                value={parseFloat(statsData?.data?.totalRevenue) || 0}
                                prefix={<DollarOutlined />}
                                formatter={value => formatCurrency(value)}
                            />
                        </Spin>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <Spin spinning={statsLoading}>
                            <Statistic 
                                title="Phòng Đã Thuê" 
                                value={statsData?.data?.occupiedRooms || 0}
                                suffix={` / ${statsData?.data?.totalRooms || 0}`}
                                prefix={<HomeOutlined />}
                            />
                        </Spin>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <Spin spinning={invoiceLoading}>
                            <Statistic 
                                title="Hóa Đơn Chưa Thanh Toán" 
                                value={invoiceData?.data?.pendingCount || 0}
                                prefix={<FileOutlined />}
                            />
                        </Spin>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card title="Doanh Thu Theo Tháng">
                        <Spin spinning={incomeLoading}>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={formattedIncomeData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis 
                                        tickFormatter={(value) => formatCurrency(value)}
                                    />
                                    <Tooltip 
                                        formatter={(value) => formatCurrency(value)}
                                        labelFormatter={(label) => `Tháng ${label}`}
                                    />
                                    <Legend />
                                    <Line 
                                        type="monotone" 
                                        dataKey="income" 
                                        name="Doanh Thu"
                                        stroke="#8884d8" 
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </Spin>
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card title="Tình Trạng Phòng">
                        <Spin spinning={occupancyLoading}>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={formattedOccupancyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip labelFormatter={(label) => `Tháng ${label}`} />
                                    <Legend />
                                    <Bar dataKey="occupied" name="Đã Thuê" fill="#8884d8" />
                                    <Bar dataKey="available" name="Còn Trống" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}