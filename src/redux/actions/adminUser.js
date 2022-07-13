import axiosClient from '../../apis/axiosClient';
import {
    ADMINUSER
} from './types'

export const getListUser = () => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getNo(`/Accounts?roleId=2`)
                .then((response) => {
                    if (response.data) {
                        dispatch(setAdminUsers(response.data))
                        // dispatch(setCount(response.count))
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const setAdminUsers = (payload) => {
    return {
        type: ADMINUSER.SET_USERS,
        payload
    }
}

export const setAdminUser = (payload) => {
    return {
        type: ADMINUSER.SET_USER,
        payload
    }
}
