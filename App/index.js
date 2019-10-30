import React, { Fragment } from 'react';
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import Home from "./page/home";
import Pre from "./page/pre";
import store from "./store";
//import { handleUserLuckyNumber} from "./resource";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import "./index.less";

//生成幸运数字
//handleUserLuckyNumber();
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
           <Fragment>
               <Pre />
               <Switch>
                   <Route path="/home" component={Home} ></Route>
               </Switch>
           </Fragment>
        </BrowserRouter>
    </Provider>, 
document.getElementById("root"));

