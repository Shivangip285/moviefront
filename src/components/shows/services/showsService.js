import apiService from "../../../helpers/apiService";

export default {
    fetchAll: async (date) => {
        const response = await apiService.get(`shows?date=${date}`);
        return response.data;
    },

    fetchAllMovies: async () => {
        const response = await apiService.get(`shows/allshow`);
        return response.data;
    },

    slotTimes: async () => {
        const response = await apiService.get(`slots`);
        return response.data;
    },

    getRevenue: async (date) => {
        const response = await apiService.get(`revenue?date=${date}`);
        return response.data;
    },

    create: async (payload) => {
        const response = await apiService.post("shows", payload);
        return response.data;
    }
}