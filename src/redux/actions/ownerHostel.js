import axiosClient from '../../apis/axiosClient';
import Swal from "sweetalert2";
import {
    OWNERHOSTEL,
} from './types';

export const getHostelByAccountId = (accountId, filters) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        dispatch(setHostels([]));

        if (token) {
            axiosClient.setHeaderAuth(token)
            // axiosClient.get('/Rooms/' + accountId)
            axiosClient.getWithIdFilterMiddleParams(`/Hostels?accountId=${accountId}&pageIndex=${filters.pageIndex}&pageSize=${filters.pageSize}`)
                .then((response) => {
                    if (response.data) {
                        console.log("response: ", response);
                        dispatch(setHostels(response.data));
                        dispatch(settotalRecord(response.totalRecord));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
export const getHostelById = (hostelId) => {
    console.log("hostelId: ", hostelId);
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithId(`/Hostels`, hostelId)
                .then((response) => {
                    if (response) {
                        console.log("response: ", response);
                        dispatch(setHostel(response));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const createHostel = (params, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.post('/Hostels', params)
                .then((response) => {
                    if (response) {
                        dispatch(getHostelByAccountId(accountId, filters));
                        console.log("response: ", response);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
export const updateHostelInfo = (hostelId, params) => {
    console.log(params);
    return (dispatch) => {
        const token = axiosClient.getToken();
        // const filters = {
        //     pageIndex: 1,
        //     pageSize: 9
        // }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.put(`/Hostels/${hostelId}`, params)
            // axiosClient.putWithIdAndParams('/Hostels',{hostelId}, params )
                .then((response) => {
                    if (response) {
                        // dispatch(getHostelByAccountId(accountId, filters));
                        console.log("response: ", response);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const newHostelImage = (params) => {
    console.log(params);
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.post(`/Images`, params)
                .then((response) => {
                    if (response) {
                        console.log("response: ", response);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const deleteHostel = (hostelId, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.delete(`/Hostels/${hostelId}`)
            // dispatch(getHostelByAccountId(accountId, filters));
                .then((response) => {
                    console.log("response: ", response);
                    if (response) {
                        console.log("response: ", response);
                        dispatch(getHostelByAccountId(accountId, filters));
                        Swal.fire(
                            'Delete hostel successfully',
                            'Click button to continute!',
                            'success'
                        )
                    }
                })
                .catch((error) => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Something wrong!",
                    })
                })
        }
    }
}


export const setHostel = (payload) => {
    return {
        type: OWNERHOSTEL.SET_HOSTEL,
        payload
    }
}
export const setHostels = (payload) => {
    return {
        type: OWNERHOSTEL.SET_HOSTELS,
        payload
    }
}
export const settotalRecord = (payload) => {
    return {
        type: OWNERHOSTEL.SET_TOTALRECORD,
        payload
    }
}