import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";

export default class InvoiceServices {
    static getInvoices = (data) => {
        return api.post(`${ApiUrl.crudInvoice}/search`, data);
    };

    static getPrintUrl = (id) => {
        return `${ApiUrl.crudInvoice}/print/${id}`;
    }

    static generateInvoices = ({monthYear, startDay, generateContractRequest}) => {
        return api.post(`${ApiUrl.crudInvoice}/generate`, {monthYear, startDay, generateContractRequest, branchId: 1});
    }

    static printInvoices = ({month, year}) => {
        return `${ApiUrl.crudInvoice}/print/monthly?month=${month}&year=${year}`;
    }

    static
    getInvoice = (id) => {
        return api.get(`${ApiUrl.crudInvoice}/${id}`);
    };

    static
    createInvoice = (data) => {
        return api.post(ApiUrl.crudInvoice, {...data, branchId: 1});
    };

    static
    saveOrUpdateInvoice = (id, data) => {
        if (!id) {
            return InvoiceServices.createInvoice(data);
        }
        return api.put(`${ApiUrl.crudInvoice}`, {...data, id, branchId: 1});
    };

    static
    deleteInvoice = (id) => {
        return api.delete(`${ApiUrl.crudInvoice}/${id}`);
    };

    static updatePayment = (id, paidAmount) => {
        return api.put(`${ApiUrl.crudInvoice}/payment/${id}`, { paidAmount });
    };
}
