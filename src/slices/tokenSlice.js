import { createSlice } from '@reduxjs/toolkit';

// Initial state for the token slice
const initialState = {
  isLoading: false, // Flag to indicate if loading
  token: '', // The user's token
  tokenExist: null, // Flag to indicate if a token exists or not (null initially)
  error: '', // Holds any error message related to token loading
};

// Create the token slice using createSlice function
const tokenSlice = createSlice({
  name: 'token', // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer for setting loading state and clearing tokenExist and error
    startLoadingToken: (state) => {
      state.isLoading = true;
      state.token = '';
      state.tokenExist = null;
      state.error = '';
    },
    // Reducer for setting token and tokenExist after successful login
    loadTokenSuccess: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.tokenExist = true;
      state.error = '';
    },
    // Reducer for setting error and resetting tokenExist after login error
    loadTokenError: (state, action) => {
      state.isLoading = false;
      state.token = '';
      state.tokenExist = false;
      state.error = action.payload.error;
    },
  },
});

// Extract the actions from the token slice
export const { startLoadingToken, loadTokenSuccess, loadTokenError } = tokenSlice.actions;

// Export the token slice's reducer
export default tokenSlice.reducer;
