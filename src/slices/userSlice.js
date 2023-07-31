import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoadingUser: (state) => {
      state.isLoading = true;
    },
    loadUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.user = action.payload;
      state.error = '';
    },
    loadUserError: (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = {};
      state.error = action.payload;
    },
    startLoadingEditUser: (state) => {
      state.isLoading = true;
    },
    editUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    editUserError: (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.error = action.payload;
    },
    logOutUser: (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = {};
      state.error = '';
    },
  },
});

export const {
  startLoadingUser,
  loadUserSuccess,
  loadUserError,
  startLoadingEditUser,
  editUserSuccess,
  editUserError,
  logOutUser,
} = userSlice.actions;

export default userSlice.reducer;
