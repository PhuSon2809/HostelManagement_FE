import { combineReducers } from 'redux'
import accountReducer from './accounts';
import AdminOwnerReducer from './adminOwner';
import AdminUserReducer from './adminUser';
import loginReducer from './login';
import ownerBill from './ownerBill';
import ownerBooking from './ownerBooking';
import ownerHostel from './ownerHostel';
import ownerRoom from './ownerRoom';
import OwnerUserReducer from './ownerUser';


const rootReducer = combineReducers({
    account: accountReducer,
    AdminUser: AdminUserReducer,
    adminOwner: AdminOwnerReducer,
    login: loginReducer,
    ownerRoom: ownerRoom,
    ownerUser: OwnerUserReducer,
    ownerBill: ownerBill,
    ownerHostel: ownerHostel,
    ownerBooking: ownerBooking
});

export default rootReducer;