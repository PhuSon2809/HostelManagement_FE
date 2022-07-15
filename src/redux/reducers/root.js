import { combineReducers } from 'redux'
import accountReducer from './accounts';
import AdminOwnerReducer from './adminOwner';
import AdminUserReducer from './adminUser';
import loginReducer from './login';


const rootReducer = combineReducers({
    account: accountReducer,
    AdminUser: AdminUserReducer,
    adminOwner: AdminOwnerReducer,
    login: loginReducer,

});

export default rootReducer;