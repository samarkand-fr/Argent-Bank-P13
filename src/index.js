import React from 'react';
import { createRoot } from 'react-dom/client';

// components imports
import { App } from './App';
import { store, persistor } from './Redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Use createRoot from ReactDOM to enable Concurrent Mode (React v18+ feature)
const root = createRoot(document.getElementById('root'));

root.render(
  // Wrapping the entire application with React Strict Mode for additional checks during development
  <React.StrictMode>
    {/* Redux Provider to provide the Redux store to the entire app */}
    <Provider store={store}>
      {/* PersistGate to delay rendering the application until the persisted state has been retrieved */}
      <PersistGate loading={null} persistor={persistor}>
        {/* The root component of the application */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
