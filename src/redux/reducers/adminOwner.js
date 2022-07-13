import axiosClient from '../../apis/axiosClient';
import StorageKeys from '../../constants/storage-keys';
import {  ADMINOWNER } from '../actions/types';

const token = axiosClient.getToken();
let infoUser = '';
if (token) {
    infoUser = JSON.parse(localStorage.getItem((StorageKeys.ACCOUNT)))
}

const initState = {
    error: '',
    role: '',
    owner: '',
    owners: [],
    infoUser: infoUser
}

const AdminOwnerReducer = (state = initState, action) => {
    switch (action.type) {
        case ADMINOWNER.SET_OWNERS:
            return {
                ...state,
                owners: action.payload
            }
        case ADMINOWNER.SET_OWNER:
            return {
                ...state,
                // role: action.payload.Role,
                // owner: action.payload
            }
        case ADMINOWNER.SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload
            }
        case ADMINOWNER.SET_CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: ''
            }
        default:
            return state
    }
}

export default AdminOwnerReducer