import ChangePageReducer from "./changePage";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    changePage: ChangePageReducer
})

export default allReducers;