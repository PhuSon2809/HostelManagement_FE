import { OWNERROOM } from "../actions/types"

 
const initState = {
    error: '',
    rooms: [],
    users: [],
    roomTypes: [],
    totalRecord: ''
}

const ownerRoom = (state = initState, action) => {
    switch (action.type) {
        case OWNERROOM.SET_ROOMS: 
            return {
                ...state,
                rooms: action.payload,
             
            }
        case OWNERROOM.SET_TOTALRECORD: 
            return {
                ...state,
                totalRecord: action.payload
             
            }
        case OWNERROOM.SET_USERS: 
            return {
                ...state,
                users: action.payload
             
            }
        case OWNERROOM.SET_ROOMTYPES: 
            return {
                ...state,
                roomTypes: action.payload
             
            }
        default: 
            return state
    }
}

export default ownerRoom
