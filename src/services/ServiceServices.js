import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";


export default class ServiceServices {
    static getServices = (data) => {
        return api.post(`${ApiUrl.crudOtherFee}/search`, data);
    };

    static getAll() {
        return api.get(ApiUrl.crudOtherFee);
    }

    static getOtherFee = (id) => {
        return api.get(`${ApiUrl.crudOtherFee}/${id}`);
    };

    static saveOrUpdateService = (id, data) => {
        return api.post(`${ApiUrl.crudOtherFee}/upsert`, {...data, id, branchId: 1});
    };

    static deleteService = (id) => {
        return api.delete(`${ApiUrl.crudOtherFee}/${id}`);
    };
}