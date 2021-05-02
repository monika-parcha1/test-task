import { combineReducers } from "redux";
import { dataReducer } from "./data.reducer";

const reducers = combineReducers({
    allData: dataReducer,
});
export default reducers;