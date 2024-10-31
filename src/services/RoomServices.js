import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";

export default class RoomServices {
    static getRooms = (data) => {
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
