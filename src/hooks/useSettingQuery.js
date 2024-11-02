import { useQuery } from "@tanstack/react-query";
import SettingServices from "../services/SettingServices.js";

const useSettingsQuery = () => {
    return useQuery({
        queryKey: ['settings'],
        queryFn: async () => {
            const response = await SettingServices.getSettings();
            return { settings: response.data };
        },
        keepPreviousData: true
    });
};

export default useSettingsQuery;
