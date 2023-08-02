import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  isLoading: false, // Flag to indicate if loading user data
  isLogged: false, // Flag to indicate if the user is logged in or not
  user: {}, // User data
  error: '', // Holds any error message related to user data loading or editing
};

// Create the user slice using createSlice function
const userSlice = createSlice({
  name: 'user', // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer for setting loading state for user data loading
    startLoadingUser: (state) => {
      state.isLoading = true;
    },
    // Reducer for setting user data after successful user data loading
    loadUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.user = action.payload;
      state.error = '';
    },
    // Reducer for setting error and reset user state after user data loading error
    loadUserError: (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = {};
      state.error = action.payload;
    },
    // Reducer for setting loading state for editing user data
    startLoadingEditUser: (state) => {
      state.isLoading = true;
    },
    // Reducer for setting user data after successful edit user data
    editUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    // Reducer for setting error and reset user state after edit user data error
    editUserError: (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.error = action.payload;
    },
    // Reducer for logging out the user and reset user state
    logOutUser: (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = {};
      state.error = '';
    },
  },
});

// Extract the actions from the user slice
export const {
  startLoadingUser,
  loadUserSuccess,
  loadUserError,
  startLoadingEditUser,
  editUserSuccess,
  editUserError,
  logOutUser,
} = userSlice.actions;

// Export the user slice's reducer
export default userSlice.reducer;
