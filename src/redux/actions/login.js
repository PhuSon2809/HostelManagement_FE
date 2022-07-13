import Swal from 'sweetalert2';
import axiosClient from '../../apis/axiosClient';
import StorageKeys from './../../constants/storage-keys';
import {
    LOGIN
} from './types';

export const login = (params) => {
    return async (dispatch) => {
        await axiosClient.post('/Accounts/SignIn', params)
            .then((response) => {
                axiosClient.saveToken(response.token)
                localStorage.setItem(StorageKeys.ACCOUNT, JSON.stringify(response.accounts));
                if (response) {
                    dispatch(setLogin(response.accounts))
                }
            })
            .catch((errors) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errors,
                })
            })
    }
}


export const register = (params, closeDialog) => {
    return (dispatch) => {
        axiosClient.post('/accounts/AccountSystem', params)
            .then((response) => {
                // localStorage.setItem(StorageKeys.TOKEN, data.jwt);
                // localStorage.setItem(StorageKeys.ACCOUNT, JSON.stringify(data.user));
                if (response) {
                    // dispatch(setRegister(response))
                    if (closeDialog) {
                        closeDialog();
                    }
                    Swal.fire(
                        'Register successfully',
                        'Click button to continute!',
                        'success'
                    )
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                })
            })
    }
}

export const logoutAccount = (loading = true) => {
    return (dispatch) => {
        localStorage.removeItem(StorageKeys.TOKEN);
        localStorage.removeItem(StorageKeys.ACCOUNT);
        if (loading) {
            dispatch(setLogout(loading));
        }
    }
}

export const setLogin = (payload) => {
    return {
        type: LOGIN.SET_LOGIN,
        payload
    }
}
export const setLogout = (payload) => {
    return {
        type: LOGIN.SET_LOGOUT,
        payload
    }
}
export const setRegister = (payload) => {
    return {
        type: LOGIN.SET_REGISTER,
        payload
    }
}
export const setAccount = (payload) => {
    return {
        type: LOGIN.SET_ACCOUNT,
        payload
    }
}