import { combineReducers } from "redux";
import {SampleReducer} from "./sampleReducer";

const reducers = combineReducers({
  sample:SampleReducer
});

export default reducers;