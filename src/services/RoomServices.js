import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";

export default class RoomServices {
    static getRooms = (page = 0, size = 10, status = null, search = null, sort = null) => {
        // The API expects a POST request with page and size in the body
        const data = {page, size};
        if (status) {
            data['filters'] = [{key: 'status', operator: 'EQUAL', fieldType: 'STRING', value: status}];
        }
        if (search) {
            data['filters'] = data['filters'] || [];
            data['filters'].push({key: 'name', operator: 'LIKE', fieldType: 'STRING', value: search});
        }
        if (sort) {
            data['sorts'] = data['sorts'] || [];
            data['sorts'].push({key: sort.column, direction: sort.direction});
        }
        return api.post(`${ApiUrl.crudRoom}/search`, data);
    };

    static getRoom = (id) => {
        return api.get(`${ApiUrl.crudRoom}/${id}`);
    };

    static createRoom = (data) => {
        return api.post(ApiUrl.crudRoom, {...data, branchId: 1});
    };

    static saveOrUpdateRoom = (id, data) => {
        if (!id) {
            return RoomServices.createRoom(data);
        }
        return api.put(`${ApiUrl.crudRoom}`, {...data, id, branchId: 1});
    };

    static deleteRoom = (id) => {
        return api.delete(`${ApiUrl.crudRoom}/${id}`);
    };
}
