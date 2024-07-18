import React from "react";
import ReactDOM from "react-dom/client";
import A from "./A";
import UseEffect from "./UseEffect";
import Form from "./Form";

import App from "./App";
import Mobile from "./Mobile";
import MultipleReturn from "./MultipleReturn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <A />
  </React.StrictMode>
);

// f you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
