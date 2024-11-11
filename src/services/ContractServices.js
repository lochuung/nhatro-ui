import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";


export default class ContractServices {
    static getContracts = (data) => {
        return api.post(`${ApiUrl.crudContract}/search`, data);
    };

    static getContract = (id) => {
        return api.get(`${ApiUrl.crudContract}/${id}`);
    };

    static getPrintUrl = (id) => {
        return `${ApiUrl.crudContract}/print/${id}`;
    };

    static getContractsAvailable = () => {
        return api.get(`${ApiUrl.crudContract}/all-available`);
    }

    static createContract = (data) => {
        return api.post(ApiUrl.crudContract, {...data, branchId: 1});
    };

    static saveOrUpdateContract = (id, data) => {
        if (!id) {
            return ContractServices.createContract(data);
        }
        return api.put(`${ApiUrl.crudContract}`, {...data, id, branchId: 1});
    };

    static deleteContract = (id) => {
        return api.delete(`${ApiUrl.crudContract}/${id}`);
    };
}