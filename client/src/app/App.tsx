import React from "react";
import { RouterProvider } from "./router/router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import store from "./store/store";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
