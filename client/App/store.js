import {combineReducers, applyMiddleware ,createStore, compose } from "redux";
import logger from "redux-logger";
import reducers from "./Reducers/reducers";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {createBrowserHistory} from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'


export const history = createBrowserHistory();

export default createStore(
    connectRouter(history)(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
    applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger,
        promise(),
        thunk
        ),
    ),

);
