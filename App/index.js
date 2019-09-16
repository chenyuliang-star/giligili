import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import Home from "./page/home";
import store from "./store";
import "./index.less";

ReactDom.render(
    <Provider store={store}>
       <Home />
    </Provider>, 
document.getElementById("root"));