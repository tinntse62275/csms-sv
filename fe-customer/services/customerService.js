import axiosClient from '@/services/axiosClient';
import axiosJWT from './axiosJWT';

const customerService = {

    register: async (data) => {
        return await axiosClient.post('/customer/register', data);
    },

    login: async (data) => {
        return await axiosClient.post('/customer/login', data);
    },

    logout: async () => {
        return await axiosClient.post('/customer/logout');
    },

    refreshAccessToken: async () => {
        return await axiosClient.post('/customer/refresh');
    },

    getInfor: async () => {
        return await axiosJWT.get('/customer/infor');
    },

    update: async (data) => {
        return await axiosJWT.put('/customer/update', data);
    },

    ForgotPass: async (data) => {
        return await axiosClient.post('/customer/forgotpass', data);
    },

    verifyOtp: async (data) => {
        return await axiosClient.post('/customer/verifyOtp', data);
    },

    changePassword: async (data) => {
        return await axiosClient.post('/customer/resetPassword', data);
    },

};

export default customerService;