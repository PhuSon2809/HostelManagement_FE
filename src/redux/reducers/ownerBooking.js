import { OWNERBOOKING } from "../actions/types"

 
const initState = {
    error: '',
    bookings: [],
    totalRecord: ''
}

const ownerBooking = (state = initState, action) => {
    switch (action.type) {
        case OWNERBOOKING.SET_BOOKINGS: 
            return {
                ...state,
                bookings: action.payload,
             
            }
        case OWNERBOOKING.SET_TOTALRECORD: 
            return {
                ...state,
                totalRecord: action.payload
             
            }
        default: 
            return state
    }
}

export default ownerBooking
