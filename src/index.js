import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          changePost={store.changePost.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.querySelector("#first")
  );
};
rerenderEntireTree(store.state);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
