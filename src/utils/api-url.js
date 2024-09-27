

export default class ApiUrl {
    static baseUrl = import.meta.env.VITE_API_URL;
    static login = `${ApiUrl.baseUrl}/api/v1/auth/login`;
}