// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../../slices/userSlice';
// import tokenReducer from '../../slices/tokenSlice';


// export const store = configureStore({
//   reducer: {
//     getUser: userReducer,
//     token: tokenReducer,
//   },
// });

import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../../slices/userSlice';
import tokenReducer from '../../slices/tokenSlice';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    getUser: userReducer,
    token: tokenReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Disable serializableCheck for this middleware only
  }),
});

export const persistor = persistStore(store);
