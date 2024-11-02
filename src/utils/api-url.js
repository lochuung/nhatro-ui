export default class ApiUrl {
    static baseUrl = import.meta.env.VITE_API_URL;
    static login = `${ApiUrl.baseUrl}/api/v1/auth/login`;
    static crudRoom = `${ApiUrl.baseUrl}/api/v1/rooms`;
    static crudContract = `${ApiUrl.baseUrl}/api/v1/contracts`;
    static crudOtherFee = `${ApiUrl.baseUrl}/api/v1/service-fees`;
}