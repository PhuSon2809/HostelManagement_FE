import axiosClient from '../../apis/axiosClient';
import {
    OWNERBILL,
} from './types';
import Swal from "sweetalert2";

export const getBills = (accountId, filters) => {
    console.log("filters: ", filters);
    return (dispatch) => {
        const token = axiosClient.getToken();
        dispatch(setOwnerBills([]));
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithIdFilterMiddleParams(`/Bills?accountId=${accountId}&pageIndex=${filters.pageIndex}&pageSize=${filters.pageSize}`)
                .then((response) => {
                    if (response.data) {
                        dispatch(setOwnerBills(response.data));
                        dispatch(settotalRecord(response.totalRecord));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }
}
// export const getBillById = (billId) => {
//     console.log("filters: ", filters);
//     return (dispatch) => {
//         const token = axiosClient.getToken();
        
//         if (token) {
//             axiosClient.setHeaderAuth(token)
//             axiosClient.getWithId("/Bills", id)
//                 .then((response) => {
//                     if (response.data) {
//                         dispatch(setOwnerBills(response.data));
//                         dispatch(settotalRecord(response.totalRecord));
//                     }
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//         }

//     }
// }
export const getBillsByHostel = (accountId, hostelId, filters) => {
    console.log("hostelId: ", hostelId);
    return (dispatch) => {
        const token = axiosClient.getToken();
        dispatch(setOwnerBills([]));
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithIdFilterMiddleParams(`/Bills?accountId=${accountId}&hostelId=${hostelId}&pageIndex=${filters.pageIndex}&pageSize=${filters.pageSize}`)
                .then((response) => {
                    console.log(" getBillsByHostel response: ", response);
                    if (response.data) {
                        dispatch(setOwnerBills(response.data));
                        dispatch(settotalRecord(response.totalRecord));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
export const getBillsByHostelAndRoom = (accountId, hostelId, roomId, filters) => {
    console.log("hostelId: ", hostelId);
    return (dispatch) => {
        const token = axiosClient.getToken();
        dispatch(setOwnerBills([]));
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithIdFilterMiddleParams(`/Bills?accountId=${accountId}&hostelId=${hostelId}&roomId=${roomId}&pageIndex=${filters.pageIndex}&pageSize=${filters.pageSize}`)
                .then((response) => {
                    console.log(" getBillsByHostelRoom response: ", response);
                    if (response.data) {
                        dispatch(setOwnerBills(response.data));
                        dispatch(settotalRecord(response.totalRecord));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }
}

export const createBill = (params, hostelId, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.post('/Bills', params)
                .then((response) => {
                    if (response) {
                        dispatch(getBillsByHostel(accountId, hostelId, filters));
                        console.log("response: ", response);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const deleteBill = (billId, accountId, hostelId, roomId, filters) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.delete(`/Bills/${billId}`)
                .then((response) => {
                    if (response) {
                        console.log("response: ", response);
                        Swal.fire(
                            "Delete room successfully",
                            "Click button to continute!",
                            "success"
                        );
                        if (roomId) {
                            dispatch(getBillsByHostelAndRoom(accountId, hostelId, roomId, filters))
                        } else if (hostelId) {
                            dispatch(getBillsByHostel(accountId, hostelId, filters))
                        } else {
                            dispatch(getBills(accountId, filters))
                        }
                    }
                })
                .catch((error) => {
                    console.log(error)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something wrong!",
                    });
                })
        }
    }
}

export const updateBillInfo = (billId, params) => {
    console.log("params: ", params);
    console.log("billId: ", billId);
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.put(`/Bills/${billId}`, params)
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


export const setOwnerBills = (payload) => {
    return {
        type: OWNERBILL.SET_BILLS,
        payload
    }
}
export const settotalRecord = (payload) => {
    return {
        type: OWNERBILL.SET_TOTALRECORD,
        payload
    }
}