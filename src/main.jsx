import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';
import { Provider } from 'react-redux';

import App from './App';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
