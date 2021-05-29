import { combineReducers } from "redux";

import ApplicationReducer from "./application";
import {
  userGoogleLoginReducer,
  userLoginReducer,
  userRegisterReducer,
} from './userReducer';
export default combineReducers({
  application: ApplicationReducer,
  userGoogleLogin: userGoogleLoginReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});



