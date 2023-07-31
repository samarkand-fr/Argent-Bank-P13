import React from 'react'
import { createRoot } from "react-dom/client";

// components imports
import { App } from './App'
import { store ,persistor} from './Redux/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
