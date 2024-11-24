import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";


export default class CustomerServices {
    static getCustomers = () => {
        return api.get(ApiUrl.crudCustomer);
    }

    static search = (data) => {
        return api.post(`${ApiUrl.crudCustomer}/search`, data);
    }

    static saveOrUpdate = (id, data) => {
        return api.post(`${ApiUrl.crudCustomer}/upsert`, {...data, id});
    }

    static delete = (id) => {
        return api.delete(`${ApiUrl.crudCustomer}/${id}`);
    }
}