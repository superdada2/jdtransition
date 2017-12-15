import {combineReducers} from "redux";
import {SampleReducer} from "./sampleReducer";
import {routerReducer} from 'react-router-redux'
import {tableReducer} from './tableReducer'
import {uiReducer} from './uiReducer'
import {fieldReducer} from './fieldReducers'

const reducers = combineReducers({table: tableReducer, router: routerReducer, ui: uiReducer, field: fieldReducer});

export default reducers;