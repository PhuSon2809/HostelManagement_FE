import axiosClient from '../../apis/axiosClient';
import {
    ADMINOWNER,
    ADMINUSER
} from './types'

export const getListOwner = () => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getNo(`/Accounts?roleId=3`)
                .then((response) => {
                    if (response.data) {
                        dispatch(setAdminOwners(response.data))
                        // dispatch(setCount(response.count))
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const setAdminOwners = (payload) => {
    return {
        type: ADMINOWNER.SET_OWNERS,
        payload
    }
}

export const setAdminOwner = (payload) => {
    return {
        type: ADMINOWNER.SET_OWNER,
        payload
    }
}
