import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import expense from "./ExpenseReducer";

const rootReducer = combineReducers({
    expense,

    routing: routerReducer
});

export default rootReducer;