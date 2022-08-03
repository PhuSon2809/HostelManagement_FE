import axiosClient from '../../apis/axiosClient';
import Swal from "sweetalert2";
import {
    OWNERBOOKING,
} from './types';


export const getListBooking= (accountId, filters) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithFilter(`/Bookings?accountId=${accountId}&pageIndex=${filters.pageIndex}&pageSize=${filters.pageSize}`)
                .then((response) => {
                    if (response.data) {
                        dispatch(setBookings(response.data))
                        dispatch(settotalRecord(response.totalRecord));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const deleteBooking = (bookingId, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.delete(`/Bookings/${bookingId}`)
                .then((response) => {
                    if (response) {
                        console.log("response: ", response);
                        dispatch(getListBooking(accountId, filters));
                        // Swal.fire(
                        //     'Delete room successfully',
                        //     'Click button to continute!',
                        //     'success'
                        // )
                    }
                })
                .catch((error) => {
                    console.log(error)
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: 'Oops...',
                    //     text: "Something wrong!",
                    // })
                })
        }
    }
}
export const updateBooking = (bookingId, paramms, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.put(`/Bookings/${bookingId}`, paramms)
                .then((response) => {
                    if (response) {
                        console.log("response: ", response);
                        dispatch(getListBooking(accountId, filters));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}



export const setBookings = (payload) => {
    return {
        type: OWNERBOOKING.SET_BOOKINGS,
        payload
    }
}

export const settotalRecord = (payload) => {
    return {
        type: OWNERBOOKING.SET_TOTALRECORD,
        payload
    }
}