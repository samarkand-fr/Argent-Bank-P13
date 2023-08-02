import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../../slices/userSlice';
import tokenReducer from '../../slices/tokenSlice';

// Configuration for Redux-persist
const persistConfig = {
  key: 'root', // Key to use for persisting the state in local storage
  storage, // Storage engine to use for persisting (local storage in this case)
};

// Create a persisted reducer using the provided configuration
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    getUser: userReducer, // Reducer for user state
    token: tokenReducer, // Reducer for token state
  })
);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer for the store
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Disable serializableCheck for this middleware only (since we are using redux-persist)
  }),
});

// Create a persistor object to enable rehydration of the Redux store
export const persistor = persistStore(store);
