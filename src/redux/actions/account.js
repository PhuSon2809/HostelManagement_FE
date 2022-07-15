import {

    ACCOUNT
} from './types'
import StorageKeys from './../../constants/storage-keys';
import axiosClient from '../../apis/axiosClient';

export const logout3 = () => {
    return (dispatch) => {
        const token = axiosClient.getToken();

        if (token) {
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.ACCOUNT);
        }
        // dispatch(setInfo())
    }

}


export const setAccounts = (payload) => {
    return {
        type: ACCOUNT.SET_ACCOUNTS,
        payload
    }
}

export const setAccount = (payload) => {
    return {
        type: ACCOUNT.SET_ACCOUNT,
        payload
    }
}
