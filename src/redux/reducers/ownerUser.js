import { OWNERUSER } from '../actions/types';

const initState = {
    error: '',
    role: '',
    user: '',
    users: [],
    totalRecord: '',
}

const OwnerUserReducer = (state = initState, action) => {
    switch (action.type) {
        case OWNERUSER.SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case OWNERUSER.SET_USER:
            return {
                ...state,
                // role: action.payload.Role,
                // user: action.payload
            }
        case OWNERUSER.SET_TOTALRECORD:
            return {
                ...state,
                totalRecord: action.payload

            }
        default:
            return state
    }
}

export default OwnerUserReducer