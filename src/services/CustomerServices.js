import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";


export default class CustomerServices {
    static getCustomers = () => {
        return api.get(ApiUrl.crudCustomer);
    }
}