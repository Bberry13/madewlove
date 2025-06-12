import React from 'react';
import './App.css';
import { RouterProvider } from './router/router';
import { Provider } from 'react-redux';
import store from './store/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <RouterProvider />
      </Provider>
  );
}

export default App;
