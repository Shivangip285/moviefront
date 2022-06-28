import apiService from "../../../helpers/apiService";


export default {
    change: async (oldPassword,password) => {

        return await apiService.postWithoutErrorHandling(`changePassword?password=${password}&oldpassword=${oldPassword}`);
    }

}
