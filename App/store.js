import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { homeRedux } from "./redux";
import thunk from "redux-thunk";

//用于处理各个页面action的reducers
const reducers = combineReducers({
    homeRedux
});

// store对象
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f =>f
));

export default store;