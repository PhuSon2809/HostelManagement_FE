import axiosClient from '../../apis/axiosClient';
import {
    ADMINUSER
} from './types'
import Swal from "sweetalert2";

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

export const deactiveAccount = (userID) => {
    return (dispatch) => {
        const token = axiosClient.getToken();

        if (token) {
            axiosClient.setHeaderAuth(token)

            axiosClient.put(`/Accounts/ActiveOrDeactive?id=${userID}`)
                .then((response) => {
                    dispatch(getListUser())
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

// export const active = (userID) => {
//     return (dispatch) => {
//         const token = axiosClient.getToken();

//         if (token) {
//             axiosClient.setHeaderAuth(token)

//             axiosClient.put(`/Accounts/ActiveOrDeactive?id=${userID}`)
//                 .then((response) => {
//                     dispatch(getListUser())
//                     Swal.fire(
//                         'Update successfully',
//                         'Click button to continute!',
//                         'success'
//                     )
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Something went wrong!',
//                     })
//                 })
//         }
//     }
// }

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
