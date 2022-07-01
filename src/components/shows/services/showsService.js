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
    fetchAllSlots: async () => {
            const response = await apiService.get(`slots/endTime`);
            console.log("endTime" + response.data);
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