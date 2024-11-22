import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";


export default class ContractServices {
    static getContracts = (data) => {
        data['sorts'] = data['sorts'] || [{key: 'createdDate', direction: 'DESC'}];
        return api.post(`${ApiUrl.crudContract}/search`, data);
    };

    static getContract = (id) => {
        return api.get(`${ApiUrl.crudContract}/${id}`);
    };

    static checkout = ({contractId, checkoutDate}) => {
        return api.post(`${ApiUrl.crudContract}/check-out`, {contractId, checkoutDate});
    }

    static getPrintUrl = (id) => {
        return `${ApiUrl.crudContract}/print/${id}`;
    };

    static getContractsAvailable = () => {
        return api.get(`${ApiUrl.crudContract}/all-available`);
    }

    static createContract = (data) => {
        return api.post(ApiUrl.crudContract, {...data, branchId: 1});
    };

    static checkin = (data) => {
        return api.post(`${ApiUrl.crudContract}/check-in`, data);
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

    static addMembers(data) {
        return api.post(`${ApiUrl.crudContract}/add-member`, data);
    }


    static changeOwner(data) {
        return api.post(`${ApiUrl.crudContract}/change-owner`, data);
    }

    static leave(data) {
        return api.post(`${ApiUrl.crudContract}/leave`, data);
    }
}