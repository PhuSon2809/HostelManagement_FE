import { OWNERBILL } from "../actions/types"

 
const initState = {
    error: '',
    bills: [],
    totalRecord: ''
}

const ownerBill = (state = initState, action) => {
    switch (action.type) {
        case OWNERBILL.SET_BILLS: 
            return {
                ...state,
                bills: action.payload,
             
            }
        case OWNERBILL.SET_TOTALRECORD: 
            return {
                ...state,
                totalRecord: action.payload
             
            }
        default: 
            return state
    }
}

export default ownerBill
