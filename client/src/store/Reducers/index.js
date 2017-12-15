import {combineReducers} from "redux";
import {SampleReducer} from "./sampleReducer";
import {routerReducer} from 'react-router-redux'
import {tableReducer} from './tableReducer'
import {uiReducer} from './uiReducer'

const reducers = combineReducers({table: tableReducer, router: routerReducer, ui: uiReducer});

export default reducers;