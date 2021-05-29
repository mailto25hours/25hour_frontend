// import axios from 'axios';
import * as actionTypes from '@actions/actionTypes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const googleLogin = idToken => async dispatch => {
  try {
    // request action
    dispatch({type: actionTypes.GOOGLE_USER_LOGIN_REQUEST});

    // set content type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // send post request
    // const {data} = await axios.post(
    //   `https:herokuapp.com/api/auth/google`,
    //   {
    //     token: idToken,
    //   },
    // );

    // send back user data
    dispatch({
      type: actionTypes.GOOGLE_USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GOOGLE_USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const login = (email, password) => async dispatch => {
    console.log("dddd",email)
  try {
    // request action
    dispatch({type: actionTypes.USER_LOGIN_REQUEST});

    // set content type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // authorize users and send post request
    // const {data} = await axios.post(
    //   `https:api/login`,
    //   {
    //     email,
    //     password,
    //   },
    //   config,
    // );
    
    // send back user data
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: email,
    });
  } catch (error) {
    // catch and send back the error
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async dispatch => {
  try {
    // request action
    dispatch({
      type: actionTypes.USER_REGISTER_REQUEST,
    });

    // set content type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // authorize user
    // const {data} = await axios.post(
    //   'https/api/register',
    //   {
    //     email,
    //     password,
    //   },
    //   config,
    // );

    // send back registration response
    dispatch({
      type: actionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // catch error
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const googleLogout = () => async dispatch => {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
  dispatch({type: actionTypes.GOOGLE_USER_LOGOUT});
};

export const logout = () => dispatch => {
  dispatch({type: actionTypes.USER_LOGOUT});
};