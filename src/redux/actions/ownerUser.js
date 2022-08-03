import axiosClient from '../../apis/axiosClient';
import {
    OWNERUSER
} from './types'

export const getListUser = (accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithFilter(`/Accounts?roleId=2&accountId=${accountId}`)
                .then((response) => {
                    if (response.data) {
                        console.log("response: ", response);
                        dispatch(setOwnerUser(response.data))
                        dispatch(settotalRecord(response.totalRecord))
                        // dispatch(setCount(response.count))
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const setOwnerUser = (payload) => {
    return {
        type: OWNERUSER.SET_USERS,
        payload
    }
}
export const settotalRecord = (payload) => {
    return {
        type: OWNERUSER.SET_TOTALRECORD,
        payload
    }
}
