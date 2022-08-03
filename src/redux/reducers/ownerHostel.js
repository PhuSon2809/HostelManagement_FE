import { OWNERHOSTEL } from "../actions/types"

 
const initState = {
    error: '',
    hostel: {},
    hostels: [],
    totalRecord: ''
}

const ownerHostel = (state = initState, action) => {
    switch (action.type) {
        case OWNERHOSTEL.SET_HOSTEL: 
            return {
                ...state,
                hostel: action.payload,
             
            }
        case OWNERHOSTEL.SET_HOSTELS: 
            return {
                ...state,
                hostels: action.payload,
             
            }
        case OWNERHOSTEL.SET_TOTALRECORD: 
            return {
                ...state,
                totalRecord: action.payload
             
            }
        default: 
            return state
    }
}

export default ownerHostel
