export default class ApiUrl {
    static baseUrl = import.meta.env.VITE_API_URL;
    static imageUrl = import.meta.env.VITE_IMAGE_URL;
    static login = `${ApiUrl.baseUrl}/api/v1/auth/login`;
    static crudRoom = `${ApiUrl.baseUrl}/api/v1/rooms`;
    static crudContract = `${ApiUrl.baseUrl}/api/v1/contracts`;
    static crudOtherFee = `${ApiUrl.baseUrl}/api/v1/service-fees`;
    static crudSetting = `${ApiUrl.baseUrl}/api/v1/settings`;
    static crudInvoice = `${ApiUrl.baseUrl}/api/v1/invoices`;
    static crudCustomer = `${ApiUrl.baseUrl}/api/v1/customers`;
    static customerImage = `${ApiUrl.baseUrl}/api/v1/customer-images`;
    static fileUrl = `${ApiUrl.imageUrl}/v1/file`;
    static forgotPassword = `${ApiUrl.baseUrl}/api/v1/auth/forgot-password`;
    static verifyCode = `${ApiUrl.baseUrl}/api/v1/auth/verify-code`;
    static resetPassword = `${ApiUrl.baseUrl}/api/v1/auth/reset-password`;
    static dashboard = {
        stats: `${ApiUrl.baseUrl}/api/v1/dashboard/stats`,
        income: `${ApiUrl.baseUrl}/api/v1/dashboard/income`,
        occupancy: `${ApiUrl.baseUrl}/api/v1/dashboard/occupancy`,
        invoices: `${ApiUrl.baseUrl}/api/v1/dashboard/invoices`
    };
}