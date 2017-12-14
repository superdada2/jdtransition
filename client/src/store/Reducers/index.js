import { combineReducers } from "redux";
import {SampleReducer} from "./sampleReducer";
import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  sample:SampleReducer,
  router:routerReducer
});

export default reducers;