import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./app.js";
import "./styles.css";


const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, rootElement);
