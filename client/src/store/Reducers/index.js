import { combineReducers } from "redux";
import {SampleReducer} from "./sampleReducer";
import {routerReducer} from 'react-router-redux'
import {tableReducer} from './tableReducer'

const reducers = combineReducers({
  table:tableReducer,
  router:routerReducer
});

export default reducers;