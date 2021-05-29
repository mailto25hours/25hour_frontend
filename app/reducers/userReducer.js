import * as actionTypes from '@actions/actionTypes';
const initialState = {

  loading: false
};

export const userGoogleLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_USER_LOGIN_REQUEST:
      return { loading: true };
    case actionTypes.GOOGLE_USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.GOOGLE_USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.GOOGLE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    
    case actionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case actionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};