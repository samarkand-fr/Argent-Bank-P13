
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  token: '',
  tokenExist: null,
  error: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    startLoadingToken: (state) => {
      state.isLoading = true;
      state.token = '';
      state.tokenExist = null; // Initialize tokenExist to false
      state.error = '';
    },
    loadTokenSuccess: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.tokenExist = true; // Set tokenExist to true after successful login
      state.error = '';
    },
    loadTokenError: (state, action) => {
      state.isLoading = false;
      state.token = '';
      state.tokenExist = false; // Reset tokenExist to false if login fails
      state.error = action.payload.error;
    },
  },
});

export const { startLoadingToken, loadTokenSuccess, loadTokenError } = tokenSlice.actions;

export default tokenSlice.reducer;
