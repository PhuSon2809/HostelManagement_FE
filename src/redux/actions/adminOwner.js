import axiosClient from '../../apis/axiosClient';
import {
    ADMINOWNER,
    ADMINUSER
} from './types'
import Swal from "sweetalert2";

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

export const deactiveAccount = (userID) => {
    return (dispatch) => {
        const token = axiosClient.getToken();

        if (token) {
            axiosClient.setHeaderAuth(token)

            axiosClient.put(`/Accounts/ActiveOrDeactive?id=${userID}`)
                .then((response) => {
                    dispatch(getListOwner())
                    Swal.fire(
                        'Update successfully',
                        'Click button to continute!',
                        'success'
                    )
                })
                .catch((error) => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
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
