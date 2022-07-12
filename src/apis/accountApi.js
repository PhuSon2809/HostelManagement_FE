import axiosClient from './axiosClient';

const accountApi = {
    register(data) {
        //set duong` dan~
        const url = '/Accounts/SignUp';
        return axiosClient.post(url, data);
    },
    login(data) {
        //set duong` dan~
        console.log("data: ", data);
        const url = '/Accounts/SignIn';
        return axiosClient.post(url, data);
    },

   
};

export default accountApi;