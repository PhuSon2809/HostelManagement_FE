import axiosClient from '../../apis/axiosClient';
import StorageKeys from '../../constants/storage-keys';
import {  ADMINUSER } from '../actions/types';

const token = axiosClient.getToken();
let infoUser = '';
if (token) {
    infoUser = JSON.parse(localStorage.getItem((StorageKeys.ACCOUNT)))
}

const initState = {
    error: '',
    role: '',
    user: '',
    users: [],
    infoUser: infoUser
}

const AdminUserReducer = (state = initState, action) => {
    switch (action.type) {
        case ADMINUSER.SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case ADMINUSER.SET_USER:
            return {
                ...state,
                // role: action.payload.Role,
                // user: action.payload
            }
        case ADMINUSER.SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload
            }
        case ADMINUSER.SET_CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: ''
            }
        default:
            return state
    }
}

export default AdminUserReducer