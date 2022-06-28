import apiService from "../../../helpers/apiService";

export default {
    fetchAll: async (date) => {
        const response = await apiService.get(`shows?date=${date}`);
        return response.data;
    },

    getRevenue: async (date) => {
        const response = await apiService.get(`revenue?date=${date}`);
        return response.data;
    },

    create: async (payload) => {
        const response = await apiService.post("shows", payload);
        return response.data;
    },

    change: async (oldPassword,password) => {

        return await apiService.postWithoutErrorHandling(`changePassword?password=${password}&oldpassword=${oldPassword}`);
    }


}
