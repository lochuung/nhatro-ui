import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";


export default class SettingServices {
    static getSettings = () => {
        return api.get(`${ApiUrl.crudSetting}`);
    }

    static updateSetting = (data) => {
        return api.post(`${ApiUrl.crudSetting}`, data);
    }
}