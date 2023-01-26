import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { GlobalStyles } from "./app/shared/styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
