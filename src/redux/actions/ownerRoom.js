import axiosClient from '../../apis/axiosClient';
import {
    OWNERROOM,
} from './types';
import Swal from "sweetalert2";

export const getListUserByRoom = (roomId) => {
    console.log("roomId: ", roomId);
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            // axiosClient.getWithFilter(`/RoomMemberships?roomId=${roomId}`)
            axiosClient.getWithFilter(`/RoomMemberships?roomId=${roomId}`)
                .then((response) => {
                    if (response) {
                        console.log("response user: ", response);
                        dispatch(setUserByRoom(response))
                        // dispatch(setCount(response.count))
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const getRoomByAccountId = (accountId, hostelId, filters) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        dispatch(setOwnerRooms([]));

        if (token) {
            axiosClient.setHeaderAuth(token)
            // axiosClient.get('/Rooms/' + accountId)
            axiosClient.getWithIdFilterMiddleParams(`/Rooms?hostelId=${hostelId}&accountId=${accountId}&pageIndex=${filters.pageIndex}&pageSize=${filters.pageSize}`)
                .then((response) => {
                    if (response.data) {
                        dispatch(setOwnerRooms(response.data));
                        dispatch(settotalRecord(response.totalRecord));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
export const getRoomTypes = (hostelId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        dispatch(setRoomTypes([]));

        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.getWithFilter(`/RoomTypes?hostelId=${hostelId}`)
                .then((response) => {
                    if (response) {
                        dispatch(setRoomTypes(response));
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

export const createRoom = (params, hostelId, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.post('/Rooms', params)
                .then((response) => {
                    if (response) {
                        dispatch(getRoomByAccountId(accountId, hostelId, filters));
                        console.log("response: ", response);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
export const addNewUserToRoom = (params) => {
    return (dispatch) => {
        console.log("params: ", params);
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.post('/RoomMemberships', params)
                .then((response) => {
                    if (response) {
                        // dispatch(getRoomByAccountId(accountId, hostelId, filters));
                        console.log("response: ", response);
                        Swal.fire(
                            'Add user to room successfully',
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

export const updateRoomInfo = (roomId, params) => {
    console.log(params);
    return (dispatch) => {
        const token = axiosClient.getToken();
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.put(`/Rooms/${roomId}`, params)
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
export const newRoomImage = (roomId, params) => {
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

export const deleteRoom = (roomId, hostelId, accountId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        const filters = {
            pageIndex: 1,
            pageSize: 9
        }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.delete(`/Rooms/${roomId}`)
                .then((response) => {
                    if (response) {
                        console.log("response: ", response);
                        dispatch(getRoomByAccountId(accountId, hostelId, filters));
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

export const deleteUserFromRoom = (userId, roomId) => {
    return (dispatch) => {
        const token = axiosClient.getToken();
        // const filters = {
        //     pageNumber: 1,
        //     pageSize: 9
        // }
        if (token) {
            axiosClient.setHeaderAuth(token)
            axiosClient.delete(`/RoomMemberships/${userId}`)
                .then((response) => {
                    if (response) {
                        dispatch(getListUserByRoom(roomId));
                        Swal.fire(
                            'Delete member successfully',
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


export const setOwnerRooms = (payload) => {
    return {
        type: OWNERROOM.SET_ROOMS,
        payload
    }
}
export const setUserByRoom = (payload) => {
    return {
        type: OWNERROOM.SET_USERS,
        payload
    }
}
export const setRoomTypes = (payload) => {
    return {
        type: OWNERROOM.SET_ROOMTYPES,
        payload
    }
}
export const settotalRecord = (payload) => {
    return {
        type: OWNERROOM.SET_TOTALRECORD,
        payload
    }
}