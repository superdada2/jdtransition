import {combineReducers} from "redux";
import {SampleReducer} from "./sampleReducer";
import {routerReducer} from 'react-router-redux'
import {tableReducer} from './tableReducer'
import {uiReducer} from './uiReducer'
import {fieldReducer} from './fieldReducers'
import {translationReducer} from './translationReducers'

const reducers = combineReducers({table: tableReducer, router: routerReducer, ui: uiReducer, field: fieldReducer, translation: translationReducer});

export default reducers;