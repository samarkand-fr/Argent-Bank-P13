import axios from "axios";
import {
  startLoadingUser,
  loadUserSuccess,
  loadUserError,
  startLoadingEditUser,
  editUserSuccess,
  editUserError,
} from "../../slices/userSlice";
import {
  startLoadingToken,
  loadTokenSuccess,
  loadTokenError,
} from "../../slices/tokenSlice";

/**
 * Base URL of the API server.
 * @constant {string}
 */
const baseURL = 'http://localhost:3001/api/v1/user/';

/**
 * Function to get user token with POST method in API Call.
 * @function
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {function} - Redux Thunk function.
 */
export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(startLoadingToken());
    axios
      .post(baseURL + 'login', {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.body.token;
        console.log('Token received:', token); 
        dispatch(loadTokenSuccess(token));
        localStorage.setItem('token', token);
        dispatch(getUser(token));
      })
      .catch((error) => {
        console.error('Error getting token:', error); 
        dispatch(loadTokenError(error.message));
      });
  };
};

/**
 * Function to get user data with POST method in API Call.
 * @function
 * @param {string} token - User token.
 * @returns {function} - Redux Thunk function.
 */
export const getUser = (token) => {
  return (dispatch) => {
    dispatch(startLoadingUser());
    axios({
      method: 'POST',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(loadUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadUserError(error.message));
      });
  };
};

/**
 * Function to edit user firstname and lastname with PUT method in API Call.
 * @function
 * @param {string} firstName - User's first name.
 * @param {string} lastName - User's last name.
 * @returns {function} - Redux Thunk function.
 */
export const editUser = (firstName, lastName) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    dispatch(startLoadingEditUser());
    axios({
      method: 'PUT',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(editUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editUserError(error.message));
      });
  };
};
