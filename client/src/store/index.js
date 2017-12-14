import {combineReducers, applyMiddleware ,createStore, compose } from "redux";
import logger from "redux-logger";
import reducers from "./Reducers";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


export const history = createHistory()
const middleware = routerMiddleware(history)

export const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
    applyMiddleware(
        middleware,
        logger,
        promise(),
        thunk
        ),
    ),
);
